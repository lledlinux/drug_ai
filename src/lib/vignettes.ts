export type Vignette = {
  id: string;
  title: string;
  system: string;
  stem: string;
  question: string;
  choices: string[];
  answer: number;
  explanation: string;
  drugs: string[];
};

export const VIGNETTES: Vignette[] = [
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
      "Add HCTZ and continue the ACE inhibitor at a lower dose",
    ],
    answer: 1,
    explanation:
      "ACE inhibitors and ARBs are teratogens (fetal toxicity boxed warning). Stop immediately and use pregnancy-preferred agents (labetalol, nifedipine, methyldopa).",
    drugs: ["lisinopril", "losartan"],
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
      "Give tadalafil as a substitute antianginal",
    ],
    answer: 1,
    explanation:
      "PDE5 inhibitors plus any nitrate can cause catastrophic hypotension. Sildenafil/vardenafil: 24 h; tadalafil: 48 h. Manage ACS without nitrates (beta blocker, antiplatelet, anticoagulation, PCI).",
    drugs: ["nitroglycerin", "sildenafil"],
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
      "Switch tonight to glyburide 10 mg",
    ],
    answer: 1,
    explanation:
      "Hold metformin at the time of iodinated contrast when eGFR <45, and restart after 48 hours only if renal function is stable — lactic acidosis risk if AKI develops.",
    drugs: ["metformin"],
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
      "The antibiotic killed vitamin-K producing flora only — no CYP effect",
    ],
    answer: 2,
    explanation:
      "TMP-SMX is a classic CYP2C9 inhibitor (and protein-binding displacer). Warfarin effect shoots up within days. Prefer a non-interacting antibiotic for cystitis when possible.",
    drugs: ["warfarin", "tmp-smx"],
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
      "Switch to PO vancomycin for bacteremia",
    ],
    answer: 1,
    explanation:
      "Red-man syndrome is an infusion-rate histamine release, not IgE anaphylaxis. Slow the infusion (≥1–2 h for large doses) ± antihistamine. PO vancomycin is not absorbed and does not treat bacteremia.",
    drugs: ["vancomycin"],
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
      "HLA-B*1502 is the relevant allele for lamotrigine in all ancestries",
    ],
    answer: 1,
    explanation:
      "Lamotrigine boxed warning: SJS/TEN, strongly associated with rapid titration (and with valproate, which raises levels — you go even slower). Mucosal blistering = stop permanently.",
    drugs: ["lamotrigine", "valproate"],
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
      "Hyperosmolar state — give SQ insulin sliding scale",
    ],
    answer: 1,
    explanation:
      "SGLT2 inhibitors can cause euglycemic DKA: anion-gap metabolic acidosis + ketones with near-normal glucose. Treat as DKA (insulin + glucose). Counsel sick-day holds and 3-day pre-op hold.",
    drugs: ["empagliflozin", "metformin"],
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
      "Folic acid 1 mg daily caused the mucositis",
    ],
    answer: 0,
    explanation:
      "RA methotrexate is WEEKLY. Daily dosing is a classic fatal error (boxed). TMP-SMX further blocks folate and precipitates marrow failure. Leucovorin rescue + G-CSF as indicated.",
    drugs: ["methotrexate", "tmp-smx"],
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
      "Stop amiodarone and start lithium for rate control",
    ],
    answer: 1,
    explanation:
      "Amiodarone is 37% iodine and is cytotoxic to thyroid. Both hypo (more common) and hyper (type 1 iodine load vs type 2 thyroiditis) occur. Monitor TFTs, LFTs, CXR regularly.",
    drugs: ["amiodarone"],
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
      "Post-renal obstruction from papillary necrosis in one week",
    ],
    answer: 0,
    explanation:
      "Triple whammy: NSAID (↓ afferent PGE dilation) + ACEI/ARB (↓ efferent angiotensin constriction) + diuretic (↓ preload) → GFR collapse. Stop the NSAID, recheck Cr, counsel.",
    drugs: ["lisinopril", "furosemide", "ibuprofen"],
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
      "Start valproate on top for mood stabilization without changing Keppra",
    ],
    answer: 1,
    explanation:
      "Levetiracetam's signature toxicity is psychiatric: irritability, depression, rarely psychosis. It has almost no CYP interactions, which is why it is used — but behavior is the tradeoff. Switch if severe.",
    drugs: ["levetiracetam"],
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
      "Use 2.5 mg BID because of the valve",
    ],
    answer: 1,
    explanation:
      "DOACs are contraindicated for mechanical valves. RE-ALIGN (dabigatran) was stopped for thrombosis and bleeding. Vitamin K antagonist with INR 2.5–3.5 (mitral) remains standard.",
    drugs: ["apixaban", "warfarin"],
  },
];
