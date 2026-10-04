import { DRUGS, type Drug } from "./catalog";

export type QType = "class" | "moa" | "indication" | "bbw" | "pearl" | "brand" | "monitor";

export type Question = {
  id: string;
  type: QType;
  prompt: string;
  choices: string[];
  answer: number;
  explain: string;
  drugId: string;
};

function rng(seed: number) {
  let s = seed % 2147483647;
  if (s <= 0) s += 2147483646;
  return () => (s = (s * 16807) % 2147483647) / 2147483647;
}

function pick<T>(rand: () => number, arr: T[], n: number, exclude?: T): T[] {
  const pool = exclude === undefined ? [...arr] : arr.filter((x) => x !== exclude);
  const out: T[] = [];
  while (out.length < n && pool.length) {
    const i = Math.floor(rand() * pool.length);
    out.push(pool.splice(i, 1)[0]);
  }
  return out;
}

function shuffle<T>(rand: () => number, arr: T[]) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function unique<T>(arr: T[]) {
  return [...new Set(arr)];
}

export function makeQuestion(drug: Drug, rand: () => number, type?: QType): Question {
  const types: QType[] = ["class", "moa", "indication", "pearl", "brand", "monitor"];
  if (drug.bbw) types.push("bbw");
  const t = type && types.includes(type) ? type : types[Math.floor(rand() * types.length)];
  const others = DRUGS.filter((d) => d.id !== drug.id);

  const wrap = (prompt: string, correct: string, distractors: string[], explain: string): Question => {
    const choices = shuffle(rand, unique([correct, ...distractors]).slice(0, 4));
    while (choices.length < 4) {
      choices.push(others[Math.floor(rand() * others.length)].generic);
    }
    const answer = choices.indexOf(correct);
    return {
      id: `${drug.id}-${t}-${Math.floor(rand() * 1e9)}`,
      type: t,
      prompt,
      choices: choices.slice(0, 4),
      answer: answer < 0 ? 0 : answer,
      explain,
      drugId: drug.id,
    };
  };

  if (t === "class") {
    const correct = drug.classes[0];
    const distractors = pick(
      rand,
      unique(others.map((d) => d.classes[0]).filter((c) => c !== correct)),
      3,
    );
    return wrap(
      `What is the primary class of ${drug.generic}?`,
      correct,
      distractors,
      `${drug.generic} is a ${drug.classes.join(" / ")}. ${drug.moa}`,
    );
  }
  if (t === "moa") {
    const correct = drug.moa;
    const distractors = pick(
      rand,
      others.map((d) => d.moa).filter((m) => m !== correct),
      3,
    );
    return wrap(`Mechanism of ${drug.generic}?`, correct, distractors, drug.moa);
  }
  if (t === "indication") {
    const correct = drug.indications[0];
    const distractors = pick(
      rand,
      unique(others.flatMap((d) => d.indications)).filter((i) => !drug.indications.includes(i)),
      3,
    );
    return wrap(
      `A first-line / high-yield indication for ${drug.generic} is:`,
      correct,
      distractors,
      `${drug.generic}: ${drug.indications.join(", ")}.`,
    );
  }
  if (t === "bbw" && drug.bbw) {
    const correct = drug.bbw;
    const distractors = pick(
      rand,
      others.map((d) => d.bbw).filter((b): b is string => Boolean(b) && b !== correct),
      3,
    );
    return wrap(`Boxed warning most associated with ${drug.generic}?`, correct, distractors, drug.bbw);
  }
  if (t === "brand") {
    const correct = drug.brands[0];
    const distractors = pick(
      rand,
      others.map((d) => d.brands[0]).filter((b) => b !== correct),
      3,
    );
    return wrap(`A U.S. brand name for ${drug.generic} is:`, correct, distractors, `${drug.brands.join(", ")}.`);
  }
  if (t === "monitor") {
    const correct = drug.monitor[0];
    const distractors = pick(
      rand,
      unique(others.flatMap((d) => d.monitor)).filter((m) => !drug.monitor.includes(m)),
      3,
    );
    return wrap(`Highest-yield monitoring for ${drug.generic}?`, correct, distractors, drug.monitor.join("; "));
  }
  const correct = drug.pearls[0];
  const distractors = pick(
    rand,
    others.map((d) => d.pearls[0]).filter((p) => p !== correct),
    3,
  );
  return wrap(`Clinical pearl for ${drug.generic}:`, correct, distractors, drug.pearls.join(" "));
}

export function makeExam(n: number, seed: number, filter?: { system?: string; ids?: string[] }) {
  const rand = rng(seed);
  let pool = DRUGS;
  if (filter?.system) pool = pool.filter((d) => d.system === filter.system);
  if (filter?.ids?.length) pool = pool.filter((d) => filter.ids!.includes(d.id));
  if (!pool.length) pool = DRUGS;
  const qs: Question[] = [];
  for (let i = 0; i < n; i++) {
    const d = pool[Math.floor(rand() * pool.length)];
    qs.push(makeQuestion(d, rand));
  }
  return qs;
}
