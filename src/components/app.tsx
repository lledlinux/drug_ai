import { useEffect, useMemo, useState } from "react";
import {
  BookOpen,
  Bookmark,
  BookmarkCheck,
  Brain,
  ChevronLeft,
  ChevronRight,
  FlaskConical,
  FileDown,
  GitCompare,
  Home,
  Layers,
  Search,
  Sparkles,
  Stethoscope,
  X,
} from "lucide-react";
import { DRUGS, SYSTEMS, searchDrugs, type Drug, drugById } from "@/lib/catalog";
import { checkPair, famousPairsFor } from "@/lib/interactions";
import { VIGNETTES } from "@/lib/vignettes";
import { makeExam, type Question } from "@/lib/quiz";
import { masteryOf, useProgress } from "@/lib/store";
import { askTutor } from "@/lib/tutor";
import { exportCardsPdf, exportCramPdf, exportFormularyPdf, exportProgressPdf } from "@/lib/print-pdf";
import { Badge, Button, Input, Textarea } from "@/components/ui";
import { cn } from "@/lib/cn";

type Tab = "home" | "library" | "drill" | "cards" | "cases" | "compare" | "interact" | "tutor";

const TABS: { id: Tab; label: string; icon: typeof Home }[] = [
  { id: "home", label: "Home", icon: Home },
  { id: "library", label: "Library", icon: BookOpen },
  { id: "drill", label: "Drill", icon: Brain },
  { id: "cards", label: "Cards", icon: Layers },
  { id: "cases", label: "Cases", icon: Stethoscope },
  { id: "compare", label: "Compare", icon: GitCompare },
  { id: "interact", label: "Interact", icon: FlaskConical },
  { id: "tutor", label: "Tutor", icon: Sparkles },
];

function LiveClock() {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);
  const date = new Intl.DateTimeFormat(undefined, {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(now);
  const time = new Intl.DateTimeFormat(undefined, {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).format(now);
  return (
    <div>
      <p className="font-mono text-sm tabular-nums text-fg">{time}</p>
      <p className="text-[11px] leading-tight text-muted">{date}</p>
    </div>
  );
}

export function App() {
  const [tab, setTab] = useState<Tab>("home");
  const [openId, setOpenId] = useState<string | null>(null);
  const [more, setMore] = useState(false);

  const goDrug = (id: string) => {
    setOpenId(id);
    setTab("library");
  };

  return (
    <div className="mx-auto flex min-h-dvh max-w-6xl flex-col md:flex-row">
      <aside className="hidden w-56 shrink-0 border-r border-border md:flex md:flex-col md:py-8">
        <div className="px-6">
          <p className="font-display text-2xl tracking-tight">Monograph</p>
          <p className="mt-1 text-xs text-muted">Boards pharmacology</p>
          <div className="mt-4 rounded-md border border-border bg-raised px-3 py-2">
            <LiveClock />
          </div>
        </div>
        <nav className="mt-8 flex flex-col gap-1 px-3">
          {TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={cn(
                "flex h-11 items-center gap-3 rounded-md px-3 text-sm",
                tab === t.id ? "bg-raised text-fg" : "text-muted hover:bg-raised/60 hover:text-fg",
              )}
            >
              <t.icon className="size-4" />
              {t.label}
            </button>
          ))}
        </nav>
        <p className="mt-auto px-6 text-xs text-subtle">Study tool, not medical advice.</p>
      </aside>

      <main className="min-w-0 flex-1 px-4 pb-24 pt-6 md:px-8 md:pb-10 md:pt-8">
        <div className="mb-5 flex items-center justify-between border-b border-border pb-3 md:hidden">
          <p className="font-display text-lg">Monograph</p>
          <LiveClock />
        </div>
        {tab === "home" && <HomeView onTab={setTab} onDrug={goDrug} />}
        {tab === "library" && <LibraryView openId={openId} setOpenId={setOpenId} />}
        {tab === "drill" && <DrillView onDrug={goDrug} />}
        {tab === "cards" && <CardsView onDrug={goDrug} />}
        {tab === "cases" && <CasesView onDrug={goDrug} />}
        {tab === "compare" && <CompareView />}
        {tab === "interact" && <InteractView />}
        {tab === "tutor" && <TutorView />}
      </main>

      <nav className="fixed inset-x-0 bottom-0 z-20 border-t border-border bg-bg/95 backdrop-blur md:hidden">
        <div className="grid grid-cols-5">
          {TABS.slice(0, 4).map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={cn("flex h-14 flex-col items-center justify-center gap-1 text-[11px]", tab === t.id ? "text-accent" : "text-muted")}
            >
              <t.icon className="size-4" />
              {t.label}
            </button>
          ))}
          <button
            onClick={() => setMore(true)}
            className={cn("flex h-14 flex-col items-center justify-center gap-1 text-[11px]", more || ["cases", "compare", "interact", "tutor"].includes(tab) ? "text-accent" : "text-muted")}
          >
            <Sparkles className="size-4" />
            More
          </button>
        </div>
      </nav>

      {more && (
        <div className="fixed inset-0 z-30 md:hidden">
          <button className="absolute inset-0 bg-bg/70" onClick={() => setMore(false)} aria-label="Close" />
          <div className="absolute inset-x-0 bottom-0 rounded-t-xl border-t border-border bg-surface p-4 pb-8">
            <div className="mb-3 flex items-center justify-between">
              <p className="text-sm font-medium">More</p>
              <button onClick={() => setMore(false)} className="grid size-11 place-items-center">
                <X className="size-4" />
              </button>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {TABS.slice(4).map((t) => (
                <button
                  key={t.id}
                  onClick={() => {
                    setTab(t.id);
                    setMore(false);
                  }}
                  className="flex h-14 items-center gap-2 rounded-lg border border-border bg-raised px-3 text-sm"
                >
                  <t.icon className="size-4 text-accent" />
                  {t.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="rounded-lg border border-border bg-surface p-4">
      <p className="text-xs text-muted">{label}</p>
      <p className="mt-1 font-mono text-2xl tabular-nums">{value}</p>
    </div>
  );
}

function HomeView({ onTab, onDrug }: { onTab: (t: Tab) => void; onDrug: (id: string) => void }) {
  const { xp, streak, seen, correct, lastMisses, dueCards, byDrug } = useProgress();
  const due = dueCards().length;
  const acc = seen ? Math.round((correct / seen) * 100) : 0;
  const weak = Object.entries(byDrug)
    .filter(([, v]) => v.seen >= 2)
    .map(([id, v]) => ({ id, m: masteryOf(v.seen, v.correct) }))
    .sort((a, b) => a.m - b.m)
    .slice(0, 5);

  return (
    <div>
      <p className="text-xs uppercase tracking-[0.18em] text-muted">Today</p>
      <h1 className="mt-1 font-display text-4xl leading-tight tracking-tight md:text-5xl">Stay fluent in the formulary.</h1>
      <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">
        {DRUGS.length} high-yield monographs, adaptive drills, SM-2 cards, clinical cases, an interaction desk, and a
        tutor. Built for PA, NP, pharmacy, and medical boards.
      </p>
      <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
        <Stat label="XP" value={xp} />
        <Stat label="Streak" value={`${streak}d`} />
        <Stat label="Accuracy" value={seen ? `${acc}%` : "—"} />
        <Stat label="Cards due" value={due} />
      </div>
      <div className="mt-6 grid gap-3 md:grid-cols-2">
        <button onClick={() => onTab("drill")} className="rounded-xl border border-border bg-surface p-5 text-left">
          <p className="text-sm font-medium">Start a drill</p>
          <p className="mt-1 text-sm text-muted">10 mixed items from the full bank.</p>
        </button>
        <button onClick={() => onTab("cards")} className="rounded-xl border border-border bg-surface p-5 text-left">
          <p className="text-sm font-medium">Review cards</p>
          <p className="mt-1 text-sm text-muted">{due} due now. Grade 1–4 to schedule.</p>
        </button>
      </div>
      {weak.length > 0 && (
        <section className="mt-8">
          <h2 className="text-sm font-medium">Weak spots</h2>
          <ul className="mt-3 divide-y divide-border rounded-xl border border-border">
            {weak.map((w) => {
              const d = drugById(w.id);
              if (!d) return null;
              return (
                <li key={w.id}>
                  <button onClick={() => onDrug(w.id)} className="flex w-full items-center justify-between px-4 py-3 text-left">
                    <span className="text-sm">{d.generic}</span>
                    <span className="font-mono text-sm tabular-nums text-muted">{w.m}%</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </section>
      )}
      {lastMisses[0] && (
        <button onClick={() => onDrug(lastMisses[0])} className="mt-6 text-sm text-accent">
          Revisit last miss: {drugById(lastMisses[0])?.generic}
        </button>
      )}
    </div>
  );
}

function LibraryView({ openId, setOpenId }: { openId: string | null; setOpenId: (id: string | null) => void }) {
  const [q, setQ] = useState("");
  const [sys, setSys] = useState<string>("All");
  const bookmarks = useProgress((s) => s.bookmarks);
  const [onlyBook, setOnlyBook] = useState(false);
  const list = useMemo(() => {
    let rows = searchDrugs(q);
    if (sys !== "All") rows = rows.filter((d) => d.system === sys);
    if (onlyBook) rows = rows.filter((d) => bookmarks.includes(d.id));
    return rows;
  }, [q, sys, onlyBook, bookmarks]);
  const open = openId ? drugById(openId) : null;

  if (open) return <Monograph drug={open} onBack={() => setOpenId(null)} />;

  return (
    <div>
      <h1 className="font-display text-3xl tracking-tight">Library</h1>
      <p className="mt-1 text-sm text-muted">{list.length} monographs</p>
      <ExportBar drugs={list} />
      <div className="mt-4 flex flex-col gap-3 sm:flex-row">
        <div className="relative flex-1">
          <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-subtle" />
          <Input className="pl-9" placeholder="Search generic, brand, class, pearl…" value={q} onChange={(e) => setQ(e.target.value)} />
        </div>
        <Button variant={onlyBook ? "primary" : "outline"} onClick={() => setOnlyBook((v) => !v)}>
          Bookmarks
        </Button>
      </div>
      <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
        {["All", ...SYSTEMS].map((s) => (
          <button
            key={s}
            onClick={() => setSys(s)}
            className={cn(
              "h-9 shrink-0 rounded-full px-3 text-xs",
              sys === s ? "bg-accent text-accent-fg" : "border border-border text-muted",
            )}
          >
            {s}
          </button>
        ))}
      </div>
      <ul className="mt-4 divide-y divide-border rounded-xl border border-border">
        {list.map((d) => (
          <li key={d.id}>
            <button onClick={() => setOpenId(d.id)} className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left">
              <div>
                <p className="text-sm font-medium capitalize">{d.generic}</p>
                <p className="text-xs text-muted">
                  {d.classes[0]} · {d.system}
                </p>
              </div>
              <ChevronRight className="size-4 text-subtle" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Monograph({ drug, onBack }: { drug: Drug; onBack: () => void }) {
  const { bookmarks, toggleBookmark, notes, setNote } = useProgress();
  const marked = bookmarks.includes(drug.id);
  const ix = famousPairsFor(drug.id);
  return (
    <article>
      <button onClick={onBack} className="mb-4 inline-flex h-11 items-center gap-1 text-sm text-muted">
        <ChevronLeft className="size-4" /> Library
      </button>
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.16em] text-muted">{drug.system}</p>
          <h1 className="mt-1 font-display text-4xl capitalize tracking-tight">{drug.generic}</h1>
          <p className="mt-2 text-sm text-muted">{drug.brands.join(" · ")}</p>
        </div>
        <button onClick={() => toggleBookmark(drug.id)} className="grid size-11 place-items-center rounded-md border border-border" aria-label="Bookmark">
          {marked ? <BookmarkCheck className="size-4 text-accent" /> : <Bookmark className="size-4" />}
        </button>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {drug.classes.map((c) => (
          <Badge key={c} tone="accent">
            {c}
          </Badge>
        ))}
        {drug.bbw && <Badge tone="danger">Boxed warning</Badge>}
      </div>
      <Section title="Mechanism">{drug.moa}</Section>
      {drug.bbw && (
        <Section title="Boxed warning">
          <span className="text-danger">{drug.bbw}</span>
        </Section>
      )}
      <Section title="Dosing">{drug.dose}</Section>
      <List title="Indications" items={drug.indications} />
      <List title="Adverse effects" items={drug.adrs} />
      <List title="Contraindications" items={drug.contra} />
      <List title="Monitor" items={drug.monitor} />
      <List title="Pearls" items={drug.pearls} />
      {ix.length > 0 && (
        <section className="mt-6">
          <h2 className="text-sm font-medium">Classic interactions</h2>
          <ul className="mt-2 space-y-2">
            {ix.map((p) => (
              <li key={p.title} className="rounded-lg border border-border bg-surface p-3 text-sm">
                <p className={p.severity === "danger" ? "text-danger" : p.severity === "warn" ? "text-warn" : "text-muted"}>
                  {p.title}
                </p>
                <p className="mt-1 text-muted">{p.detail}</p>
              </li>
            ))}
          </ul>
        </section>
      )}
      <section className="mt-6">
        <h2 className="text-sm font-medium">Your notes</h2>
        <Textarea className="mt-2" value={notes[drug.id] ?? ""} onChange={(e) => setNote(drug.id, e.target.value)} placeholder="Mnemonics, attending quotes, misses…" />
      </section>
    </article>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-6">
      <h2 className="text-sm font-medium">{title}</h2>
      <p className="mt-2 text-sm leading-relaxed text-muted">{children}</p>
    </section>
  );
}

function List({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="mt-6">
      <h2 className="text-sm font-medium">{title}</h2>
      <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted">
        {items.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
    </section>
  );
}

function DrillView({ onDrug }: { onDrug: (id: string) => void }) {
  const [system, setSystem] = useState("All");
  const [exam, setExam] = useState<Question[] | null>(null);
  const [i, setI] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const record = useProgress((s) => s.record);

  const start = () => {
    const qs = makeExam(10, Date.now(), system === "All" ? undefined : { system });
    setExam(qs);
    setI(0);
    setPicked(null);
    setScore(0);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!exam || picked !== null) return;
      const n = Number(e.key);
      if (n >= 1 && n <= 4) choose(n - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [exam, picked, i]);

  const choose = (idx: number) => {
    if (!exam || picked !== null) return;
    setPicked(idx);
    const q = exam[i];
    const ok = idx === q.answer;
    if (ok) setScore((s) => s + 1);
    record(q.drugId, ok);
  };

  if (!exam) {
    return (
      <div>
        <h1 className="font-display text-3xl tracking-tight">Drill</h1>
        <p className="mt-1 text-sm text-muted">Ten mixed items. Keys 1–4 to answer.</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {["All", ...SYSTEMS].map((s) => (
            <button
              key={s}
              onClick={() => setSystem(s)}
              className={cn("h-9 rounded-full px-3 text-xs", system === s ? "bg-accent text-accent-fg" : "border border-border text-muted")}
            >
              {s}
            </button>
          ))}
        </div>
        <Button className="mt-6" onClick={start}>
          Begin
        </Button>
      </div>
    );
  }

  if (i >= exam.length) {
    return (
      <div>
        <h1 className="font-display text-3xl tracking-tight">Session complete</h1>
        <p className="mt-3 font-mono text-4xl tabular-nums">
          {score}/{exam.length}
        </p>
        <Button className="mt-6" onClick={start}>
          Drill again
        </Button>
      </div>
    );
  }

  const q = exam[i];
  return (
    <div>
      <p className="text-xs text-muted">
        {i + 1} / {exam.length} · {q.type}
      </p>
      <h1 className="mt-2 font-display text-2xl leading-snug tracking-tight">{q.prompt}</h1>
      <div className="mt-5 grid gap-2">
        {q.choices.map((c, idx) => {
          const show = picked !== null;
          const right = idx === q.answer;
          const mine = idx === picked;
          return (
            <button
              key={c}
              onClick={() => choose(idx)}
              className={cn(
                "flex min-h-14 items-start gap-3 rounded-lg border px-4 py-3 text-left text-sm",
                !show && "border-border bg-surface hover:border-border-strong",
                show && right && "border-ok bg-ok/10",
                show && mine && !right && "border-danger bg-danger/10",
                show && !right && !mine && "border-border opacity-60",
              )}
            >
              <span className="mr-2 font-mono text-xs text-subtle">{idx + 1}</span>
              {c}
            </button>
          );
        })}
      </div>
      {picked !== null && (
        <div className="mt-4 rounded-lg border border-border bg-surface p-4 text-sm text-muted">
          {q.explain}
          <div className="mt-3 flex gap-2">
            <Button onClick={() => { setI((x) => x + 1); setPicked(null); }}>Next</Button>
            <Button variant="ghost" onClick={() => onDrug(q.drugId)}>
              Open monograph
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

function ExportBar({ drugs }: { drugs: Drug[] }) {
  const [busy, setBusy] = useState<string | null>(null);
  const [err, setErr] = useState<string | null>(null);
  const markExport = useProgress((s) => s.markExport);
  const lastExport = useProgress((s) => s.lastExport);
  const progress = useProgress();
  const run = async (kind: "cards" | "book" | "cram" | "progress") => {
    setErr(null);
    setBusy(kind);
    try {
      if (kind === "cards") await exportCardsPdf(drugs);
      else if (kind === "book") await exportFormularyPdf(drugs);
      else if (kind === "cram") await exportCramPdf();
      else
        await exportProgressPdf({
          xp: progress.xp,
          streak: progress.streak,
          seen: progress.seen,
          correct: progress.correct,
          lastStudy: progress.lastStudy,
          byDrug: progress.byDrug,
        });
      markExport(kind);
    } catch (e) {
      setErr(e instanceof Error ? e.message : "Export failed");
    } finally {
      setBusy(null);
    }
  };
  return (
    <div className="mt-4 flex flex-col gap-2">
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        <Button variant="outline" disabled={!!busy || drugs.length === 0} onClick={() => void run("cards")}>
          <FileDown className="size-4" />
          {busy === "cards" ? "Building…" : "Print cards (8 / A4)"}
        </Button>
        <Button variant="outline" disabled={!!busy || drugs.length === 0} onClick={() => void run("book")}>
          <FileDown className="size-4" />
          {busy === "book" ? "Building…" : "Formulary PDF"}
        </Button>
        <Button variant="outline" disabled={!!busy} onClick={() => void run("cram")}>
          <FileDown className="size-4" />
          {busy === "cram" ? "Building…" : "Cram sheet (BBW + pairs)"}
        </Button>
        <Button variant="outline" disabled={!!busy} onClick={() => void run("progress")}>
          <FileDown className="size-4" />
          {busy === "progress" ? "Building…" : "Progress report"}
        </Button>
      </div>
      <p className="text-xs text-subtle">
        Cards: 8 per A4. Front has drug 1 on the right and drug 2 on the left. Back has drug 1 details on the left and
        drug 2 details on the right. Print duplex, flip on the long edge, then cut.
      </p>
      {lastExport && (
        <p className="text-xs text-muted">
          Last export: {lastExport.kind} · {lastExport.local}
        </p>
      )}
      {err && <p className="text-xs text-danger">{err}</p>}
    </div>
  );
}

function CardsView({ onDrug }: { onDrug: (id: string) => void }) {
  const { cards, review, dueCards, bookmarks } = useProgress();
  const [i, setI] = useState(0);
  const [flip, setFlip] = useState(false);
  const [scope, setScope] = useState<"all" | "due" | "book">("all");
  const due = dueCards();
  const id = due[i];
  const drug = id ? drugById(id) : undefined;
  const exportSet =
    scope === "due"
      ? due.map((x) => drugById(x)).filter((d): d is Drug => Boolean(d))
      : scope === "book"
        ? bookmarks.map((x) => drugById(x)).filter((d): d is Drug => Boolean(d))
        : DRUGS;

  return (
    <div>
      <h1 className="font-display text-3xl tracking-tight">Cards</h1>
      <p className="mt-1 text-sm text-muted">
        {due.length} due · {Object.keys(cards).length} in deck
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        {(
          [
            ["all", `All (${DRUGS.length})`],
            ["due", `Due (${due.length})`],
            ["book", `Bookmarks (${bookmarks.length})`],
          ] as const
        ).map(([k, label]) => (
          <button
            key={k}
            onClick={() => setScope(k)}
            className={cn("h-9 rounded-full px-3 text-xs", scope === k ? "bg-accent text-accent-fg" : "border border-border text-muted")}
          >
            {label}
          </button>
        ))}
      </div>
      <ExportBar drugs={exportSet} />
      {!drug ? (
        <p className="mt-6 text-sm text-muted">Inbox clear. Export still works from All or Bookmarks.</p>
      ) : (
        <>
          <p className="mt-6 text-xs text-muted">Review</p>
          <button
            onClick={() => setFlip((f) => !f)}
            className="mt-2 flex min-h-56 w-full flex-col items-start justify-center rounded-xl border border-border bg-surface p-6 text-left"
          >
            {!flip ? (
              <>
                <p className="text-xs uppercase tracking-[0.16em] text-muted">{drug.system}</p>
                <p className="mt-3 font-display text-3xl capitalize">{drug.generic}</p>
                <p className="mt-4 text-sm text-subtle">Tap to reveal</p>
              </>
            ) : (
              <>
                <p className="text-sm text-accent">{drug.classes.join(" · ")}</p>
                <p className="mt-3 text-sm leading-relaxed">{drug.moa}</p>
                <p className="mt-3 text-sm text-muted">{drug.pearls[0]}</p>
                {drug.bbw && <p className="mt-3 text-sm text-danger">{drug.bbw}</p>}
              </>
            )}
          </button>
          {flip && (
            <div className="mt-4 grid grid-cols-4 gap-2">
              {([1, 2, 3, 4] as const).map((g) => (
                <Button
                  key={g}
                  variant={g === 1 ? "danger" : g === 4 ? "primary" : "outline"}
                  onClick={() => {
                    review(drug.id, g);
                    setFlip(false);
                    setI(0);
                  }}
                >
                  {g === 1 ? "Again" : g === 2 ? "Hard" : g === 3 ? "Good" : "Easy"}
                </Button>
              ))}
            </div>
          )}
          <button onClick={() => onDrug(drug.id)} className="mt-4 text-sm text-muted">
            Full monograph
          </button>
        </>
      )}
    </div>
  );
}

function CasesView({ onDrug }: { onDrug: (id: string) => void }) {
  const [i, setI] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const v = VIGNETTES[i];
  const record = useProgress((s) => s.record);
  const choose = (idx: number) => {
    if (picked !== null) return;
    setPicked(idx);
    record(v.drugs[0], idx === v.answer);
  };
  return (
    <div>
      <p className="text-xs text-muted">
        Case {i + 1} / {VIGNETTES.length} · {v.system}
      </p>
      <h1 className="mt-2 font-display text-3xl tracking-tight">{v.title}</h1>
      <p className="mt-4 text-sm leading-relaxed text-muted">{v.stem}</p>
      <p className="mt-4 text-sm font-medium">{v.question}</p>
      <div className="mt-4 grid gap-2">
        {v.choices.map((c, idx) => {
          const show = picked !== null;
          const right = idx === v.answer;
          const mine = idx === picked;
          return (
            <button
              key={c}
              onClick={() => choose(idx)}
              className={cn(
                "flex min-h-14 items-start gap-3 rounded-lg border px-4 py-3 text-left text-sm",
                !show && "border-border bg-surface",
                show && right && "border-ok bg-ok/10",
                show && mine && !right && "border-danger bg-danger/10",
              )}
            >
              {c}
            </button>
          );
        })}
      </div>
      {picked !== null && (
        <div className="mt-4 rounded-lg border border-border bg-surface p-4 text-sm text-muted">
          {v.explanation}
          <div className="mt-3 flex flex-wrap gap-2">
            {v.drugs.map((id) => (
              <Button key={id} variant="outline" onClick={() => onDrug(id)}>
                {drugById(id)?.generic}
              </Button>
            ))}
            <Button
              onClick={() => {
                setI((x) => (x + 1) % VIGNETTES.length);
                setPicked(null);
              }}
            >
              Next case
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

function CompareView() {
  const [a, setA] = useState(DRUGS[0].id);
  const [b, setB] = useState(DRUGS[1].id);
  const da = drugById(a)!;
  const db = drugById(b)!;
  const rows: [string, string, string][] = [
    ["Class", da.classes.join(", "), db.classes.join(", ")],
    ["MOA", da.moa, db.moa],
    ["Dose", da.dose, db.dose],
    ["BBW", da.bbw ?? "—", db.bbw ?? "—"],
    ["Monitor", da.monitor.join("; "), db.monitor.join("; ")],
    ["Pearl", da.pearls[0], db.pearls[0]],
  ];
  return (
    <div>
      <h1 className="font-display text-3xl tracking-tight">Compare</h1>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <select className="h-11 rounded-md border border-border bg-raised px-3 text-sm" value={a} onChange={(e) => setA(e.target.value)}>
          {DRUGS.map((d) => (
            <option key={d.id} value={d.id}>
              {d.generic}
            </option>
          ))}
        </select>
        <select className="h-11 rounded-md border border-border bg-raised px-3 text-sm" value={b} onChange={(e) => setB(e.target.value)}>
          {DRUGS.map((d) => (
            <option key={d.id} value={d.id}>
              {d.generic}
            </option>
          ))}
        </select>
      </div>
      <div className="mt-4 overflow-hidden rounded-xl border border-border">
        {rows.map((r) => (
          <div key={r[0]} className="grid grid-cols-1 border-b border-border last:border-0 md:grid-cols-3">
            <p className="bg-raised px-4 py-3 text-xs uppercase tracking-[0.12em] text-muted">{r[0]}</p>
            <p className="px-4 py-3 text-sm">{r[1]}</p>
            <p className="px-4 py-3 text-sm text-muted">{r[2]}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function InteractView() {
  const [a, setA] = useState("warfarin");
  const [b, setB] = useState("tmp-smx");
  const da = drugById(a);
  const db = drugById(b);
  const hits = da && db ? checkPair(da, db) : [];
  return (
    <div>
      <h1 className="font-display text-3xl tracking-tight">Interaction desk</h1>
      <p className="mt-1 text-sm text-muted">Educational pair rules for this bank — not a complete clinical database.</p>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <select className="h-11 rounded-md border border-border bg-raised px-3 text-sm" value={a} onChange={(e) => setA(e.target.value)}>
          {DRUGS.map((d) => (
            <option key={d.id} value={d.id}>
              {d.generic}
            </option>
          ))}
        </select>
        <select className="h-11 rounded-md border border-border bg-raised px-3 text-sm" value={b} onChange={(e) => setB(e.target.value)}>
          {DRUGS.map((d) => (
            <option key={d.id} value={d.id}>
              {d.generic}
            </option>
          ))}
        </select>
      </div>
      <ul className="mt-5 space-y-3">
        {hits.map((h) => (
          <li key={h.title} className="rounded-xl border border-border bg-surface p-4">
            <Badge tone={h.severity === "danger" ? "danger" : h.severity === "warn" ? "warn" : "muted"}>{h.severity}</Badge>
            <p className="mt-2 text-sm font-medium">{h.title}</p>
            <p className="mt-1 text-sm text-muted">{h.detail}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

function TutorView() {
  const [drugId, setDrugId] = useState("");
  const [q, setQ] = useState("");
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const [msgs, setMsgs] = useState<{ role: "user" | "assistant"; content: string }[]>([]);

  const send = async () => {
    const question = q.trim();
    if (!question || busy) return;
    setBusy(true);
    setErr(null);
    setQ("");
    const next = [...msgs, { role: "user" as const, content: question }];
    setMsgs(next);
    const res = await askTutor({ data: { question, drugId: drugId || undefined, history: next } });
    if (!res.ok) setErr(res.error);
    else setMsgs([...next, { role: "assistant", content: res.text }]);
    setBusy(false);
  };

  return (
    <div className="flex min-h-[70dvh] flex-col">
      <h1 className="font-display text-3xl tracking-tight">Tutor</h1>
      <p className="mt-1 text-sm text-muted">User-initiated. Grounded in this catalog. Not medical advice.</p>
      <select className="mt-4 h-11 rounded-md border border-border bg-raised px-3 text-sm" value={drugId} onChange={(e) => setDrugId(e.target.value)}>
        <option value="">Whole catalog</option>
        {DRUGS.map((d) => (
          <option key={d.id} value={d.id}>
            Focus: {d.generic}
          </option>
        ))}
      </select>
      <div className="mt-4 flex-1 space-y-3">
        {msgs.length === 0 && <p className="text-sm text-subtle">Ask why ACE inhibitors cough, or walk a warfarin INR jump.</p>}
        {msgs.map((m, i) => (
          <div key={i} className={cn("rounded-lg px-4 py-3 text-sm leading-relaxed", m.role === "user" ? "bg-raised" : "border border-border bg-surface text-muted")}>
            {m.content}
          </div>
        ))}
        {busy && <p className="text-sm text-subtle">Thinking…</p>}
        {err && <p className="text-sm text-danger">{err}</p>}
      </div>
      <div className="mt-4 flex gap-2">
        <Input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") void send();
          }}
          placeholder="Ask a boards-style question"
        />
        <Button onClick={() => void send()} disabled={busy}>
          Ask
        </Button>
      </div>
    </div>
  );
}
