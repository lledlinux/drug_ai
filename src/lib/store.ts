import { create } from "zustand";
import { persist } from "zustand/middleware";
import { DRUGS } from "./catalog";

export type CardState = {
  ease: number;
  interval: number;
  reps: number;
  due: number;
  lapses: number;
};

export type DayLog = { date: string; correct: number; seen: number };

type State = {
  xp: number;
  streak: number;
  lastStudy: string | null;
  cards: Record<string, CardState>;
  seen: number;
  correct: number;
  byDrug: Record<string, { seen: number; correct: number }>;
  bookmarks: string[];
  notes: Record<string, string>;
  history: DayLog[];
  lastMisses: string[];
  lastExport: { at: string; local: string; kind: string } | null;
  record: (drugId: string, ok: boolean) => void;
  review: (drugId: string, grade: 1 | 2 | 3 | 4) => void;
  toggleBookmark: (id: string) => void;
  setNote: (id: string, note: string) => void;
  markExport: (kind: string) => void;
  dueCards: () => string[];
};

function today() {
  return new Date().toISOString().slice(0, 10);
}

function bumpStreak(last: string | null, streak: number) {
  const t = today();
  if (last === t) return streak;
  if (!last) return 1;
  const prev = new Date(t);
  prev.setDate(prev.getDate() - 1);
  const y = prev.toISOString().slice(0, 10);
  return last === y ? streak + 1 : 1;
}

function sm2(card: CardState, grade: 1 | 2 | 3 | 4): CardState {
  const now = Date.now();
  if (grade <= 1) {
    return { ease: Math.max(1.3, card.ease - 0.2), interval: 0, reps: 0, due: now + 10 * 60_000, lapses: card.lapses + 1 };
  }
  let ease = card.ease + (0.1 - (4 - grade) * (0.08 + (4 - grade) * 0.02));
  if (ease < 1.3) ease = 1.3;
  let reps = card.reps + 1;
  let interval: number;
  if (reps === 1) interval = 1;
  else if (reps === 2) interval = 3;
  else interval = Math.round(card.interval * ease);
  return { ease, interval, reps, due: now + interval * 86_400_000, lapses: card.lapses };
}

const emptyCard = (): CardState => ({
  ease: 2.5,
  interval: 0,
  reps: 0,
  due: 0,
  lapses: 0,
});

export const useProgress = create<State>()(
  persist(
    (set, get) => ({
      xp: 0,
      streak: 0,
      lastStudy: null,
      cards: Object.fromEntries(DRUGS.map((d) => [d.id, emptyCard()])),
      seen: 0,
      correct: 0,
      byDrug: {},
      bookmarks: [],
      notes: {},
      history: [],
      lastMisses: [],
      lastExport: null,
      record: (drugId, ok) => {
        set((s) => {
          const t = today();
          const hist = [...s.history];
          const i = hist.findIndex((h) => h.date === t);
          if (i >= 0) {
            hist[i] = { date: t, correct: hist[i].correct + (ok ? 1 : 0), seen: hist[i].seen + 1 };
          } else {
            hist.push({ date: t, correct: ok ? 1 : 0, seen: 1 });
          }
          const bd = { ...(s.byDrug[drugId] ?? { seen: 0, correct: 0 }) };
          bd.seen += 1;
          if (ok) bd.correct += 1;
          const misses = ok ? s.lastMisses.filter((id) => id !== drugId) : [drugId, ...s.lastMisses.filter((id) => id !== drugId)].slice(0, 24);
          return {
            seen: s.seen + 1,
            correct: s.correct + (ok ? 1 : 0),
            xp: s.xp + (ok ? 12 : 3),
            streak: bumpStreak(s.lastStudy, s.streak),
            lastStudy: t,
            byDrug: { ...s.byDrug, [drugId]: bd },
            history: hist.slice(-60),
            lastMisses: misses,
          };
        });
      },
      review: (drugId, grade) => {
        set((s) => {
          const prev = s.cards[drugId] ?? emptyCard();
          return {
            cards: { ...s.cards, [drugId]: sm2(prev, grade) },
            xp: s.xp + grade * 4,
            streak: bumpStreak(s.lastStudy, s.streak),
            lastStudy: today(),
          };
        });
      },
      toggleBookmark: (id) =>
        set((s) => ({
          bookmarks: s.bookmarks.includes(id) ? s.bookmarks.filter((x) => x !== id) : [...s.bookmarks, id],
        })),
      setNote: (id, note) => set((s) => ({ notes: { ...s.notes, [id]: note } })),
      markExport: (kind) => {
        const d = new Date();
        set({
          lastExport: {
            at: d.toISOString(),
            local: new Intl.DateTimeFormat(undefined, { dateStyle: "full", timeStyle: "medium" }).format(d),
            kind,
          },
        });
      },
      dueCards: () => {
        const now = Date.now();
        const { cards } = get();
        return DRUGS.filter((d) => (cards[d.id]?.due ?? 0) <= now).map((d) => d.id);
      },
    }),
    { name: "monograph-progress-v1" },
  ),
);

export function masteryOf(seen: number, correct: number) {
  if (seen === 0) return 0;
  return Math.round((correct / seen) * 100);
}
