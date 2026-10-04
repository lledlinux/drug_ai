import { PDFDocument, StandardFonts, rgb, type PDFFont, type PDFPage, type RGB } from "pdf-lib";
import { DRUGS, type Drug } from "./catalog";
import { listedInteractions } from "./interactions";

const ink = rgb(0.05, 0.055, 0.063);
const muted = rgb(0.42, 0.45, 0.44);
const sage = rgb(0.49, 0.608, 0.541);
const danger = rgb(0.77, 0.36, 0.29);
const rule = rgb(0.78, 0.8, 0.79);
const paper = rgb(1, 1, 1);

function ascii(s: string) {
  return s
    .replaceAll("→", "->")
    .replaceAll("←", "<-")
    .replaceAll("↓", " down")
    .replaceAll("↑", " up")
    .replaceAll("µ", "u")
    .replaceAll("×", "x")
    .replaceAll("–", "-")
    .replaceAll("—", "-")
    .replaceAll("≤", "<=")
    .replaceAll("≥", ">=")
    .replaceAll("’", "'")
    .replaceAll("‘", "'")
    .replaceAll("“", '"')
    .replaceAll("”", '"')
    .replaceAll("…", "...")
    .replaceAll("½", "1/2")
    .replaceAll("α", "a")
    .replaceAll("β", "b")
    .replaceAll("γ", "g")
    .replaceAll("°", " deg")
    .replace(/[^\x20-\x7E]/g, " ");
}

function wrap(font: PDFFont, text: string, size: number, maxW: number) {
  const words = ascii(text).split(/\s+/).filter(Boolean);
  const lines: string[] = [];
  let line = "";
  for (const w of words) {
    const trial = line ? `${line} ${w}` : w;
    if (font.widthOfTextAtSize(trial, size) <= maxW) line = trial;
    else {
      if (line) lines.push(line);
      line = w;
    }
  }
  if (line) lines.push(line);
  return lines;
}

function stamp() {
  const d = new Date();
  const iso = d.toISOString();
  const local = new Intl.DateTimeFormat(undefined, {
    dateStyle: "full",
    timeStyle: "long",
  }).format(d);
  return { iso, local, file: iso.slice(0, 10) };
}

async function save(bytes: Uint8Array, name: string) {
  if (typeof document === "undefined") return;
  const copy = new Uint8Array(bytes);
  const blob = new Blob([copy], { type: "application/pdf" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = name;
  a.click();
  URL.revokeObjectURL(url);
}

type Fonts = { regular: PDFFont; bold: PDFFont };

function drawFooter(page: PDFPage, fonts: Fonts, w: number, text: string, pageNo: string) {
  page.drawLine({ start: { x: 36, y: 28 }, end: { x: w - 36, y: 28 }, thickness: 0.4, color: rule });
  page.drawText(ascii(text), { x: 36, y: 16, size: 7, font: fonts.regular, color: muted });
  const pw = fonts.regular.widthOfTextAtSize(pageNo, 7);
  page.drawText(pageNo, { x: w - 36 - pw, y: 16, size: 7, font: fonts.regular, color: muted });
}

function slotRects(pageW: number, pageH: number) {
  const marginX = 18;
  const marginTop = 24;
  const marginBot = 34;
  const gapX = 6;
  const gapY = 6;
  const cols = 2;
  const rows = 4;
  const usableW = pageW - marginX * 2 - gapX;
  const usableH = pageH - marginTop - marginBot - gapY * (rows - 1);
  const cw = usableW / cols;
  const ch = usableH / rows;
  const rects: { x: number; y: number; w: number; h: number }[] = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      rects.push({
        x: marginX + c * (cw + gapX),
        y: pageH - marginTop - (r + 1) * ch - r * gapY,
        w: cw,
        h: ch,
      });
    }
  }
  return rects;
}

/** Front: odd drugs left, even (1st of pair) on the right. */
const FRONT_ORDER = [1, 0, 3, 2, 5, 4, 7, 6];
/** Back: first of pair on the left, second on the right. */
const BACK_ORDER = [0, 1, 2, 3, 4, 5, 6, 7];

function dashedRect(page: PDFPage, x: number, y: number, w: number, h: number, color: RGB) {
  page.drawRectangle({ x, y, width: w, height: h, borderWidth: 0.6, borderColor: color, borderDashArray: [3, 2], color: paper });
}

function drawFront(page: PDFPage, fonts: Fonts, box: { x: number; y: number; w: number; h: number }, drug: Drug | undefined) {
  dashedRect(page, box.x, box.y, box.w, box.h, rule);
  if (!drug) return;
  const pad = 10;
  const maxW = box.w - pad * 2;
  page.drawText(ascii(drug.system.toUpperCase()), {
    x: box.x + pad,
    y: box.y + box.h - 20,
    size: 8,
    font: fonts.regular,
    color: sage,
  });
  const nameLines = wrap(fonts.bold, drug.generic, 13, maxW).slice(0, 2);
  let y = box.y + box.h / 2 + (nameLines.length * 15) / 2;
  for (const ln of nameLines) {
    y -= 15;
    page.drawText(ln, { x: box.x + pad, y, size: 13, font: fonts.bold, color: ink });
  }
  const brands = wrap(fonts.regular, drug.brands.join("  |  "), 8, maxW).slice(0, 2);
  y -= 8;
  for (const ln of brands) {
    y -= 10;
    page.drawText(ln, { x: box.x + pad, y, size: 8, font: fonts.regular, color: muted });
  }
  page.drawText("cut on dashed line", {
    x: box.x + pad,
    y: box.y + 10,
    size: 7,
    font: fonts.regular,
    color: muted,
  });
}

function drawBack(page: PDFPage, fonts: Fonts, box: { x: number; y: number; w: number; h: number }, drug: Drug | undefined) {
  dashedRect(page, box.x, box.y, box.w, box.h, rule);
  if (!drug) return;
  const pad = 10;
  const maxW = box.w - pad * 2;
  let y = box.y + box.h - 18;
  const write = (text: string, size: number, font: PDFFont, color: RGB, maxLines: number) => {
    const lines = wrap(font, text, size, maxW).slice(0, maxLines);
    for (const ln of lines) {
      y -= size + 3;
      if (y < box.y + 12) return;
      page.drawText(ln, { x: box.x + pad, y, size, font, color });
    }
    y -= 4;
  };
  write(drug.classes.join(" / "), 8, fonts.bold, sage, 2);
  write("MOA  " + drug.moa, 7, fonts.regular, ink, 3);
  write("Dose  " + drug.dose, 7, fonts.regular, ink, 2);
  write("Pearl  " + drug.pearls[0], 7, fonts.regular, muted, 2);
  if (drug.bbw) write("BBW  " + drug.bbw, 7, fonts.regular, danger, 2);
}

export async function exportCardsPdf(drugs: Drug[]) {
  if (!drugs.length) throw new Error("No cards to export.");
  const { iso, local, file } = stamp();
  const doc = await PDFDocument.create();
  doc.setTitle("Monograph flashcards");
  doc.setAuthor("Monograph");
  doc.setSubject(`Printed ${local} (${iso})`);
  doc.setCreationDate(new Date(iso));
  doc.setModificationDate(new Date(iso));
  const fonts: Fonts = {
    regular: await doc.embedFont(StandardFonts.Helvetica),
    bold: await doc.embedFont(StandardFonts.HelveticaBold),
  };
  const A4: [number, number] = [595.28, 841.89];
  const chunks: (Drug | undefined)[][] = [];
  for (let i = 0; i < drugs.length; i += 8) {
    const slice: (Drug | undefined)[] = drugs.slice(i, i + 8);
    while (slice.length < 8) slice.push(undefined);
    chunks.push(slice);
  }
  let pageNo = 0;
  for (const group of chunks) {
    const front = doc.addPage(A4);
    pageNo++;
    const fRects = slotRects(A4[0], A4[1]);
    FRONT_ORDER.forEach((src, i) => drawFront(front, fonts, fRects[i], group[src]));
    drawFooter(front, fonts, A4[0], `Front 8/A4  ·  R=drug1 L=drug2  ·  ${local}  ·  ${iso}`, `F${pageNo}`);

    const back = doc.addPage(A4);
    pageNo++;
    const bRects = slotRects(A4[0], A4[1]);
    BACK_ORDER.forEach((src, i) => drawBack(back, fonts, bRects[i], group[src]));
    drawFooter(back, fonts, A4[0], `Back 8/A4  ·  L=drug1 details  R=drug2 details  ·  duplex long-edge  ·  ${iso}`, `B${pageNo}`);
  }
  const bytes = await doc.save();
  await save(bytes, `monograph-cards-${file}.pdf`);
  return bytes;
}

export async function exportFormularyPdf(drugs: Drug[] = DRUGS) {
  const { iso, local, file } = stamp();
  const doc = await PDFDocument.create();
  doc.setTitle("Monograph formulary");
  doc.setAuthor("Monograph");
  doc.setSubject(`Snapshot generated ${local}`);
  doc.setKeywords([iso, "permanent timestamp"]);
  doc.setCreationDate(new Date(iso));
  doc.setModificationDate(new Date(iso));
  const fonts: Fonts = {
    regular: await doc.embedFont(StandardFonts.Helvetica),
    bold: await doc.embedFont(StandardFonts.HelveticaBold),
  };
  const A4: [number, number] = [595.28, 841.89];
  const footer = `Printed ${local}  |  ISO ${iso}  |  study aid, not medical advice`;

  const cover = doc.addPage(A4);
  cover.drawText("MONOGRAPH", { x: 54, y: 720, size: 11, font: fonts.regular, color: sage });
  cover.drawText("Formulary snapshot", { x: 54, y: 680, size: 28, font: fonts.bold, color: ink });
  cover.drawText(`${drugs.length} drugs`, { x: 54, y: 648, size: 12, font: fonts.regular, color: muted });
  cover.drawRectangle({ x: 54, y: 560, width: 487, height: 64, color: rgb(0.95, 0.96, 0.95) });
  cover.drawText("Generated (permanent)", { x: 66, y: 604, size: 8, font: fonts.regular, color: sage });
  cover.drawText(local, { x: 66, y: 586, size: 12, font: fonts.bold, color: ink });
  cover.drawText(iso, { x: 66, y: 570, size: 9, font: fonts.regular, color: muted });
  cover.drawText("This date and time are written into the file and will not change.", {
    x: 54,
    y: 530,
    size: 9,
    font: fonts.regular,
    color: muted,
  });
  drawFooter(cover, fonts, A4[0], footer, "1");

  let page = doc.addPage(A4);
  let pageCount = 2;
  let y = 800;
  const ensure = (need: number) => {
    if (y - need < 48) {
      drawFooter(page, fonts, A4[0], footer, String(pageCount));
      page = doc.addPage(A4);
      pageCount++;
      y = 800;
    }
  };
  const heading = (t: string) => {
    ensure(28);
    y -= 8;
    page.drawText(ascii(t), { x: 54, y, size: 10, font: fonts.bold, color: sage });
    y -= 14;
  };
  const body = (label: string, text: string) => {
    const lines = wrap(fonts.regular, `${label}: ${text}`, 8.5, 487);
    ensure(lines.length * 11 + 4);
    for (const ln of lines) {
      page.drawText(ln, { x: 54, y, size: 8.5, font: fonts.regular, color: ink });
      y -= 11;
    }
    y -= 2;
  };

  let lastSystem = "";
  for (const d of drugs) {
    if (d.system !== lastSystem) {
      lastSystem = d.system;
      ensure(36);
      y -= 10;
      page.drawText(ascii(d.system.toUpperCase()), { x: 54, y, size: 13, font: fonts.bold, color: ink });
      y -= 8;
      page.drawLine({ start: { x: 54, y }, end: { x: 541, y }, thickness: 0.6, color: sage });
      y -= 16;
    }
    ensure(90);
    page.drawText(ascii(d.generic), { x: 54, y, size: 12, font: fonts.bold, color: ink });
    y -= 14;
    page.drawText(ascii(d.brands.join(" · ")), { x: 54, y, size: 8, font: fonts.regular, color: muted });
    y -= 12;
    heading("Class");
    body("Primary", d.classes.join(", "));
    body("MOA", d.moa);
    body("Dose", d.dose);
    body("Indications", d.indications.join("; "));
    if (d.bbw) body("Boxed warning", d.bbw);
    body("ADRs", d.adrs.join("; "));
    body("Contraindications", d.contra.join("; "));
    body("Monitor", d.monitor.join("; "));
    body("Pearls", d.pearls.join(" "));
    y -= 10;
  }
  drawFooter(page, fonts, A4[0], footer, String(pageCount));
  const bytes = await doc.save();
  await save(bytes, `monograph-formulary-${file}.pdf`);
  return bytes;
}

export async function exportCramPdf() {
  const { iso, local, file } = stamp();
  const doc = await PDFDocument.create();
  doc.setTitle("Monograph cram sheet");
  doc.setSubject(`Generated ${local} (${iso})`);
  doc.setCreationDate(new Date(iso));
  doc.setModificationDate(new Date(iso));
  const fonts: Fonts = {
    regular: await doc.embedFont(StandardFonts.Helvetica),
    bold: await doc.embedFont(StandardFonts.HelveticaBold),
  };
  const A4: [number, number] = [595.28, 841.89];
  const footer = `Cram sheet  |  ${local}  |  ${iso}`;
  let page = doc.addPage(A4);
  let pageCount = 1;
  let y = 800;
  const ensure = (n: number) => {
    if (y - n < 48) {
      drawFooter(page, fonts, A4[0], footer, String(pageCount));
      page = doc.addPage(A4);
      pageCount++;
      y = 800;
    }
  };
  page.drawText("MONOGRAPH  CRAM", { x: 54, y, size: 11, font: fonts.regular, color: sage });
  y -= 22;
  page.drawText("Boxed warnings + killer pairs", { x: 54, y, size: 18, font: fonts.bold, color: ink });
  y -= 16;
  page.drawText(local, { x: 54, y, size: 9, font: fonts.regular, color: muted });
  y -= 22;
  page.drawText("BOXED WARNINGS", { x: 54, y, size: 11, font: fonts.bold, color: danger });
  y -= 14;
  for (const d of DRUGS.filter((x) => x.bbw)) {
    const lines = wrap(fonts.regular, `${d.generic}: ${d.bbw}`, 8, 487);
    ensure(lines.length * 11 + 6);
    for (const ln of lines) {
      page.drawText(ln, { x: 54, y, size: 8, font: fonts.regular, color: ink });
      y -= 11;
    }
    y -= 3;
  }
  ensure(28);
  y -= 8;
  page.drawText("DANGEROUS / HIGH-YIELD PAIRS", { x: 54, y, size: 11, font: fonts.bold, color: danger });
  y -= 14;
  for (const p of listedInteractions()) {
    const head = `${p.left} + ${p.right}  [${p.severity}]`;
    const lines = wrap(fonts.regular, `${head} -- ${p.detail}`, 8, 487);
    ensure(lines.length * 11 + 6);
    page.drawText(ascii(head), { x: 54, y, size: 8, font: fonts.bold, color: p.severity === "danger" ? danger : ink });
    y -= 11;
    for (const ln of wrap(fonts.regular, p.detail, 8, 487)) {
      page.drawText(ln, { x: 54, y, size: 8, font: fonts.regular, color: muted });
      y -= 11;
    }
    y -= 4;
  }
  drawFooter(page, fonts, A4[0], footer, String(pageCount));
  const bytes = await doc.save();
  await save(bytes, `monograph-cram-${file}.pdf`);
  return bytes;
}

export async function exportProgressPdf(input: {
  xp: number;
  streak: number;
  seen: number;
  correct: number;
  lastStudy: string | null;
  byDrug: Record<string, { seen: number; correct: number }>;
}) {
  const { iso, local, file } = stamp();
  const doc = await PDFDocument.create();
  doc.setTitle("Monograph progress report");
  doc.setSubject(`Generated ${local} (${iso})`);
  doc.setCreationDate(new Date(iso));
  doc.setModificationDate(new Date(iso));
  const fonts: Fonts = {
    regular: await doc.embedFont(StandardFonts.Helvetica),
    bold: await doc.embedFont(StandardFonts.HelveticaBold),
  };
  const A4: [number, number] = [595.28, 841.89];
  const page = doc.addPage(A4);
  let y = 800;
  page.drawText("PROGRESS REPORT", { x: 54, y, size: 11, font: fonts.regular, color: sage });
  y -= 22;
  page.drawText("Monograph", { x: 54, y, size: 22, font: fonts.bold, color: ink });
  y -= 18;
  page.drawText(local, { x: 54, y, size: 10, font: fonts.regular, color: muted });
  y -= 12;
  page.drawText(iso, { x: 54, y, size: 9, font: fonts.regular, color: muted });
  y -= 28;
  const acc = input.seen ? Math.round((input.correct / input.seen) * 100) : 0;
  const stats = [
    `XP  ${input.xp}`,
    `Streak  ${input.streak} day(s)`,
    `Items seen  ${input.seen}`,
    `Correct  ${input.correct}`,
    `Accuracy  ${input.seen ? acc + "%" : "n/a"}`,
    `Last study day  ${input.lastStudy ?? "none"}`,
  ];
  for (const s of stats) {
    page.drawText(s, { x: 54, y, size: 11, font: fonts.regular, color: ink });
    y -= 16;
  }
  y -= 10;
  page.drawText("Weakest drugs (min 2 attempts)", { x: 54, y, size: 11, font: fonts.bold, color: sage });
  y -= 16;
  const weak = Object.entries(input.byDrug)
    .filter(([, v]) => v.seen >= 2)
    .map(([id, v]) => ({ id, pct: Math.round((v.correct / v.seen) * 100), ...v }))
    .sort((a, b) => a.pct - b.pct)
    .slice(0, 20);
  if (!weak.length) {
    page.drawText("Not enough drill data yet.", { x: 54, y, size: 9, font: fonts.regular, color: muted });
  } else {
    for (const w of weak) {
      const name = DRUGS.find((d) => d.id === w.id)?.generic ?? w.id;
      page.drawText(`${name}   ${w.correct}/${w.seen}   ${w.pct}%`, { x: 54, y, size: 9, font: fonts.regular, color: ink });
      y -= 13;
    }
  }
  drawFooter(page, fonts, A4[0], `Progress  |  ${local}  |  ${iso}`, "1");
  const bytes = await doc.save();
  await save(bytes, `monograph-progress-${file}.pdf`);
  return bytes;
}
