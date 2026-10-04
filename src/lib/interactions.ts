import { DRUGS, type Drug } from "./catalog";

export type IxSeverity = "danger" | "warn" | "info";

export type IxHit = {
  severity: IxSeverity;
  title: string;
  detail: string;
};

const PAIRS: { a: string; b: string; severity: IxSeverity; title: string; detail: string }[] = [
  { a: "nitroglycerin", b: "sildenafil", severity: "danger", title: "Nitrates + PDE5 inhibitor", detail: "Profound refractory hypotension. Separate 24 h (sildenafil) to 48 h (tadalafil)." },
  { a: "warfarin", b: "tmp-smx", severity: "danger", title: "Warfarin + TMP-SMX", detail: "CYP2C9 inhibition plus protein binding -> INR spike and bleed. Prefer another antibiotic or check INR in 2-3 days." },
  { a: "warfarin", b: "metronidazole", severity: "danger", title: "Warfarin + metronidazole", detail: "INR can double. Empiric warfarin dose down ~25-40% and recheck INR." },
  { a: "warfarin", b: "amiodarone", severity: "danger", title: "Warfarin + amiodarone", detail: "Amiodarone inhibits CYP2C9. Expect to cut warfarin ~30-50% and follow INR weekly." },
  { a: "warfarin", b: "fluconazole", severity: "warn", title: "Warfarin + fluconazole", detail: "CYP2C9 inhibition. Recheck INR; consider preemptive dose reduction." },
  { a: "clopidogrel", b: "omeprazole", severity: "warn", title: "Clopidogrel + omeprazole", detail: "CYP2C19 competition may blunt clopidogrel activation. Prefer pantoprazole if a PPI is required." },
  { a: "lithium", b: "ibuprofen", severity: "danger", title: "Lithium + NSAID", detail: "NSAIDs reduce lithium clearance. Levels can enter the toxic range. Prefer APAP; if NSAID needed, check level." },
  { a: "lithium", b: "ketorolac", severity: "danger", title: "Lithium + NSAID", detail: "Same clearance issue as other NSAIDs - high risk of lithium toxicity." },
  { a: "lithium", b: "lisinopril", severity: "danger", title: "Lithium + ACE inhibitor", detail: "ACEIs reduce lithium clearance. Check level 5-7 days after start." },
  { a: "lithium", b: "hctz", severity: "danger", title: "Lithium + thiazide", detail: "Thiazides raise lithium levels. Avoid or reduce lithium and monitor." },
  { a: "metoprolol", b: "diltiazem", severity: "danger", title: "Beta blocker + non-DHP CCB", detail: "Additive AV nodal block and bradycardia. Avoid routine combination." },
  { a: "carvedilol", b: "diltiazem", severity: "danger", title: "Beta blocker + non-DHP CCB", detail: "High-grade AV block risk. Do not stack for rate control without pacing/ICU intent." },
  { a: "lisinopril", b: "spironolactone", severity: "warn", title: "ACEI + MRA", detail: "Guideline-directed in HFrEF but hyperkalemia is the tax. Check K/Cr at 3 and 7 days." },
  { a: "losartan", b: "spironolactone", severity: "warn", title: "ARB + MRA", detail: "Same hyperK risk as ACEI + MRA. Monitor K closely, especially CKD." },
  { a: "lisinopril", b: "tmp-smx", severity: "warn", title: "RAAS blocker + TMP-SMX", detail: "Trimethoprim acts like amiloride. Hyperkalemia, especially elderly/CKD." },
  { a: "lisinopril", b: "ibuprofen", severity: "warn", title: "ACEI + NSAID (triple-whammy if diuretic too)", detail: "Afferent constriction + efferent dilation -> AKI. Avoid NSAIDs in HF/CKD." },
  { a: "furosemide", b: "ibuprofen", severity: "warn", title: "Loop + NSAID", detail: "Blunts diuretic effect and risks AKI." },
  { a: "sertraline", b: "fentanyl", severity: "warn", title: "SSRI + fentanyl", detail: "Serotonin syndrome reports. Monitor agitation, clonus, hyperreflexia." },
  { a: "fluoxetine", b: "haloperidol", severity: "warn", title: "CYP2D6 inhibition + antipsychotic", detail: "Fluoxetine can raise some antipsychotic levels and add QT/EPS burden." },
  { a: "amiodarone", b: "digoxin", severity: "danger", title: "Amiodarone + digoxin", detail: "P-gp inhibition. Empiric 50% digoxin dose reduction and follow levels." },
  { a: "amiodarone", b: "azithromycin", severity: "warn", title: "QT stacking", detail: "Two QT-prolonging agents. Check electrolytes and QTc." },
  { a: "amiodarone", b: "haloperidol", severity: "warn", title: "QT stacking", detail: "Both prolong QT. Replete K/Mg; avoid IV haldol if QTc already long." },
  { a: "ondansetron", b: "azithromycin", severity: "warn", title: "QT stacking", detail: "Additive QTc. Prefer lowest ondansetron dose." },
  { a: "atorvastatin", b: "colchicine", severity: "warn", title: "Statin + colchicine", detail: "Myopathy/rhabdo reports, especially with CYP3A4 inhibitors and CKD." },
  { a: "morphine", b: "lorazepam", severity: "danger", title: "Opioid + benzodiazepine", detail: "Boxed warning: synergistic respiratory depression. Avoid unless no alternative; monitor RR." },
  { a: "hydromorphone", b: "lorazepam", severity: "danger", title: "Opioid + benzodiazepine", detail: "Same boxed combo - high fatality in co-prescribing." },
  { a: "fentanyl", b: "lorazepam", severity: "danger", title: "Opioid + benzodiazepine", detail: "High-potency opioid plus GABA-A PAM. ICU titration only." },
  { a: "gabapentin", b: "morphine", severity: "warn", title: "Gabapentinoid + opioid", detail: "Additive CNS/respiratory depression, especially CKD." },
  { a: "vancomycin", b: "pip-tazo", severity: "warn", title: "Vanco + pip-tazo", detail: "Higher AKI than vanco + cefepime. Use shortest effective course; follow Cr." },
  { a: "ciprofloxacin", b: "amiodarone", severity: "warn", title: "FQ + amiodarone QT", detail: "Both prolong QT. Prefer another antibiotic when possible." },
  { a: "methotrexate", b: "tmp-smx", severity: "danger", title: "Methotrexate + TMP-SMX", detail: "Folate pathway stacking -> pancytopenia. Avoid (except PCP ppx in oncology with protocol)." },
  { a: "prednisone", b: "ibuprofen", severity: "warn", title: "Steroid + NSAID", detail: "GI ulcer risk multiplies. Add PPI if both required." },
];

export function checkPair(a: Drug, b: Drug): IxHit[] {
  if (a.id === b.id) {
    return [{ severity: "info", title: "Same agent", detail: "Pick two different monographs." }];
  }
  const hits: IxHit[] = [];
  const pairKey = (x: string, y: string) => [x, y].sort().join("|");
  const want = pairKey(a.id, b.id);
  for (const p of PAIRS) {
    if (pairKey(p.a, p.b) === want) {
      hits.push({ severity: p.severity, title: p.title, detail: p.detail });
    }
  }
  const tagsA = new Set(a.tags);
  const tagsB = new Set(b.tags);
  if (tagsA.has("qt") && tagsB.has("qt")) {
    if (!hits.some((h) => h.title.toLowerCase().includes("qt"))) {
      hits.push({
        severity: "warn",
        title: "Additive QT prolongation",
        detail: `${a.generic} and ${b.generic} both carry QT risk. Check K/Mg and QTc before stacking.`,
      });
    }
  }
  if (tagsA.has("bleed") && tagsB.has("bleed")) {
    hits.push({
      severity: "warn",
      title: "Additive bleeding risk",
      detail: "Two antithrombotic / antiplatelet / NSAID-class bleed risks. Justify dual therapy (e.g., ACS DAPT) and protect GI.",
    });
  }
  if (
    (a.classes.includes("ACE inhibitor") && b.classes.includes("ARB")) ||
    (b.classes.includes("ACE inhibitor") && a.classes.includes("ARB"))
  ) {
    hits.push({
      severity: "danger",
      title: "ACE inhibitor + ARB",
      detail: "Dual RAAS block increases hyperK and AKI without outcome benefit in most patients. Do not combine.",
    });
  }
  if (tagsA.has("serotonin") && tagsB.has("serotonin")) {
    hits.push({
      severity: "warn",
      title: "Serotonergic stack",
      detail: "Watch for serotonin syndrome: clonus, hyperreflexia, diaphoresis, fever.",
    });
  }
  if (tagsA.has("resp-depress") && tagsB.has("resp-depress")) {
    if (!hits.some((h) => h.title.toLowerCase().includes("opioid"))) {
      hits.push({
        severity: "danger",
        title: "Stacked respiratory depression",
        detail: "Two CNS/respiratory depressants. Monitor RR and avoid outpatient co-prescribing.",
      });
    }
  }
  if (
    (tagsA.has("cyp-inducer") && tagsB.has("narrow-index")) ||
    (tagsB.has("cyp-inducer") && tagsA.has("narrow-index"))
  ) {
    hits.push({
      severity: "warn",
      title: "Inducer + narrow-index drug",
      detail: "Expect falling levels of the object drug. Recheck levels / INR / seizure control.",
    });
  }
  if (hits.length === 0) {
    hits.push({
      severity: "info",
      title: "No high-yield pair rule fired",
      detail: "Absence of a rule is not proof of safety. Check a full interaction database and the patient chart before prescribing.",
    });
  }
  return hits;
}

export function famousPairsFor(id: string) {
  return PAIRS.filter((p) => p.a === id || p.b === id).map((p) => {
    const other = p.a === id ? p.b : p.a;
    const d = DRUGS.find((x) => x.id === other);
    return { ...p, otherId: other, otherName: d?.generic ?? other };
  });
}

export function listedInteractions() {
  return PAIRS.filter((p) => p.severity !== "info").map((p) => ({
    ...p,
    left: DRUGS.find((d) => d.id === p.a)?.generic ?? p.a,
    right: DRUGS.find((d) => d.id === p.b)?.generic ?? p.b,
  }));
}
