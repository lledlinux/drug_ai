import { i as __toESM } from "../_runtime.mjs";
import { b as require_jsx_runtime, q as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Search, c as GitCompare, d as ChevronRight, f as ChevronLeft, g as BookOpen, h as BookmarkCheck, i as Sparkles, l as FlaskConical, m as Bookmark, o as Layers, p as Brain, r as Stethoscope, s as House, t as X, u as FileDown } from "../_libs/lucide-react.mjs";
import { n as TSS_SERVER_FUNCTION, r as getServerFnById, t as createServerFn } from "./ssr.mjs";
import { i as searchDrugs, n as SYSTEMS, r as drugById, t as DRUGS } from "./catalog-C_WiOTXl.mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
import { n as StandardFonts, r as rgb, t as PDFDocument } from "../_libs/pdf-lib.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BGMViu_6.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var PAIRS = [
	{
		a: "nitroglycerin",
		b: "sildenafil",
		severity: "danger",
		title: "Nitrates + PDE5 inhibitor",
		detail: "Profound refractory hypotension. Separate 24 h (sildenafil) to 48 h (tadalafil)."
	},
	{
		a: "warfarin",
		b: "tmp-smx",
		severity: "danger",
		title: "Warfarin + TMP-SMX",
		detail: "CYP2C9 inhibition plus protein binding → INR spike and bleed. Prefer another antibiotic or check INR in 2–3 days."
	},
	{
		a: "warfarin",
		b: "metronidazole",
		severity: "danger",
		title: "Warfarin + metronidazole",
		detail: "INR can double. Empiric warfarin dose ↓ ~25–40% and recheck INR."
	},
	{
		a: "warfarin",
		b: "amiodarone",
		severity: "danger",
		title: "Warfarin + amiodarone",
		detail: "Amiodarone inhibits CYP2C9. Expect to cut warfarin ~30–50% and follow INR weekly."
	},
	{
		a: "warfarin",
		b: "fluconazole",
		severity: "warn",
		title: "Warfarin + fluconazole",
		detail: "CYP2C9 inhibition. Recheck INR; consider preemptive dose reduction."
	},
	{
		a: "clopidogrel",
		b: "omeprazole",
		severity: "warn",
		title: "Clopidogrel + omeprazole",
		detail: "CYP2C19 competition may blunt clopidogrel activation. Prefer pantoprazole if a PPI is required."
	},
	{
		a: "lithium",
		b: "ibuprofen",
		severity: "danger",
		title: "Lithium + NSAID",
		detail: "NSAIDs reduce lithium clearance. Levels can enter the toxic range. Prefer APAP; if NSAID needed, check level."
	},
	{
		a: "lithium",
		b: "ketorolac",
		severity: "danger",
		title: "Lithium + NSAID",
		detail: "Same clearance issue as other NSAIDs — high risk of lithium toxicity."
	},
	{
		a: "lithium",
		b: "lisinopril",
		severity: "danger",
		title: "Lithium + ACE inhibitor",
		detail: "ACEIs reduce lithium clearance. Check level 5–7 days after start."
	},
	{
		a: "lithium",
		b: "hctz",
		severity: "danger",
		title: "Lithium + thiazide",
		detail: "Thiazides raise lithium levels. Avoid or reduce lithium and monitor."
	},
	{
		a: "allopurinol",
		b: "azathioprine",
		severity: "danger",
		title: "Allopurinol + azathioprine / 6-MP",
		detail: "XO inhibition blocks 6-MP metabolism → life-threatening myelosuppression. Cut thiopurine to 25% or avoid."
	},
	{
		a: "metoprolol",
		b: "diltiazem",
		severity: "danger",
		title: "Beta blocker + non-DHP CCB",
		detail: "Additive AV nodal block and bradycardia. Avoid routine combination."
	},
	{
		a: "carvedilol",
		b: "diltiazem",
		severity: "danger",
		title: "Beta blocker + non-DHP CCB",
		detail: "High-grade AV block risk. Do not stack for rate control without pacing/ICU intent."
	},
	{
		a: "lisinopril",
		b: "spironolactone",
		severity: "warn",
		title: "ACEI + MRA",
		detail: "Guideline-directed in HFrEF but hyperkalemia is the tax. Check K/Cr at 3 and 7 days."
	},
	{
		a: "losartan",
		b: "spironolactone",
		severity: "warn",
		title: "ARB + MRA",
		detail: "Same hyperK risk as ACEI + MRA. Monitor K closely, especially CKD."
	},
	{
		a: "lisinopril",
		b: "tmp-smx",
		severity: "warn",
		title: "RAAS blocker + TMP-SMX",
		detail: "Trimethoprim acts like amiloride. Hyperkalemia, especially elderly/CKD."
	},
	{
		a: "lisinopril",
		b: "ibuprofen",
		severity: "warn",
		title: "ACEI + NSAID (triple-whammy if diuretic too)",
		detail: "Afferent constriction + efferent dilation → AKI. Avoid NSAIDs in HF/CKD."
	},
	{
		a: "furosemide",
		b: "ibuprofen",
		severity: "warn",
		title: "Loop + NSAID",
		detail: "Blunts diuretic effect and risks AKI."
	},
	{
		a: "sertraline",
		b: "tramadol",
		severity: "warn",
		title: "SSRI + serotonergic opioid",
		detail: "Serotonin syndrome risk. Prefer non-serotonergic analgesic when possible."
	},
	{
		a: "sertraline",
		b: "ondansetron",
		severity: "info",
		title: "SSRI + 5HT3 antagonist",
		detail: "Theoretical serotonin overlap plus QT (ondansetron). Usually tolerated; caution high IV doses."
	},
	{
		a: "sertraline",
		b: "fentanyl",
		severity: "warn",
		title: "SSRI + fentanyl",
		detail: "Serotonin syndrome reports. Monitor agitation, clonus, hyperreflexia."
	},
	{
		a: "fluoxetine",
		b: "haloperidol",
		severity: "warn",
		title: "CYP2D6 inhibition + antipsychotic",
		detail: "Fluoxetine can raise some antipsychotic levels and add QT/EPS burden."
	},
	{
		a: "amiodarone",
		b: "digoxin",
		severity: "danger",
		title: "Amiodarone + digoxin",
		detail: "P-gp inhibition. Empiric 50% digoxin dose reduction and follow levels."
	},
	{
		a: "amiodarone",
		b: "azithromycin",
		severity: "warn",
		title: "QT stacking",
		detail: "Two QT-prolonging agents. Check electrolytes and QTc."
	},
	{
		a: "amiodarone",
		b: "haloperidol",
		severity: "warn",
		title: "QT stacking",
		detail: "Both prolong QT. Replete K/Mg; avoid IV haldol if QTc already long."
	},
	{
		a: "ondansetron",
		b: "azithromycin",
		severity: "warn",
		title: "QT stacking",
		detail: "Additive QTc. Prefer lowest ondansetron dose."
	},
	{
		a: "atorvastatin",
		b: "colchicine",
		severity: "warn",
		title: "Statin + colchicine",
		detail: "Myopathy/rhabdo reports, especially with CYP3A4 inhibitors and CKD."
	},
	{
		a: "morphine",
		b: "lorazepam",
		severity: "danger",
		title: "Opioid + benzodiazepine",
		detail: "Boxed warning: synergistic respiratory depression. Avoid unless no alternative; monitor RR."
	},
	{
		a: "hydromorphone",
		b: "lorazepam",
		severity: "danger",
		title: "Opioid + benzodiazepine",
		detail: "Same boxed combo — high fatality in co-prescribing."
	},
	{
		a: "fentanyl",
		b: "lorazepam",
		severity: "danger",
		title: "Opioid + benzodiazepine",
		detail: "High-potency opioid plus GABA-A PAM. ICU titration only."
	},
	{
		a: "gabapentin",
		b: "morphine",
		severity: "warn",
		title: "Gabapentinoid + opioid",
		detail: "Additive CNS/respiratory depression, especially CKD."
	},
	{
		a: "vancomycin",
		b: "pip-tazo",
		severity: "warn",
		title: "Vanco + pip-tazo",
		detail: "Higher AKI than vanco + cefepime. Use shortest effective course; follow Cr."
	},
	{
		a: "ciprofloxacin",
		b: "amiodarone",
		severity: "warn",
		title: "FQ + amiodarone QT",
		detail: "Both prolong QT. Prefer another antibiotic when possible."
	},
	{
		a: "methotrexate",
		b: "tmp-smx",
		severity: "danger",
		title: "Methotrexate + TMP-SMX",
		detail: "Folate pathway stacking → pancytopenia. Avoid (except PCP ppx in oncology with protocol)."
	},
	{
		a: "prednisone",
		b: "ibuprofen",
		severity: "warn",
		title: "Steroid + NSAID",
		detail: "GI ulcer risk multiplies. Add PPI if both required."
	}
];
function checkPair(a, b) {
	if (a.id === b.id) return [{
		severity: "info",
		title: "Same agent",
		detail: "Pick two different monographs."
	}];
	const hits = [];
	const pairKey = (x, y) => [x, y].sort().join("|");
	const want = pairKey(a.id, b.id);
	for (const p of PAIRS) if (pairKey(p.a, p.b) === want) hits.push({
		severity: p.severity,
		title: p.title,
		detail: p.detail
	});
	const tagsA = new Set(a.tags);
	const tagsB = new Set(b.tags);
	if (tagsA.has("qt") && tagsB.has("qt")) {
		if (!hits.some((h) => h.title.toLowerCase().includes("qt"))) hits.push({
			severity: "warn",
			title: "Additive QT prolongation",
			detail: `${a.generic} and ${b.generic} both carry QT risk. Check K/Mg and QTc before stacking.`
		});
	}
	if (tagsA.has("bleed") && tagsB.has("bleed")) hits.push({
		severity: "warn",
		title: "Additive bleeding risk",
		detail: "Two antithrombotic / antiplatelet / NSAID-class bleed risks. Justify dual therapy (e.g., ACS DAPT) and protect GI."
	});
	if (tagsA.has("K-sparing-risk") && tagsB.has("K-sparing-risk") || tagsA.has("K-sparing-risk") && tagsB.has("K-wasting") === false && a.classes.includes("ACE inhibitor") && b.classes.includes("ARB")) {}
	if (a.classes.includes("ACE inhibitor") && b.classes.includes("ARB") || b.classes.includes("ACE inhibitor") && a.classes.includes("ARB")) hits.push({
		severity: "danger",
		title: "ACE inhibitor + ARB",
		detail: "Dual RAAS block increases hyperK and AKI without outcome benefit in most patients. Do not combine."
	});
	if (tagsA.has("serotonin") && tagsB.has("serotonin")) hits.push({
		severity: "warn",
		title: "Serotonergic stack",
		detail: "Watch for serotonin syndrome: clonus, hyperreflexia, diaphoresis, fever."
	});
	if (tagsA.has("resp-depress") && tagsB.has("resp-depress")) {
		if (!hits.some((h) => h.title.toLowerCase().includes("opioid"))) hits.push({
			severity: "danger",
			title: "Stacked respiratory depression",
			detail: "Two CNS/respiratory depressants. Monitor RR and avoid outpatient co-prescribing."
		});
	}
	if (tagsA.has("cyp-inducer") && tagsB.has("narrow-index") || tagsB.has("cyp-inducer") && tagsA.has("narrow-index")) hits.push({
		severity: "warn",
		title: "Inducer + narrow-index drug",
		detail: "Expect falling levels of the object drug. Recheck levels / INR / seizure control."
	});
	if (hits.length === 0) hits.push({
		severity: "info",
		title: "No high-yield pair rule fired",
		detail: "Absence of a rule is not proof of safety. Check a full interaction database and the patient chart before prescribing."
	});
	return hits;
}
function famousPairsFor(id) {
	return PAIRS.filter((p) => p.a === id || p.b === id).map((p) => {
		const other = p.a === id ? p.b : p.a;
		const d = DRUGS.find((x) => x.id === other);
		return {
			...p,
			otherId: other,
			otherName: d?.generic ?? other
		};
	});
}
var VIGNETTES = [
	{
		id: "ace-preg",
		title: "New HTN at 8 weeks",
		system: "Cardiovascular",
		stem: "A 32-year-old is found to be 8 weeks pregnant. She has been taking lisinopril 20 mg daily for HTN diagnosed last year. BP today 128/78. Creatinine 0.7, K 4.1.",
		question: "What is the most appropriate next step regarding her antihypertensive?",
		choices: [
			"Continue lisinopril; it is safe after the first trimester",
			"Stop lisinopril now and start labetalol or nifedipine",
			"Switch to losartan because ARBs are preferred in pregnancy",
			"Add HCTZ and continue the ACE inhibitor at a lower dose"
		],
		answer: 1,
		explanation: "ACE inhibitors and ARBs are teratogens (fetal toxicity boxed warning). Stop immediately and use pregnancy-preferred agents (labetalol, nifedipine, methyldopa).",
		drugs: ["lisinopril", "losartan"]
	},
	{
		id: "nitrate-pde5",
		title: "Chest pain after a blue pill",
		system: "Cardiovascular",
		stem: "A 58-year-old with CAD uses sublingual nitroglycerin PRN. He took sildenafil 50 mg 6 hours ago. He now has 7/10 substernal pressure. SBP 148.",
		question: "Which statement is correct?",
		choices: [
			"Give SL nitroglycerin; 6 hours is a safe washout",
			"Avoid nitrates; sildenafil washout is 24 hours",
			"Give IV nitroprusside instead — it does not interact",
			"Give tadalafil as a substitute antianginal"
		],
		answer: 1,
		explanation: "PDE5 inhibitors plus any nitrate can cause catastrophic hypotension. Sildenafil/vardenafil: 24 h; tadalafil: 48 h. Manage ACS without nitrates (beta blocker, antiplatelet, anticoagulation, PCI).",
		drugs: ["nitroglycerin", "sildenafil"]
	},
	{
		id: "metformin-contrast",
		title: "Cath in the morning",
		system: "Endocrine",
		stem: "A 67-year-old with T2DM on metformin 1000 mg BID has eGFR 38 mL/min. He is scheduled for coronary angiography with iodinated contrast tomorrow.",
		question: "Best peri-procedural plan for metformin?",
		choices: [
			"Continue metformin; contrast does not interact",
			"Hold metformin at contrast and restart after 48 h if eGFR stable",
			"Double the dose the night before to cover NPO",
			"Switch tonight to glyburide 10 mg"
		],
		answer: 1,
		explanation: "Hold metformin at the time of iodinated contrast when eGFR <45, and restart after 48 hours only if renal function is stable — lactic acidosis risk if AKI develops.",
		drugs: ["metformin"]
	},
	{
		id: "warfarin-bactrim",
		title: "UTI and an INR of 4.8",
		system: "Heme",
		stem: "A 74-year-old on warfarin for a mechanical mitral valve (goal 2.5–3.5) was given TMP-SMX DS BID for cystitis 4 days ago. Today INR is 4.8. No bleeding. She is otherwise well.",
		question: "Which mechanism best explains the INR jump?",
		choices: [
			"TMP-SMX induces CYP2C9 and lowers warfarin levels",
			"Trimethoprim antagonizes vitamin K directly at VKORC1",
			"Sulfamethoxazole inhibits CYP2C9 and displaces warfarin",
			"The antibiotic killed vitamin-K producing flora only — no CYP effect"
		],
		answer: 2,
		explanation: "TMP-SMX is a classic CYP2C9 inhibitor (and protein-binding displacer). Warfarin effect shoots up within days. Prefer a non-interacting antibiotic for cystitis when possible.",
		drugs: ["warfarin", "tmp-smx"]
	},
	{
		id: "vanco-redman",
		title: "Flushing on the first bag",
		system: "Infectious",
		stem: "A 45-year-old receiving vancomycin 1.5 g IV for MRSA bacteremia develops flushing, pruritus, and mild hypotension 20 minutes into a 30-minute infusion. Tryptase later normal. Rash is macular, not urticarial plaques with angioedema.",
		question: "Best immediate management?",
		choices: [
			"Lifetime vancomycin allergy — never rechallenge; start linezolid",
			"Stop infusion, give antihistamine, resume at a slower rate",
			"Give IM epinephrine and label as anaphylaxis",
			"Switch to PO vancomycin for bacteremia"
		],
		answer: 1,
		explanation: "Red-man syndrome is an infusion-rate histamine release, not IgE anaphylaxis. Slow the infusion (≥1–2 h for large doses) ± antihistamine. PO vancomycin is not absorbed and does not treat bacteremia.",
		drugs: ["vancomycin"]
	},
	{
		id: "lamotrigine-rash",
		title: "Titration too fast",
		system: "Neuropsych",
		stem: "A 28-year-old with bipolar II starts lamotrigine. A covering clinician jumps from 25 mg daily to 200 mg daily over 5 days because 'mood is still low.' On day 8 she has a blistering rash involving palms and oral mucosa.",
		question: "What is the key teaching point?",
		choices: [
			"Rash is usually morbilliform and lamotrigine can be continued",
			"Rapid titration raises SJS/TEN risk; stop the drug and do not rechallenge",
			"Valproate co-therapy would have protected against rash",
			"HLA-B*1502 is the relevant allele for lamotrigine in all ancestries"
		],
		answer: 1,
		explanation: "Lamotrigine boxed warning: SJS/TEN, strongly associated with rapid titration (and with valproate, which raises levels — you go even slower). Mucosal blistering = stop permanently.",
		drugs: ["lamotrigine", "valproate"]
	},
	{
		id: "sglt2-dka",
		title: "Nausea, glucose 168",
		system: "Endocrine",
		stem: "A 54-year-old on empagliflozin and metformin has 2 days of nausea and vomiting after a viral illness. Glucose is 168, bicarbonate 10, anion gap 22, ketones large. He took empagliflozin this morning.",
		question: "What is the diagnosis and key teaching point?",
		choices: [
			"Starvation ketoacidosis — restart SGLT2 when eating",
			"Euglycemic DKA — stop SGLT2, give insulin + dextrose, hold 3 days pre-op in future",
			"Lactic acidosis from metformin — give bicarbonate only",
			"Hyperosmolar state — give SQ insulin sliding scale"
		],
		answer: 1,
		explanation: "SGLT2 inhibitors can cause euglycemic DKA: anion-gap metabolic acidosis + ketones with near-normal glucose. Treat as DKA (insulin + glucose). Counsel sick-day holds and 3-day pre-op hold.",
		drugs: ["empagliflozin", "metformin"]
	},
	{
		id: "mtx-daily",
		title: "The weekly error",
		system: "Immune",
		stem: "A 62-year-old with RA is admitted with pancytopenia and mucositis. Home med rec shows methotrexate 15 mg written as '15 mg PO daily' instead of weekly, plus TMP-SMX DS BID for a UTI.",
		question: "Which pairing is most responsible?",
		choices: [
			"Daily methotrexate dosing error plus folate-pathway stacking with TMP-SMX",
			"TMP-SMX alone always causes pancytopenia in RA",
			"Methotrexate must be given daily in RA for efficacy",
			"Folic acid 1 mg daily caused the mucositis"
		],
		answer: 0,
		explanation: "RA methotrexate is WEEKLY. Daily dosing is a classic fatal error (boxed). TMP-SMX further blocks folate and precipitates marrow failure. Leucovorin rescue + G-CSF as indicated.",
		drugs: ["methotrexate", "tmp-smx"]
	},
	{
		id: "amio-thyroid",
		title: "Weight loss on a rhythm drug",
		system: "Cardiovascular",
		stem: "A 70-year-old on amiodarone 200 mg daily for 8 months has weight loss, tremor, and TSH <0.01 with free T4 high. No eye pain. CXR unchanged.",
		question: "Most accurate statement?",
		choices: [
			"Amiodarone cannot cause hyperthyroidism because it contains iodine",
			"Amiodarone can cause hypo- or hyperthyroidism; check TFTs every 6 months",
			"This is expected suppression; no workup needed",
			"Stop amiodarone and start lithium for rate control"
		],
		answer: 1,
		explanation: "Amiodarone is 37% iodine and is cytotoxic to thyroid. Both hypo (more common) and hyper (type 1 iodine load vs type 2 thyroiditis) occur. Monitor TFTs, LFTs, CXR regularly.",
		drugs: ["amiodarone"]
	},
	{
		id: "triple-whammy",
		title: "The arthritis flare",
		system: "Renal / GU",
		stem: "An 81-year-old on lisinopril and furosemide starts ibuprofen 800 mg TID for knee pain. A week later Cr has risen from 1.0 to 2.4. She is euvolemic. FeNa is low.",
		question: "What is the mechanism?",
		choices: [
			"NSAID afferent constriction + ACEI efferent dilation + diuretic hypovolemia",
			"Acute interstitial nephritis from lisinopril alone",
			"Rhabdomyolysis from the NSAID",
			"Post-renal obstruction from papillary necrosis in one week"
		],
		answer: 0,
		explanation: "Triple whammy: NSAID (↓ afferent PGE dilation) + ACEI/ARB (↓ efferent angiotensin constriction) + diuretic (↓ preload) → GFR collapse. Stop the NSAID, recheck Cr, counsel.",
		drugs: [
			"lisinopril",
			"furosemide",
			"ibuprofen"
		]
	},
	{
		id: "keppra-rage",
		title: "New irritability",
		system: "Neuropsych",
		stem: "A 34-year-old started levetiracetam after a first unprovoked seizure. Two weeks later his partner reports explosive irritability and insomnia. Seizures have not recurred. MRI was normal.",
		question: "Best next step?",
		choices: [
			"Add haloperidol for the new psychosis and continue Keppra",
			"Recognize psychiatric ADRs of levetiracetam and switch AED if intolerable",
			"Increase the dose — this is under-treatment of seizures presenting as mood",
			"Start valproate on top for mood stabilization without changing Keppra"
		],
		answer: 1,
		explanation: "Levetiracetam's signature toxicity is psychiatric: irritability, depression, rarely psychosis. It has almost no CYP interactions, which is why it is used — but behavior is the tradeoff. Switch if severe.",
		drugs: ["levetiracetam"]
	},
	{
		id: "doac-valve",
		title: "Clicking mitral",
		system: "Heme",
		stem: "A 55-year-old with a mechanical mitral valve is admitted for AF with RVR. A consultant writes apixaban 5 mg BID 'because DOACs are easier than warfarin.'",
		question: "What should you do?",
		choices: [
			"Approve apixaban; DOACs are superior to warfarin for all valves",
			"Reject — mechanical valves are a contraindication to DOACs; use warfarin INR 2.5–3.5",
			"Use dabigatran instead; RE-ALIGN showed benefit",
			"Use 2.5 mg BID because of the valve"
		],
		answer: 1,
		explanation: "DOACs are contraindicated for mechanical valves. RE-ALIGN (dabigatran) was stopped for thrombosis and bleeding. Vitamin K antagonist with INR 2.5–3.5 (mitral) remains standard.",
		drugs: ["apixaban", "warfarin"]
	}
];
function rng(seed) {
	let s = seed % 2147483647;
	if (s <= 0) s += 2147483646;
	return () => (s = s * 16807 % 2147483647) / 2147483647;
}
function pick(rand, arr, n, exclude) {
	const pool = exclude === void 0 ? [...arr] : arr.filter((x) => x !== exclude);
	const out = [];
	while (out.length < n && pool.length) {
		const i = Math.floor(rand() * pool.length);
		out.push(pool.splice(i, 1)[0]);
	}
	return out;
}
function shuffle(rand, arr) {
	const a = [...arr];
	for (let i = a.length - 1; i > 0; i--) {
		const j = Math.floor(rand() * (i + 1));
		[a[i], a[j]] = [a[j], a[i]];
	}
	return a;
}
function unique(arr) {
	return [...new Set(arr)];
}
function makeQuestion(drug, rand, type) {
	const types = [
		"class",
		"moa",
		"indication",
		"pearl",
		"brand",
		"monitor"
	];
	if (drug.bbw) types.push("bbw");
	const t = type && types.includes(type) ? type : types[Math.floor(rand() * types.length)];
	const others = DRUGS.filter((d) => d.id !== drug.id);
	const wrap = (prompt, correct, distractors, explain) => {
		const choices = shuffle(rand, unique([correct, ...distractors]).slice(0, 4));
		while (choices.length < 4) choices.push(others[Math.floor(rand() * others.length)].generic);
		const answer = choices.indexOf(correct);
		return {
			id: `${drug.id}-${t}-${Math.floor(rand() * 1e9)}`,
			type: t,
			prompt,
			choices: choices.slice(0, 4),
			answer: answer < 0 ? 0 : answer,
			explain,
			drugId: drug.id
		};
	};
	if (t === "class") {
		const correct = drug.classes[0];
		const distractors = pick(rand, unique(others.map((d) => d.classes[0]).filter((c) => c !== correct)), 3);
		return wrap(`What is the primary class of ${drug.generic}?`, correct, distractors, `${drug.generic} is a ${drug.classes.join(" / ")}. ${drug.moa}`);
	}
	if (t === "moa") {
		const correct = drug.moa;
		const distractors = pick(rand, others.map((d) => d.moa).filter((m) => m !== correct), 3);
		return wrap(`Mechanism of ${drug.generic}?`, correct, distractors, drug.moa);
	}
	if (t === "indication") {
		const correct = drug.indications[0];
		const distractors = pick(rand, unique(others.flatMap((d) => d.indications)).filter((i) => !drug.indications.includes(i)), 3);
		return wrap(`A first-line / high-yield indication for ${drug.generic} is:`, correct, distractors, `${drug.generic}: ${drug.indications.join(", ")}.`);
	}
	if (t === "bbw" && drug.bbw) {
		const correct = drug.bbw;
		const distractors = pick(rand, others.map((d) => d.bbw).filter((b) => Boolean(b) && b !== correct), 3);
		return wrap(`Boxed warning most associated with ${drug.generic}?`, correct, distractors, drug.bbw);
	}
	if (t === "brand") {
		const correct = drug.brands[0];
		const distractors = pick(rand, others.map((d) => d.brands[0]).filter((b) => b !== correct), 3);
		return wrap(`A U.S. brand name for ${drug.generic} is:`, correct, distractors, `${drug.brands.join(", ")}.`);
	}
	if (t === "monitor") {
		const correct = drug.monitor[0];
		const distractors = pick(rand, unique(others.flatMap((d) => d.monitor)).filter((m) => !drug.monitor.includes(m)), 3);
		return wrap(`Highest-yield monitoring for ${drug.generic}?`, correct, distractors, drug.monitor.join("; "));
	}
	const correct = drug.pearls[0];
	const distractors = pick(rand, others.map((d) => d.pearls[0]).filter((p) => p !== correct), 3);
	return wrap(`Clinical pearl for ${drug.generic}:`, correct, distractors, drug.pearls.join(" "));
}
function makeExam(n, seed, filter) {
	const rand = rng(seed);
	let pool = DRUGS;
	if (filter?.system) pool = pool.filter((d) => d.system === filter.system);
	if (filter?.ids?.length) pool = pool.filter((d) => filter.ids.includes(d.id));
	if (!pool.length) pool = DRUGS;
	const qs = [];
	for (let i = 0; i < n; i++) {
		const d = pool[Math.floor(rand() * pool.length)];
		qs.push(makeQuestion(d, rand));
	}
	return qs;
}
function today() {
	return (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
}
function bumpStreak(last, streak) {
	const t = today();
	if (last === t) return streak;
	if (!last) return 1;
	const prev = new Date(t);
	prev.setDate(prev.getDate() - 1);
	return last === prev.toISOString().slice(0, 10) ? streak + 1 : 1;
}
function sm2(card, grade) {
	const now = Date.now();
	if (grade <= 1) return {
		ease: Math.max(1.3, card.ease - .2),
		interval: 0,
		reps: 0,
		due: now + 6e5,
		lapses: card.lapses + 1
	};
	let ease = card.ease + (.1 - (4 - grade) * (.08 + (4 - grade) * .02));
	if (ease < 1.3) ease = 1.3;
	let reps = card.reps + 1;
	let interval;
	if (reps === 1) interval = 1;
	else if (reps === 2) interval = 3;
	else interval = Math.round(card.interval * ease);
	return {
		ease,
		interval,
		reps,
		due: now + interval * 864e5,
		lapses: card.lapses
	};
}
var emptyCard = () => ({
	ease: 2.5,
	interval: 0,
	reps: 0,
	due: 0,
	lapses: 0
});
var useProgress = create()(persist((set, get) => ({
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
	record: (drugId, ok) => {
		set((s) => {
			const t = today();
			const hist = [...s.history];
			const i = hist.findIndex((h) => h.date === t);
			if (i >= 0) hist[i] = {
				date: t,
				correct: hist[i].correct + (ok ? 1 : 0),
				seen: hist[i].seen + 1
			};
			else hist.push({
				date: t,
				correct: ok ? 1 : 0,
				seen: 1
			});
			const bd = { ...s.byDrug[drugId] ?? {
				seen: 0,
				correct: 0
			} };
			bd.seen += 1;
			if (ok) bd.correct += 1;
			const misses = ok ? s.lastMisses.filter((id) => id !== drugId) : [drugId, ...s.lastMisses.filter((id) => id !== drugId)].slice(0, 24);
			return {
				seen: s.seen + 1,
				correct: s.correct + (ok ? 1 : 0),
				xp: s.xp + (ok ? 12 : 3),
				streak: bumpStreak(s.lastStudy, s.streak),
				lastStudy: t,
				byDrug: {
					...s.byDrug,
					[drugId]: bd
				},
				history: hist.slice(-60),
				lastMisses: misses
			};
		});
	},
	review: (drugId, grade) => {
		set((s) => {
			const prev = s.cards[drugId] ?? emptyCard();
			return {
				cards: {
					...s.cards,
					[drugId]: sm2(prev, grade)
				},
				xp: s.xp + grade * 4,
				streak: bumpStreak(s.lastStudy, s.streak),
				lastStudy: today()
			};
		});
	},
	toggleBookmark: (id) => set((s) => ({ bookmarks: s.bookmarks.includes(id) ? s.bookmarks.filter((x) => x !== id) : [...s.bookmarks, id] })),
	setNote: (id, note) => set((s) => ({ notes: {
		...s.notes,
		[id]: note
	} })),
	dueCards: () => {
		const now = Date.now();
		const { cards } = get();
		return DRUGS.filter((d) => (cards[d.id]?.due ?? 0) <= now).map((d) => d.id);
	}
}), { name: "monograph-progress-v1" }));
function masteryOf(seen, correct) {
	if (seen === 0) return 0;
	return Math.round(correct / seen * 100);
}
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var askTutor = createServerFn({ method: "POST" }).validator((input) => input).handler(createSsrRpc("e4b298ada733254d7dc14aac47b9f6d9ecc8198d39cd13d11e0d91f3eeec50d8"));
var ink = rgb(.05, .055, .063);
var muted = rgb(.42, .45, .44);
var sage = rgb(.49, .608, .541);
var danger = rgb(.77, .36, .29);
var rule = rgb(.78, .8, .79);
var paper = rgb(1, 1, 1);
function ascii(s) {
	return s.replaceAll("→", "->").replaceAll("←", "<-").replaceAll("↓", " down").replaceAll("↑", " up").replaceAll("µ", "u").replaceAll("×", "x").replaceAll("–", "-").replaceAll("—", "-").replaceAll("≤", "<=").replaceAll("≥", ">=").replaceAll("’", "'").replaceAll("‘", "'").replaceAll("“", "\"").replaceAll("”", "\"").replaceAll("…", "...").replaceAll("½", "1/2").replaceAll("α", "a").replaceAll("β", "b").replaceAll("γ", "g").replaceAll("°", " deg").replace(/[^\x20-\x7E]/g, " ");
}
function wrap(font, text, size, maxW) {
	const words = ascii(text).split(/\s+/).filter(Boolean);
	const lines = [];
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
	const d = /* @__PURE__ */ new Date();
	const iso = d.toISOString();
	return {
		iso,
		local: new Intl.DateTimeFormat(void 0, {
			dateStyle: "full",
			timeStyle: "long"
		}).format(d),
		file: iso.slice(0, 10)
	};
}
async function save(bytes, name) {
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
function drawFooter(page, fonts, w, text, pageNo) {
	page.drawLine({
		start: {
			x: 36,
			y: 28
		},
		end: {
			x: w - 36,
			y: 28
		},
		thickness: .4,
		color: rule
	});
	page.drawText(ascii(text), {
		x: 36,
		y: 16,
		size: 7,
		font: fonts.regular,
		color: muted
	});
	const pw = fonts.regular.widthOfTextAtSize(pageNo, 7);
	page.drawText(pageNo, {
		x: w - 36 - pw,
		y: 16,
		size: 7,
		font: fonts.regular,
		color: muted
	});
}
function slotRects(pageW, pageH) {
	const marginX = 22;
	const marginTop = 28;
	const marginBot = 36;
	const gapX = 8;
	const gapY = 8;
	const cols = 2;
	const rows = 3;
	const usableW = pageW - 44 - gapX;
	const usableH = pageH - marginTop - marginBot - 16;
	const cw = usableW / cols;
	const ch = usableH / rows;
	const rects = [];
	for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) rects.push({
		x: marginX + c * (cw + gapX),
		y: pageH - marginTop - (r + 1) * ch - r * gapY,
		w: cw,
		h: ch
	});
	return rects;
}
function dashedRect(page, x, y, w, h, color) {
	page.drawRectangle({
		x,
		y,
		width: w,
		height: h,
		borderWidth: .6,
		borderColor: color,
		borderDashArray: [3, 2],
		color: paper
	});
}
function drawFront(page, fonts, box, drug) {
	dashedRect(page, box.x, box.y, box.w, box.h, rule);
	if (!drug) return;
	const pad = 10;
	const maxW = box.w - 20;
	page.drawText(ascii(drug.system.toUpperCase()), {
		x: box.x + pad,
		y: box.y + box.h - 20,
		size: 8,
		font: fonts.regular,
		color: sage
	});
	const nameLines = wrap(fonts.bold, drug.generic, 16, maxW).slice(0, 3);
	let y = box.y + box.h / 2 + nameLines.length * 18 / 2;
	for (const ln of nameLines) {
		y -= 18;
		page.drawText(ln, {
			x: box.x + pad,
			y,
			size: 16,
			font: fonts.bold,
			color: ink
		});
	}
	const brands = wrap(fonts.regular, drug.brands.join("  |  "), 9, maxW).slice(0, 2);
	y -= 10;
	for (const ln of brands) {
		y -= 12;
		page.drawText(ln, {
			x: box.x + pad,
			y,
			size: 9,
			font: fonts.regular,
			color: muted
		});
	}
	page.drawText("MONOGRAPH  ·  cut on dashed line", {
		x: box.x + pad,
		y: box.y + 10,
		size: 7,
		font: fonts.regular,
		color: muted
	});
}
function drawBack(page, fonts, box, drug) {
	dashedRect(page, box.x, box.y, box.w, box.h, rule);
	if (!drug) return;
	const pad = 10;
	const maxW = box.w - 20;
	let y = box.y + box.h - 18;
	const write = (text, size, font, color, maxLines) => {
		const lines = wrap(font, text, size, maxW).slice(0, maxLines);
		for (const ln of lines) {
			y -= size + 3;
			if (y < box.y + 12) return;
			page.drawText(ln, {
				x: box.x + pad,
				y,
				size,
				font,
				color
			});
		}
		y -= 4;
	};
	write(drug.classes.join(" / "), 9, fonts.bold, sage, 2);
	write("MOA  " + drug.moa, 8, fonts.regular, ink, 4);
	write("Dose  " + drug.dose, 8, fonts.regular, ink, 3);
	write("Pearl  " + drug.pearls[0], 8, fonts.regular, muted, 3);
	if (drug.bbw) write("BBW  " + drug.bbw, 8, fonts.regular, danger, 3);
}
async function exportCardsPdf(drugs) {
	if (!drugs.length) throw new Error("No cards to export.");
	const { iso, local, file } = stamp();
	const doc = await PDFDocument.create();
	doc.setTitle("Monograph flashcards");
	doc.setAuthor("Monograph");
	doc.setSubject(`Printed ${local} (${iso})`);
	doc.setCreationDate(new Date(iso));
	doc.setModificationDate(new Date(iso));
	const fonts = {
		regular: await doc.embedFont(StandardFonts.Helvetica),
		bold: await doc.embedFont(StandardFonts.HelveticaBold)
	};
	const A4 = [595.28, 841.89];
	const chunks = [];
	for (let i = 0; i < drugs.length; i += 6) {
		const slice = drugs.slice(i, i + 6);
		while (slice.length < 6) slice.push(void 0);
		chunks.push(slice);
	}
	let pageNo = 0;
	for (const group of chunks) {
		const front = doc.addPage(A4);
		pageNo++;
		const fRects = slotRects(A4[0], A4[1]);
		group.forEach((d, i) => drawFront(front, fonts, fRects[i], d));
		drawFooter(front, fonts, A4[0], `Front  ·  generated ${local}  ·  ${iso}`, `F${pageNo}`);
		const back = doc.addPage(A4);
		pageNo++;
		const bRects = slotRects(A4[0], A4[1]);
		[
			1,
			0,
			3,
			2,
			5,
			4
		].map((i) => group[i]).forEach((d, i) => drawBack(back, fonts, bRects[i], d));
		drawFooter(back, fonts, A4[0], `Back  ·  duplex long-edge  ·  ${iso}`, `B${pageNo}`);
	}
	const bytes = await doc.save();
	await save(bytes, `monograph-cards-${file}.pdf`);
	return bytes;
}
async function exportFormularyPdf(drugs = DRUGS) {
	const { iso, local, file } = stamp();
	const doc = await PDFDocument.create();
	doc.setTitle("Monograph formulary");
	doc.setAuthor("Monograph");
	doc.setSubject(`Snapshot generated ${local}`);
	doc.setKeywords([iso, "permanent timestamp"]);
	doc.setCreationDate(new Date(iso));
	doc.setModificationDate(new Date(iso));
	const fonts = {
		regular: await doc.embedFont(StandardFonts.Helvetica),
		bold: await doc.embedFont(StandardFonts.HelveticaBold)
	};
	const A4 = [595.28, 841.89];
	const footer = `Printed ${local}  |  ISO ${iso}  |  study aid, not medical advice`;
	const cover = doc.addPage(A4);
	cover.drawText("MONOGRAPH", {
		x: 54,
		y: 720,
		size: 11,
		font: fonts.regular,
		color: sage
	});
	cover.drawText("Formulary snapshot", {
		x: 54,
		y: 680,
		size: 28,
		font: fonts.bold,
		color: ink
	});
	cover.drawText(`${drugs.length} drugs`, {
		x: 54,
		y: 648,
		size: 12,
		font: fonts.regular,
		color: muted
	});
	cover.drawRectangle({
		x: 54,
		y: 560,
		width: 487,
		height: 64,
		color: rgb(.95, .96, .95)
	});
	cover.drawText("Generated (permanent)", {
		x: 66,
		y: 604,
		size: 8,
		font: fonts.regular,
		color: sage
	});
	cover.drawText(local, {
		x: 66,
		y: 586,
		size: 12,
		font: fonts.bold,
		color: ink
	});
	cover.drawText(iso, {
		x: 66,
		y: 570,
		size: 9,
		font: fonts.regular,
		color: muted
	});
	cover.drawText("This date and time are written into the file and will not change.", {
		x: 54,
		y: 530,
		size: 9,
		font: fonts.regular,
		color: muted
	});
	drawFooter(cover, fonts, A4[0], footer, "1");
	let page = doc.addPage(A4);
	let pageCount = 2;
	let y = 800;
	const ensure = (need) => {
		if (y - need < 48) {
			drawFooter(page, fonts, A4[0], footer, String(pageCount));
			page = doc.addPage(A4);
			pageCount++;
			y = 800;
		}
	};
	const heading = (t) => {
		ensure(28);
		y -= 8;
		page.drawText(ascii(t), {
			x: 54,
			y,
			size: 10,
			font: fonts.bold,
			color: sage
		});
		y -= 14;
	};
	const body = (label, text) => {
		const lines = wrap(fonts.regular, `${label}: ${text}`, 8.5, 487);
		ensure(lines.length * 11 + 4);
		for (const ln of lines) {
			page.drawText(ln, {
				x: 54,
				y,
				size: 8.5,
				font: fonts.regular,
				color: ink
			});
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
			page.drawText(ascii(d.system.toUpperCase()), {
				x: 54,
				y,
				size: 13,
				font: fonts.bold,
				color: ink
			});
			y -= 8;
			page.drawLine({
				start: {
					x: 54,
					y
				},
				end: {
					x: 541,
					y
				},
				thickness: .6,
				color: sage
			});
			y -= 16;
		}
		ensure(90);
		page.drawText(ascii(d.generic), {
			x: 54,
			y,
			size: 12,
			font: fonts.bold,
			color: ink
		});
		y -= 14;
		page.drawText(ascii(d.brands.join(" · ")), {
			x: 54,
			y,
			size: 8,
			font: fonts.regular,
			color: muted
		});
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
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function Button({ className, variant = "primary", ...props }) {
	const styles = {
		primary: "bg-accent text-accent-fg hover:opacity-90",
		ghost: "bg-transparent text-fg hover:bg-raised",
		outline: "border border-border-strong bg-transparent text-fg hover:bg-raised",
		danger: "bg-danger text-fg hover:opacity-90"
	}[variant];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		className: cn("inline-flex h-11 items-center justify-center gap-2 rounded-md px-4 text-sm font-medium transition-opacity disabled:cursor-not-allowed disabled:opacity-40", styles, className),
		...props
	});
}
function Input({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		className: cn("h-11 w-full rounded-md border border-border bg-raised px-3 text-sm text-fg outline-none placeholder:text-subtle focus:border-accent", className),
		...props
	});
}
function Textarea({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("min-h-28 w-full rounded-md border border-border bg-raised px-3 py-2 text-sm text-fg outline-none placeholder:text-subtle focus:border-accent", className),
		...props
	});
}
function Badge({ children, tone = "muted", className }) {
	const map = {
		muted: "bg-raised text-muted",
		accent: "bg-accent/15 text-accent",
		ok: "bg-ok/15 text-ok",
		warn: "bg-warn/15 text-warn",
		danger: "bg-danger/15 text-danger"
	}[tone];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("inline-flex items-center rounded-sm px-2 py-0.5 text-xs font-medium", map, className),
		children
	});
}
var TABS = [
	{
		id: "home",
		label: "Home",
		icon: House
	},
	{
		id: "library",
		label: "Library",
		icon: BookOpen
	},
	{
		id: "drill",
		label: "Drill",
		icon: Brain
	},
	{
		id: "cards",
		label: "Cards",
		icon: Layers
	},
	{
		id: "cases",
		label: "Cases",
		icon: Stethoscope
	},
	{
		id: "compare",
		label: "Compare",
		icon: GitCompare
	},
	{
		id: "interact",
		label: "Interact",
		icon: FlaskConical
	},
	{
		id: "tutor",
		label: "Tutor",
		icon: Sparkles
	}
];
function App() {
	const [tab, setTab] = (0, import_react.useState)("home");
	const [openId, setOpenId] = (0, import_react.useState)(null);
	const [more, setMore] = (0, import_react.useState)(false);
	const goDrug = (id) => {
		setOpenId(id);
		setTab("library");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto flex min-h-dvh max-w-6xl flex-col md:flex-row",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "hidden w-56 shrink-0 border-r border-border md:flex md:flex-col md:py-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "px-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-2xl tracking-tight",
							children: "Monograph"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs text-muted",
							children: "Boards pharmacology"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "mt-8 flex flex-col gap-1 px-3",
						children: TABS.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => setTab(t.id),
							className: cn("flex h-11 items-center gap-3 rounded-md px-3 text-sm", tab === t.id ? "bg-raised text-fg" : "text-muted hover:bg-raised/60 hover:text-fg"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(t.icon, { className: "size-4" }), t.label]
						}, t.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-auto px-6 text-xs text-subtle",
						children: "Study tool, not medical advice."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "min-w-0 flex-1 px-4 pb-24 pt-6 md:px-8 md:pb-10 md:pt-8",
				children: [
					tab === "home" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HomeView, {
						onTab: setTab,
						onDrug: goDrug
					}),
					tab === "library" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LibraryView, {
						openId,
						setOpenId
					}),
					tab === "drill" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DrillView, { onDrug: goDrug }),
					tab === "cards" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardsView, { onDrug: goDrug }),
					tab === "cases" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CasesView, { onDrug: goDrug }),
					tab === "compare" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CompareView, {}),
					tab === "interact" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InteractView, {}),
					tab === "tutor" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TutorView, {})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "fixed inset-x-0 bottom-0 z-20 border-t border-border bg-bg/95 backdrop-blur md:hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-5",
					children: [TABS.slice(0, 4).map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => setTab(t.id),
						className: cn("flex h-14 flex-col items-center justify-center gap-1 text-[11px]", tab === t.id ? "text-accent" : "text-muted"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(t.icon, { className: "size-4" }), t.label]
					}, t.id)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => setMore(true),
						className: cn("flex h-14 flex-col items-center justify-center gap-1 text-[11px]", more || [
							"cases",
							"compare",
							"interact",
							"tutor"
						].includes(tab) ? "text-accent" : "text-muted"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-4" }), "More"]
					})]
				})
			}),
			more && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "fixed inset-0 z-30 md:hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "absolute inset-0 bg-bg/70",
					onClick: () => setMore(false),
					"aria-label": "Close"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute inset-x-0 bottom-0 rounded-t-xl border-t border-border bg-surface p-4 pb-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-3 flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-medium",
							children: "More"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setMore(false),
							className: "grid size-11 place-items-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-2 gap-2",
						children: TABS.slice(4).map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => {
								setTab(t.id);
								setMore(false);
							},
							className: "flex h-14 items-center gap-2 rounded-lg border border-border bg-raised px-3 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(t.icon, { className: "size-4 text-accent" }), t.label]
						}, t.id))
					})]
				})]
			})
		]
	});
}
function Stat({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-lg border border-border bg-surface p-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs text-muted",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 font-mono text-2xl tabular-nums",
			children: value
		})]
	});
}
function HomeView({ onTab, onDrug }) {
	const { xp, streak, seen, correct, lastMisses, dueCards, byDrug } = useProgress();
	const due = dueCards().length;
	const acc = seen ? Math.round(correct / seen * 100) : 0;
	const weak = Object.entries(byDrug).filter(([, v]) => v.seen >= 2).map(([id, v]) => ({
		id,
		m: masteryOf(v.seen, v.correct)
	})).sort((a, b) => a.m - b.m).slice(0, 5);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs uppercase tracking-[0.18em] text-muted",
			children: "Today"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "mt-1 font-display text-4xl leading-tight tracking-tight md:text-5xl",
			children: "Stay fluent in the formulary."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-3 max-w-xl text-sm leading-relaxed text-muted",
			children: [DRUGS.length, " high-yield monographs, adaptive drills, SM-2 cards, clinical cases, an interaction desk, and a tutor. Built for PA, NP, pharmacy, and medical boards."]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-6 grid grid-cols-2 gap-3 md:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
					label: "XP",
					value: xp
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
					label: "Streak",
					value: `${streak}d`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
					label: "Accuracy",
					value: seen ? `${acc}%` : "—"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
					label: "Cards due",
					value: due
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-6 grid gap-3 md:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				onClick: () => onTab("drill"),
				className: "rounded-xl border border-border bg-surface p-5 text-left",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-medium",
					children: "Start a drill"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted",
					children: "10 mixed items from the full bank."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				onClick: () => onTab("cards"),
				className: "rounded-xl border border-border bg-surface p-5 text-left",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-medium",
					children: "Review cards"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-1 text-sm text-muted",
					children: [due, " due now. Grade 1–4 to schedule."]
				})]
			})]
		}),
		weak.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mt-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-sm font-medium",
				children: "Weak spots"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-3 divide-y divide-border rounded-xl border border-border",
				children: weak.map((w) => {
					const d = drugById(w.id);
					if (!d) return null;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => onDrug(w.id),
						className: "flex w-full items-center justify-between px-4 py-3 text-left",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm",
							children: d.generic
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-mono text-sm tabular-nums text-muted",
							children: [w.m, "%"]
						})]
					}) }, w.id);
				})
			})]
		}),
		lastMisses[0] && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			onClick: () => onDrug(lastMisses[0]),
			className: "mt-6 text-sm text-accent",
			children: ["Revisit last miss: ", drugById(lastMisses[0])?.generic]
		})
	] });
}
function LibraryView({ openId, setOpenId }) {
	const [q, setQ] = (0, import_react.useState)("");
	const [sys, setSys] = (0, import_react.useState)("All");
	const bookmarks = useProgress((s) => s.bookmarks);
	const [onlyBook, setOnlyBook] = (0, import_react.useState)(false);
	const list = (0, import_react.useMemo)(() => {
		let rows = searchDrugs(q);
		if (sys !== "All") rows = rows.filter((d) => d.system === sys);
		if (onlyBook) rows = rows.filter((d) => bookmarks.includes(d.id));
		return rows;
	}, [
		q,
		sys,
		onlyBook,
		bookmarks
	]);
	const open = openId ? drugById(openId) : null;
	if (open) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Monograph, {
		drug: open,
		onBack: () => setOpenId(null)
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display text-3xl tracking-tight",
			children: "Library"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-1 text-sm text-muted",
			children: [list.length, " monographs"]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExportBar, { drugs: list }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4 flex flex-col gap-3 sm:flex-row",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative flex-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-subtle" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					className: "pl-9",
					placeholder: "Search generic, brand, class, pearl…",
					value: q,
					onChange: (e) => setQ(e.target.value)
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: onlyBook ? "primary" : "outline",
				onClick: () => setOnlyBook((v) => !v),
				children: "Bookmarks"
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-3 flex gap-2 overflow-x-auto pb-1",
			children: ["All", ...SYSTEMS].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: () => setSys(s),
				className: cn("h-9 shrink-0 rounded-full px-3 text-xs", sys === s ? "bg-accent text-accent-fg" : "border border-border text-muted"),
				children: s
			}, s))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-4 divide-y divide-border rounded-xl border border-border",
			children: list.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				onClick: () => setOpenId(d.id),
				className: "flex w-full items-center justify-between gap-3 px-4 py-3 text-left",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-medium capitalize",
					children: d.generic
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs text-muted",
					children: [
						d.classes[0],
						" · ",
						d.system
					]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-4 text-subtle" })]
			}) }, d.id))
		})
	] });
}
function Monograph({ drug, onBack }) {
	const { bookmarks, toggleBookmark, notes, setNote } = useProgress();
	const marked = bookmarks.includes(drug.id);
	const ix = famousPairsFor(drug.id);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			onClick: onBack,
			className: "mb-4 inline-flex h-11 items-center gap-1 text-sm text-muted",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-4" }), " Library"]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-start justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-[0.16em] text-muted",
					children: drug.system
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-1 font-display text-4xl capitalize tracking-tight",
					children: drug.generic
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted",
					children: drug.brands.join(" · ")
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: () => toggleBookmark(drug.id),
				className: "grid size-11 place-items-center rounded-md border border-border",
				"aria-label": "Bookmark",
				children: marked ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookmarkCheck, { className: "size-4 text-accent" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bookmark, { className: "size-4" })
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4 flex flex-wrap gap-2",
			children: [drug.classes.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
				tone: "accent",
				children: c
			}, c)), drug.bbw && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
				tone: "danger",
				children: "Boxed warning"
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			title: "Mechanism",
			children: drug.moa
		}),
		drug.bbw && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			title: "Boxed warning",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-danger",
				children: drug.bbw
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			title: "Dosing",
			children: drug.dose
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, {
			title: "Indications",
			items: drug.indications
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, {
			title: "Adverse effects",
			items: drug.adrs
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, {
			title: "Contraindications",
			items: drug.contra
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, {
			title: "Monitor",
			items: drug.monitor
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, {
			title: "Pearls",
			items: drug.pearls
		}),
		ix.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mt-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-sm font-medium",
				children: "Classic interactions"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-2 space-y-2",
				children: ix.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-lg border border-border bg-surface p-3 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: p.severity === "danger" ? "text-danger" : p.severity === "warn" ? "text-warn" : "text-muted",
						children: p.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-muted",
						children: p.detail
					})]
				}, p.title))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mt-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-sm font-medium",
				children: "Your notes"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
				className: "mt-2",
				value: notes[drug.id] ?? "",
				onChange: (e) => setNote(drug.id, e.target.value),
				placeholder: "Mnemonics, attending quotes, misses…"
			})]
		})
	] });
}
function Section({ title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mt-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "text-sm font-medium",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-sm leading-relaxed text-muted",
			children
		})]
	});
}
function List({ title, items }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mt-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "text-sm font-medium",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-2 list-disc space-y-1 pl-5 text-sm text-muted",
			children: items.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: i }, i))
		})]
	});
}
function DrillView({ onDrug }) {
	const [system, setSystem] = (0, import_react.useState)("All");
	const [exam, setExam] = (0, import_react.useState)(null);
	const [i, setI] = (0, import_react.useState)(0);
	const [picked, setPicked] = (0, import_react.useState)(null);
	const [score, setScore] = (0, import_react.useState)(0);
	const record = useProgress((s) => s.record);
	const start = () => {
		const qs = makeExam(10, Date.now(), system === "All" ? void 0 : { system });
		setExam(qs);
		setI(0);
		setPicked(null);
		setScore(0);
	};
	(0, import_react.useEffect)(() => {
		const onKey = (e) => {
			if (!exam || picked !== null) return;
			const n = Number(e.key);
			if (n >= 1 && n <= 4) choose(n - 1);
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [
		exam,
		picked,
		i
	]);
	const choose = (idx) => {
		if (!exam || picked !== null) return;
		setPicked(idx);
		const q = exam[i];
		const ok = idx === q.answer;
		if (ok) setScore((s) => s + 1);
		record(q.drugId, ok);
	};
	if (!exam) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display text-3xl tracking-tight",
			children: "Drill"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-sm text-muted",
			children: "Ten mixed items. Keys 1–4 to answer."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-4 flex flex-wrap gap-2",
			children: ["All", ...SYSTEMS].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: () => setSystem(s),
				className: cn("h-9 rounded-full px-3 text-xs", system === s ? "bg-accent text-accent-fg" : "border border-border text-muted"),
				children: s
			}, s))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			className: "mt-6",
			onClick: start,
			children: "Begin"
		})
	] });
	if (i >= exam.length) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display text-3xl tracking-tight",
			children: "Session complete"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-3 font-mono text-4xl tabular-nums",
			children: [
				score,
				"/",
				exam.length
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			className: "mt-6",
			onClick: start,
			children: "Drill again"
		})
	] });
	const q = exam[i];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "text-xs text-muted",
			children: [
				i + 1,
				" / ",
				exam.length,
				" · ",
				q.type
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "mt-2 font-display text-2xl leading-snug tracking-tight",
			children: q.prompt
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-5 grid gap-2",
			children: q.choices.map((c, idx) => {
				const show = picked !== null;
				const right = idx === q.answer;
				const mine = idx === picked;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => choose(idx),
					className: cn("flex min-h-14 items-start gap-3 rounded-lg border px-4 py-3 text-left text-sm", !show && "border-border bg-surface hover:border-border-strong", show && right && "border-ok bg-ok/10", show && mine && !right && "border-danger bg-danger/10", show && !right && !mine && "border-border opacity-60"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mr-2 font-mono text-xs text-subtle",
						children: idx + 1
					}), c]
				}, c);
			})
		}),
		picked !== null && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4 rounded-lg border border-border bg-surface p-4 text-sm text-muted",
			children: [q.explain, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 flex gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: () => {
						setI((x) => x + 1);
						setPicked(null);
					},
					children: "Next"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					onClick: () => onDrug(q.drugId),
					children: "Open monograph"
				})]
			})]
		})
	] });
}
function ExportBar({ drugs }) {
	const [busy, setBusy] = (0, import_react.useState)(null);
	const [err, setErr] = (0, import_react.useState)(null);
	const run = async (kind) => {
		setErr(null);
		setBusy(kind);
		try {
			if (kind === "cards") await exportCardsPdf(drugs);
			else await exportFormularyPdf(drugs);
		} catch (e) {
			setErr(e instanceof Error ? e.message : "Export failed");
		} finally {
			setBusy(null);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-4 flex flex-col gap-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-2 sm:flex-row",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "outline",
					disabled: !!busy || drugs.length === 0,
					onClick: () => void run("cards"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileDown, { className: "size-4" }), busy === "cards" ? "Building…" : "Print cards (6 / A4)"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "outline",
					disabled: !!busy || drugs.length === 0,
					onClick: () => void run("book"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileDown, { className: "size-4" }), busy === "book" ? "Building…" : "Formulary PDF with date"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-subtle",
				children: "Cards: duplex, flip on the long edge, then cut the dashed lines. Formulary bakes the exact date and time into every page."
			}),
			err && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-danger",
				children: err
			})
		]
	});
}
function CardsView({ onDrug }) {
	const { cards, review, dueCards, bookmarks } = useProgress();
	const [i, setI] = (0, import_react.useState)(0);
	const [flip, setFlip] = (0, import_react.useState)(false);
	const [scope, setScope] = (0, import_react.useState)("all");
	const due = dueCards();
	const id = due[i];
	const drug = id ? drugById(id) : void 0;
	const exportSet = scope === "due" ? due.map((x) => drugById(x)).filter((d) => Boolean(d)) : scope === "book" ? bookmarks.map((x) => drugById(x)).filter((d) => Boolean(d)) : DRUGS;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display text-3xl tracking-tight",
			children: "Cards"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-1 text-sm text-muted",
			children: [
				due.length,
				" due · ",
				Object.keys(cards).length,
				" in deck"
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-3 flex flex-wrap gap-2",
			children: [
				["all", `All (${DRUGS.length})`],
				["due", `Due (${due.length})`],
				["book", `Bookmarks (${bookmarks.length})`]
			].map(([k, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: () => setScope(k),
				className: cn("h-9 rounded-full px-3 text-xs", scope === k ? "bg-accent text-accent-fg" : "border border-border text-muted"),
				children: label
			}, k))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExportBar, { drugs: exportSet }),
		!drug ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-6 text-sm text-muted",
			children: "Inbox clear. Export still works from All or Bookmarks."
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 text-xs text-muted",
				children: "Review"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: () => setFlip((f) => !f),
				className: "mt-2 flex min-h-56 w-full flex-col items-start justify-center rounded-xl border border-border bg-surface p-6 text-left",
				children: !flip ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-[0.16em] text-muted",
						children: drug.system
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 font-display text-3xl capitalize",
						children: drug.generic
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm text-subtle",
						children: "Tap to reveal"
					})
				] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-accent",
						children: drug.classes.join(" · ")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm leading-relaxed",
						children: drug.moa
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-muted",
						children: drug.pearls[0]
					}),
					drug.bbw && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-danger",
						children: drug.bbw
					})
				] })
			}),
			flip && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 grid grid-cols-4 gap-2",
				children: [
					1,
					2,
					3,
					4
				].map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: g === 1 ? "danger" : g === 4 ? "primary" : "outline",
					onClick: () => {
						review(drug.id, g);
						setFlip(false);
						setI(0);
					},
					children: g === 1 ? "Again" : g === 2 ? "Hard" : g === 3 ? "Good" : "Easy"
				}, g))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: () => onDrug(drug.id),
				className: "mt-4 text-sm text-muted",
				children: "Full monograph"
			})
		] })
	] });
}
function CasesView({ onDrug }) {
	const [i, setI] = (0, import_react.useState)(0);
	const [picked, setPicked] = (0, import_react.useState)(null);
	const v = VIGNETTES[i];
	const record = useProgress((s) => s.record);
	const choose = (idx) => {
		if (picked !== null) return;
		setPicked(idx);
		record(v.drugs[0], idx === v.answer);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "text-xs text-muted",
			children: [
				"Case ",
				i + 1,
				" / ",
				VIGNETTES.length,
				" · ",
				v.system
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "mt-2 font-display text-3xl tracking-tight",
			children: v.title
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-4 text-sm leading-relaxed text-muted",
			children: v.stem
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-4 text-sm font-medium",
			children: v.question
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-4 grid gap-2",
			children: v.choices.map((c, idx) => {
				const show = picked !== null;
				const right = idx === v.answer;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => choose(idx),
					className: cn("flex min-h-14 items-start gap-3 rounded-lg border px-4 py-3 text-left text-sm", !show && "border-border bg-surface", show && right && "border-ok bg-ok/10", show && idx === picked && !right && "border-danger bg-danger/10"),
					children: c
				}, c);
			})
		}),
		picked !== null && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4 rounded-lg border border-border bg-surface p-4 text-sm text-muted",
			children: [v.explanation, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 flex flex-wrap gap-2",
				children: [v.drugs.map((id) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					onClick: () => onDrug(id),
					children: drugById(id)?.generic
				}, id)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: () => {
						setI((x) => (x + 1) % VIGNETTES.length);
						setPicked(null);
					},
					children: "Next case"
				})]
			})]
		})
	] });
}
function CompareView() {
	const [a, setA] = (0, import_react.useState)(DRUGS[0].id);
	const [b, setB] = (0, import_react.useState)(DRUGS[1].id);
	const da = drugById(a);
	const db = drugById(b);
	const rows = [
		[
			"Class",
			da.classes.join(", "),
			db.classes.join(", ")
		],
		[
			"MOA",
			da.moa,
			db.moa
		],
		[
			"Dose",
			da.dose,
			db.dose
		],
		[
			"BBW",
			da.bbw ?? "—",
			db.bbw ?? "—"
		],
		[
			"Monitor",
			da.monitor.join("; "),
			db.monitor.join("; ")
		],
		[
			"Pearl",
			da.pearls[0],
			db.pearls[0]
		]
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display text-3xl tracking-tight",
			children: "Compare"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4 grid gap-3 sm:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
				className: "h-11 rounded-md border border-border bg-raised px-3 text-sm",
				value: a,
				onChange: (e) => setA(e.target.value),
				children: DRUGS.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
					value: d.id,
					children: d.generic
				}, d.id))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
				className: "h-11 rounded-md border border-border bg-raised px-3 text-sm",
				value: b,
				onChange: (e) => setB(e.target.value),
				children: DRUGS.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
					value: d.id,
					children: d.generic
				}, d.id))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-4 overflow-hidden rounded-xl border border-border",
			children: rows.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 border-b border-border last:border-0 md:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "bg-raised px-4 py-3 text-xs uppercase tracking-[0.12em] text-muted",
						children: r[0]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "px-4 py-3 text-sm",
						children: r[1]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "px-4 py-3 text-sm text-muted",
						children: r[2]
					})
				]
			}, r[0]))
		})
	] });
}
function InteractView() {
	const [a, setA] = (0, import_react.useState)("warfarin");
	const [b, setB] = (0, import_react.useState)("tmp-smx");
	const da = drugById(a);
	const db = drugById(b);
	const hits = da && db ? checkPair(da, db) : [];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display text-3xl tracking-tight",
			children: "Interaction desk"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-sm text-muted",
			children: "Educational pair rules for this bank — not a complete clinical database."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4 grid gap-3 sm:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
				className: "h-11 rounded-md border border-border bg-raised px-3 text-sm",
				value: a,
				onChange: (e) => setA(e.target.value),
				children: DRUGS.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
					value: d.id,
					children: d.generic
				}, d.id))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
				className: "h-11 rounded-md border border-border bg-raised px-3 text-sm",
				value: b,
				onChange: (e) => setB(e.target.value),
				children: DRUGS.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
					value: d.id,
					children: d.generic
				}, d.id))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-5 space-y-3",
			children: hits.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "rounded-xl border border-border bg-surface p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						tone: h.severity === "danger" ? "danger" : h.severity === "warn" ? "warn" : "muted",
						children: h.severity
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm font-medium",
						children: h.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted",
						children: h.detail
					})
				]
			}, h.title))
		})
	] });
}
function TutorView() {
	const [drugId, setDrugId] = (0, import_react.useState)("");
	const [q, setQ] = (0, import_react.useState)("");
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [err, setErr] = (0, import_react.useState)(null);
	const [msgs, setMsgs] = (0, import_react.useState)([]);
	const send = async () => {
		const question = q.trim();
		if (!question || busy) return;
		setBusy(true);
		setErr(null);
		setQ("");
		const next = [...msgs, {
			role: "user",
			content: question
		}];
		setMsgs(next);
		const res = await askTutor({ data: {
			question,
			drugId: drugId || void 0,
			history: next
		} });
		if (!res.ok) setErr(res.error);
		else setMsgs([...next, {
			role: "assistant",
			content: res.text
		}]);
		setBusy(false);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-[70dvh] flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-3xl tracking-tight",
				children: "Tutor"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted",
				children: "User-initiated. Grounded in this catalog. Not medical advice."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
				className: "mt-4 h-11 rounded-md border border-border bg-raised px-3 text-sm",
				value: drugId,
				onChange: (e) => setDrugId(e.target.value),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
					value: "",
					children: "Whole catalog"
				}), DRUGS.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
					value: d.id,
					children: ["Focus: ", d.generic]
				}, d.id))]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex-1 space-y-3",
				children: [
					msgs.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-subtle",
						children: "Ask why ACE inhibitors cough, or walk a warfarin INR jump."
					}),
					msgs.map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: cn("rounded-lg px-4 py-3 text-sm leading-relaxed", m.role === "user" ? "bg-raised" : "border border-border bg-surface text-muted"),
						children: m.content
					}, i)),
					busy && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-subtle",
						children: "Thinking…"
					}),
					err && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-danger",
						children: err
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					value: q,
					onChange: (e) => setQ(e.target.value),
					onKeyDown: (e) => {
						if (e.key === "Enter") send();
					},
					placeholder: "Ask a boards-style question"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: () => void send(),
					disabled: busy,
					children: "Ask"
				})]
			})
		]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(App, {});
}
//#endregion
export { Home as component };
