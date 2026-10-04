//#region node_modules/.nitro/vite/services/ssr/assets/catalog-C_WiOTXl.js
var SYSTEMS = [
	"Cardiovascular",
	"Endocrine",
	"Infectious",
	"Neuropsych",
	"Pulmonary",
	"GI",
	"Pain",
	"Heme",
	"Renal / GU",
	"Immune"
];
var DRUGS = [
	{
		id: "lisinopril",
		generic: "lisinopril",
		brands: ["Prinivil", "Zestril"],
		system: "Cardiovascular",
		classes: ["ACE inhibitor"],
		moa: "Blocks ACE → ↓ angiotensin II and aldosterone; ↑ bradykinin.",
		indications: [
			"HTN",
			"HFrEF",
			"post-MI",
			"diabetic nephropathy"
		],
		dose: "HTN 10–40 mg daily; HF start 2.5–5 mg, target 20–40 mg.",
		bbw: "Fetal toxicity — stop in pregnancy.",
		adrs: [
			"dry cough",
			"hyperkalemia",
			"angioedema",
			"↑ Cr after start"
		],
		contra: [
			"pregnancy",
			"bilateral RAS",
			"angioedema history",
			"aliskiren in DM"
		],
		monitor: [
			"BP",
			"K",
			"creatinine 1–2 weeks after start/uptitrate"
		],
		pearls: ["Cough from bradykinin — switch to ARB.", "Rise in Cr ≤30% often acceptable."],
		tags: [
			"RAAS",
			"K-sparing-risk",
			"pregnancy-X"
		]
	},
	{
		id: "losartan",
		generic: "losartan",
		brands: ["Cozaar"],
		system: "Cardiovascular",
		classes: ["ARB"],
		moa: "AT1 receptor antagonist — same RAAS block without bradykinin.",
		indications: [
			"HTN",
			"HFrEF ACE-intolerant",
			"diabetic nephropathy"
		],
		dose: "25–100 mg daily.",
		bbw: "Fetal toxicity.",
		adrs: [
			"hyperkalemia",
			"↑ Cr",
			"dizziness"
		],
		contra: ["pregnancy", "bilateral RAS"],
		monitor: [
			"BP",
			"K",
			"Cr"
		],
		pearls: ["No cough. Still angioedema risk, lower than ACEI."],
		tags: [
			"RAAS",
			"K-sparing-risk",
			"pregnancy-X"
		]
	},
	{
		id: "metoprolol",
		generic: "metoprolol tartrate / succinate",
		brands: ["Lopressor", "Toprol-XL"],
		system: "Cardiovascular",
		classes: ["Beta blocker", "β1-selective"],
		moa: "Selective β1 antagonism → ↓ HR, contractility, renin.",
		indications: [
			"HFrEF (succinate)",
			"angina",
			"post-MI",
			"rate control AF",
			"HTN"
		],
		dose: "Succinate HF 12.5–200 mg daily; tartrate 25–100 mg BID.",
		adrs: [
			"bradycardia",
			"fatigue",
			"depression",
			"mask hypoglycemia"
		],
		contra: [
			"decompensated shock",
			"severe bradycardia",
			"2nd/3rd AV block without pacer"
		],
		monitor: [
			"HR",
			"BP",
			"signs of decompensation"
		],
		pearls: ["Succinate (XL) is the HF evidence-based form.", "Do not stop abruptly."],
		tags: ["rate-control", "bradycardia-risk"]
	},
	{
		id: "carvedilol",
		generic: "carvedilol",
		brands: ["Coreg"],
		system: "Cardiovascular",
		classes: ["Beta blocker", "α1/β nonselective"],
		moa: "Nonselective β + α1 block → rate control plus vasodilation.",
		indications: [
			"HFrEF",
			"post-MI LV dysfunction",
			"HTN"
		],
		dose: "3.125 mg BID → target 25 mg BID (<85 kg) or 50 mg BID.",
		adrs: [
			"hypotension",
			"bradycardia",
			"dizziness",
			"weight gain"
		],
		contra: [
			"asthma/severe COPD",
			"decompensated HF",
			"severe bradycardia"
		],
		monitor: [
			"HR",
			"BP",
			"weight"
		],
		pearls: ["Take with food to blunt orthostasis.", "Preferred if HTN + HFrEF."],
		tags: ["rate-control", "bradycardia-risk"]
	},
	{
		id: "amlodipine",
		generic: "amlodipine",
		brands: ["Norvasc"],
		system: "Cardiovascular",
		classes: ["DHP CCB"],
		moa: "L-type Ca channel block in vascular smooth muscle → vasodilation.",
		indications: ["HTN", "chronic stable angina"],
		dose: "2.5–10 mg daily.",
		adrs: [
			"peripheral edema",
			"flushing",
			"gingival hyperplasia"
		],
		contra: ["severe hypotension"],
		monitor: ["BP", "edema"],
		pearls: ["Edema is capillary, not volume — diuretics help little.", "Safe in HFrEF vs non-DHP."],
		tags: ["vasodilator"]
	},
	{
		id: "diltiazem",
		generic: "diltiazem",
		brands: ["Cardizem", "Tiazac"],
		system: "Cardiovascular",
		classes: ["Non-DHP CCB"],
		moa: "Cardiac + vascular L-type Ca block → ↓ HR and AV conduction.",
		indications: [
			"rate control AF",
			"HTN",
			"SVT",
			"angina"
		],
		dose: "IR 30–90 mg QID; CD 120–360 mg daily.",
		adrs: [
			"bradycardia",
			"constipation",
			"edema",
			"AV block"
		],
		contra: [
			"HFrEF",
			"sick sinus",
			"combo with IV beta blocker"
		],
		monitor: [
			"HR",
			"BP",
			"ECG"
		],
		pearls: ["Avoid stacking with beta blockers — profound bradycardia.", "CYP3A4 inhibitor."],
		tags: [
			"rate-control",
			"bradycardia-risk",
			"cyp3a4-inhib"
		]
	},
	{
		id: "furosemide",
		generic: "furosemide",
		brands: ["Lasix"],
		system: "Cardiovascular",
		classes: ["Loop diuretic"],
		moa: "NKCC2 block in thick ascending limb.",
		indications: [
			"volume overload HF",
			"edema",
			"hypercalcemia adjunct"
		],
		dose: "20–80 mg PO; IV 20–40 mg; ceiling varies with CKD.",
		adrs: [
			"hypokalemia",
			"hypomagnesemia",
			"ototoxicity",
			"contraction alkalosis"
		],
		contra: ["anuria", "sulfa severe allergy (relative)"],
		monitor: [
			"K",
			"Mg",
			"Cr",
			"weight",
			"I/O"
		],
		pearls: ["40 mg PO ≈ 20 mg IV.", "If resistant, add thiazide sequentially."],
		tags: ["K-wasting", "ototoxic"]
	},
	{
		id: "hctz",
		generic: "hydrochlorothiazide",
		brands: ["Microzide"],
		system: "Cardiovascular",
		classes: ["Thiazide diuretic"],
		moa: "NCC block in DCT.",
		indications: [
			"HTN",
			"mild edema",
			"nephrolithiasis Ca stones"
		],
		dose: "12.5–25 mg daily (HTN). Little extra BP >25 mg.",
		adrs: [
			"hyponatremia",
			"hypokalemia",
			"hyperuricemia",
			"hyperglycemia",
			"↑ Ca"
		],
		contra: ["anuria", "severe hyponatremia history"],
		monitor: [
			"Na",
			"K",
			"glucose",
			"uric acid"
		],
		pearls: ["Chlorthalidone has more outcome data than HCTZ."],
		tags: ["K-wasting"]
	},
	{
		id: "spironolactone",
		generic: "spironolactone",
		brands: ["Aldactone"],
		system: "Cardiovascular",
		classes: ["MRA", "K-sparing diuretic"],
		moa: "Mineralocorticoid receptor antagonist.",
		indications: [
			"HFrEF",
			"resistant HTN",
			"ascites",
			"hyperaldosteronism"
		],
		dose: "HF 12.5–25 mg daily; ascites 100–400 mg.",
		adrs: [
			"hyperkalemia",
			"gynecomastia",
			"menstrual irregularity"
		],
		contra: [
			"hyperK",
			"Addison",
			"eplerenone if gynecomastia needed"
		],
		monitor: ["K", "Cr at 3 and 7 days then monthly ×3"],
		pearls: ["RALES: mortality benefit in HFrEF.", "Hold if K >5.0–5.5."],
		tags: ["K-sparing-risk", "RAAS"]
	},
	{
		id: "amiodarone",
		generic: "amiodarone",
		brands: ["Pacerone", "Cordarone"],
		system: "Cardiovascular",
		classes: ["Class III antiarrhythmic"],
		moa: "K (and Na/Ca/β) channel block; prolongs APD/QT.",
		indications: [
			"AF rhythm control",
			"VT/VF",
			"shock-refractory VF"
		],
		dose: "Load 6–10 g then 200–400 mg daily.",
		bbw: "Pulmonary, hepatic, and proarrhythmic toxicity.",
		adrs: [
			"thyroid dysfx",
			"pulmonary fibrosis",
			"hepatotoxicity",
			"corneal deposits",
			"blue-gray skin",
			"bradycardia"
		],
		contra: [
			"iodine hypersensitivity",
			"2nd/3rd AV block without pacer",
			"cardiogenic shock"
		],
		monitor: [
			"TFTs, LFTs, CXR q6–12mo",
			"ECG",
			"PFTs if symptoms",
			"eye exam"
		],
		pearls: ["Huge Vd, t½ weeks.", "Raises INR with warfarin; ↓ digoxin dose 50%."],
		tags: [
			"qt",
			"cyp-inhib",
			"warfarin-boost",
			"thyroid"
		]
	},
	{
		id: "digoxin",
		generic: "digoxin",
		brands: ["Lanoxin"],
		system: "Cardiovascular",
		classes: ["Cardiac glycoside"],
		moa: "Na/K-ATPase block → ↑ inotropy; ↑ vagal tone → ↓ AV conduction.",
		indications: ["HFrEF rate/symptom adjunct", "AF rate control"],
		dose: "0.125–0.25 mg daily; lower in CKD/elderly.",
		adrs: [
			"arrhythmias",
			"xanthopsia",
			"N/V",
			"confusion"
		],
		contra: ["WPW + AF", "high-grade AV block"],
		monitor: [
			"level 0.5–0.9 ng/mL HF",
			"K",
			"Cr",
			"HR"
		],
		pearls: ["Hypokalemia potentiates toxicity.", "Digibind for life-threatening tox."],
		tags: ["bradycardia-risk", "narrow-index"]
	},
	{
		id: "nitroglycerin",
		generic: "nitroglycerin",
		brands: ["Nitrostat", "Nitro-Dur"],
		system: "Cardiovascular",
		classes: ["Nitrate"],
		moa: "NO donor → venodilation (preload ↓) ± coronary dilation.",
		indications: [
			"angina",
			"ACS",
			"flash pulmonary edema"
		],
		dose: "SL 0.4 mg q5min ×3; patch 0.2–0.8 mg/h with nitrate-free interval.",
		adrs: [
			"headache",
			"hypotension",
			"reflex tachycardia"
		],
		contra: [
			"PDE5 inhibitors within 24–48h",
			"RV infarct",
			"severe AS",
			"SBP <90"
		],
		monitor: ["BP", "chest pain"],
		pearls: ["Need 10–14 h nitrate-free window to prevent tolerance."],
		tags: ["pde5-fatal", "hypotension"]
	},
	{
		id: "atorvastatin",
		generic: "atorvastatin",
		brands: ["Lipitor"],
		system: "Cardiovascular",
		classes: ["HMG-CoA reductase inhibitor"],
		moa: "HMG-CoA reductase block → ↑ LDL receptors.",
		indications: [
			"ASCVD",
			"LDL lowering",
			"primary prevention high risk"
		],
		dose: "10–80 mg daily; high-intensity 40–80 mg.",
		adrs: [
			"myalgias",
			"↑ LFTs",
			"rare rhabdo",
			"new DM (small)"
		],
		contra: ["active liver disease", "pregnancy"],
		monitor: [
			"lipids 4–12 wk",
			"CK if myalgias",
			"LFTs if symptoms"
		],
		pearls: ["High-intensity: atorva 40–80, rosuva 20–40.", "Avoid gemfibrozil combo."],
		tags: ["cyp3a4-sub", "myopathy"]
	},
	{
		id: "clopidogrel",
		generic: "clopidogrel",
		brands: ["Plavix"],
		system: "Heme",
		classes: ["P2Y12 inhibitor"],
		moa: "Irreversible P2Y12 ADP receptor block on platelets.",
		indications: [
			"ACS",
			"post-stent DAPT",
			"stroke/TIA secondary prevention"
		],
		dose: "Load 300–600 mg then 75 mg daily.",
		bbw: "Prodrug — CYP2C19 poor metabolizers have reduced effect.",
		adrs: [
			"bleeding",
			"TTP (rare)",
			"rash"
		],
		contra: ["active bleeding"],
		monitor: ["bleeding", "CBC if concern"],
		pearls: ["Omeprazole may blunt activation; prefer pantoprazole if PPI needed."],
		tags: [
			"bleed",
			"prodrug",
			"cyp2c19"
		]
	},
	{
		id: "aspirin",
		generic: "aspirin",
		brands: ["Bayer", "Ecotrin"],
		system: "Heme",
		classes: ["Antiplatelet", "NSAID"],
		moa: "Irreversible COX-1 → ↓ TXA2.",
		indications: [
			"ACS",
			"secondary ASCVD prevention",
			"post-stent",
			"Kawasaki"
		],
		dose: ["81 mg daily prevention", "162–325 mg ACS chew"].join("; "),
		adrs: [
			"GI bleed",
			"tinnitus high dose",
			"Reye in kids with viral illness"
		],
		contra: [
			"active GI bleed",
			"children with viral illness",
			"severe asthma triad"
		],
		monitor: ["bleeding", "Hb if chronic use"],
		pearls: ["Hold 7 days pre-op if possible.", "Not for primary prevention in low-risk."],
		tags: ["bleed", "nsaid"]
	},
	{
		id: "warfarin",
		generic: "warfarin",
		brands: ["Coumadin", "Jantoven"],
		system: "Heme",
		classes: ["VKORC1 inhibitor"],
		moa: "Blocks vit K epoxide reductase → ↓ II, VII, IX, X, protein C/S.",
		indications: [
			"AF (valvular)",
			"mechanical valve",
			"VTE",
			"APS"
		],
		dose: "Typical 2–5 mg daily; INR-guided.",
		bbw: "Major or fatal bleeding.",
		adrs: [
			"bleeding",
			"skin necrosis",
			"purple toe",
			"teratogen"
		],
		contra: [
			"pregnancy (except mechanical valve some cases)",
			"active bleed",
			"nonadherence"
		],
		monitor: ["INR 2–3 most; 2.5–3.5 mechanical mitral"],
		pearls: ["Bridge with heparin if high risk.", "Antibiotics, amiodarone, metronidazole raise INR."],
		tags: [
			"bleed",
			"narrow-index",
			"cyp2c9",
			"vitK"
		]
	},
	{
		id: "apixaban",
		generic: "apixaban",
		brands: ["Eliquis"],
		system: "Heme",
		classes: ["DOAC", "factor Xa inhibitor"],
		moa: "Direct factor Xa inhibition.",
		indications: [
			"NVAF",
			"VTE treat/prevent",
			"post-op ortho"
		],
		dose: "5 mg BID; 2.5 mg BID if ≥2 of: age ≥80, wt ≤60 kg, Cr ≥1.5.",
		bbw: "Premature stop → thrombotic events; epidural hematoma risk.",
		adrs: ["bleeding", "anemia"],
		contra: [
			"mechanical valves",
			"APS (avoid)",
			"active bleed",
			"pregnancy preferred LMWH"
		],
		monitor: [
			"Cr",
			"CBC",
			"no routine anti-Xa for dose"
		],
		pearls: ["Andexanet alfa reversal.", "Fewer ICH than warfarin."],
		tags: ["bleed", "doac"]
	},
	{
		id: "heparin",
		generic: "unfractionated heparin",
		brands: ["UFH"],
		system: "Heme",
		classes: ["Antithrombin enhancer"],
		moa: "Potentiates ATIII → inhibits IIa and Xa.",
		indications: [
			"ACS",
			"VTE",
			"bridge",
			"intraop anticoagulation"
		],
		dose: "Bolus 80 u/kg then 18 u/kg/h VTE; ACS protocols vary. aPTT/anti-Xa guided.",
		adrs: [
			"bleeding",
			"HIT",
			"osteoporosis long-term",
			"↑ K"
		],
		contra: ["HIT history", "uncontrolled bleed"],
		monitor: [
			"aPTT or anti-Xa q6h",
			"platelets 2–3×/wk",
			"K"
		],
		pearls: ["Protamine reversal.", "HIT: drop >50% platelets days 5–10."],
		tags: ["bleed", "hit"]
	},
	{
		id: "enoxaparin",
		generic: "enoxaparin",
		brands: ["Lovenox"],
		system: "Heme",
		classes: ["LMWH"],
		moa: "ATIII-mediated Xa > IIa inhibition.",
		indications: [
			"VTE",
			"ACS",
			"bridge",
			"pregnancy VTE"
		],
		dose: "1 mg/kg SQ BID or 1.5 mg/kg daily; CrCl <30: 1 mg/kg daily.",
		bbw: "Spinal/epidural hematoma.",
		adrs: [
			"bleeding",
			"HIT (less than UFH)",
			"injection hematoma"
		],
		contra: ["HIT", "active bleed"],
		monitor: [
			"Cr",
			"anti-Xa in pregnancy/obesity/CKD",
			"platelets"
		],
		pearls: ["More predictable than UFH.", "Hold 12–24 h before neuraxial."],
		tags: ["bleed", "hit"]
	},
	{
		id: "metformin",
		generic: "metformin",
		brands: ["Glucophage"],
		system: "Endocrine",
		classes: ["Biguanide"],
		moa: "↓ hepatic gluconeogenesis; ↑ insulin sensitivity.",
		indications: [
			"T2DM first-line",
			"PCOS (off-label)",
			"prediabetes"
		],
		dose: "500–1000 mg BID with meals; max 2000–2550 mg. XR better GI.",
		bbw: "Lactic acidosis — rare, risk in hypoxia/CKD.",
		adrs: [
			"diarrhea",
			"B12 deficiency",
			"metallic taste"
		],
		contra: [
			"eGFR <30",
			"acute decompensated HF/hypoxia",
			"contrast hold if eGFR <45"
		],
		monitor: [
			"A1c",
			"eGFR",
			"B12 q1–2y"
		],
		pearls: ["Hold 48 h after iodinated contrast if CKD.", "Weight-neutral/loss."],
		tags: ["egfr", "contrast"]
	},
	{
		id: "empagliflozin",
		generic: "empagliflozin",
		brands: ["Jardiance"],
		system: "Endocrine",
		classes: ["SGLT2 inhibitor"],
		moa: "Blocks proximal tubule SGLT2 → glycosuria, natriuresis.",
		indications: [
			"T2DM",
			"HFrEF ± DM",
			"CKD",
			"HFpEF"
		],
		dose: "10 mg daily; 25 mg DM if needed.",
		adrs: [
			"genital mycotic infx",
			"volume depletion",
			"euglycemic DKA",
			"Fournier rare"
		],
		contra: [
			"T1DM (DKA risk)",
			"dialysis",
			"eGFR too low per label for glycemic use"
		],
		monitor: [
			"volume",
			"eGFR",
			"ketones if ill"
		],
		pearls: ["Cardiorenal benefit independent of A1c.", "Hold 3 days pre-op to avoid euglycemic DKA."],
		tags: ["dka-risk", "volume"]
	},
	{
		id: "semaglutide",
		generic: "semaglutide",
		brands: [
			"Ozempic",
			"Wegovy",
			"Rybelsus"
		],
		system: "Endocrine",
		classes: ["GLP-1 RA"],
		moa: "GLP-1 receptor agonist → insulin ↑, glucagon ↓, delayed gastric emptying, satiety.",
		indications: [
			"T2DM",
			"weight",
			"ASCVD risk reduction"
		],
		dose: "Ozempic 0.25 → 1–2 mg weekly; Wegovy to 2.4 mg.",
		bbw: "Thyroid C-cell tumors in rodents — personal/family MTC or MEN2.",
		adrs: [
			"nausea",
			"gallbladder",
			"rare pancreatitis",
			"retinopathy flare if rapid A1c drop"
		],
		contra: ["MTC/MEN2", "pregnancy for weight"],
		monitor: [
			"GI tolerance",
			"A1c",
			"retinopathy if existing"
		],
		pearls: ["Titrate slowly.", "Hold peri-op for aspiration risk."],
		tags: ["incretin", "delayed-emptying"]
	},
	{
		id: "insulin-glargine",
		generic: "insulin glargine",
		brands: [
			"Lantus",
			"Basaglar",
			"Toujeo"
		],
		system: "Endocrine",
		classes: ["Long-acting insulin"],
		moa: "Basal insulin analog; precipitate at pH 7.4 → slow release.",
		indications: ["T1DM", "T2DM basal"],
		dose: "T2DM start 10 u or 0.1–0.2 u/kg nightly; titrate to FBG.",
		adrs: [
			"hypoglycemia",
			"weight gain",
			"lipodystrophy"
		],
		contra: ["hypoglycemia"],
		monitor: [
			"FBG",
			"A1c",
			"hypoglycemia logs"
		],
		pearls: ["Do not mix in same syringe with other insulins.", "Toujeo is U-300."],
		tags: ["hypoglycemia"]
	},
	{
		id: "insulin-lispro",
		generic: "insulin lispro",
		brands: ["Humalog", "Admelog"],
		system: "Endocrine",
		classes: ["Rapid-acting insulin"],
		moa: "Prandial analog; onset ~15 min.",
		indications: [
			"meal coverage T1/T2",
			"correction",
			"pumps"
		],
		dose: "I:C ratio typically 1:10–15 starting; correction 1:50.",
		adrs: ["hypoglycemia", "weight gain"],
		contra: ["hypoglycemia"],
		monitor: ["pre/post meal glucose"],
		pearls: ["Give with first bite (or 15 min before).", "Hold if NPO."],
		tags: ["hypoglycemia"]
	},
	{
		id: "glipizide",
		generic: "glipizide",
		brands: ["Glucotrol"],
		system: "Endocrine",
		classes: ["Sulfonylurea"],
		moa: "Closes β-cell K-ATP → insulin release, glucose-independent.",
		indications: ["T2DM"],
		dose: "2.5–10 mg daily before breakfast; XL available.",
		adrs: ["hypoglycemia", "weight gain"],
		contra: [
			"T1DM",
			"sulfa severe (relative)",
			"G6PD caution"
		],
		monitor: ["glucose", "A1c"],
		pearls: ["Skip dose if skipping meal.", "Avoid in elderly if possible (Beers)."],
		tags: ["hypoglycemia"]
	},
	{
		id: "levothyroxine",
		generic: "levothyroxine",
		brands: ["Synthroid", "Levoxyl"],
		system: "Endocrine",
		classes: ["T4 replacement"],
		moa: "Synthetic T4; peripheral conversion to T3.",
		indications: ["hypothyroidism", "TSH suppression thyroid ca"],
		dose: "Full replace ~1.6 mcg/kg IBW; start 25–50 mcg elderly/CAD.",
		bbw: "Not for weight loss in euthyroid patients.",
		adrs: [
			"iatrogenic hyperthyroid",
			"AF",
			"bone loss if over-replaced"
		],
		contra: ["uncorrected adrenal insufficiency", "acute MI uncorrected"],
		monitor: ["TSH 6–8 wk after change", "take empty stomach"],
		pearls: ["Separate from Ca/Fe/PPI by 4 h.", "Increase 25–30% in pregnancy."],
		tags: ["narrow-index", "binding"]
	},
	{
		id: "prednisone",
		generic: "prednisone",
		brands: ["Deltasone"],
		system: "Immune",
		classes: ["Systemic corticosteroid"],
		moa: "Glucocorticoid receptor → anti-inflammatory gene transcription.",
		indications: [
			"autoimmune flares",
			"asthma/COPD exacerbation",
			"allergic",
			"adrenal insuff (phys dose)"
		],
		dose: "Burst 40–60 mg ×5 days; chronic lowest effective + taper.",
		adrs: [
			"hyperglycemia",
			"infection",
			"osteoporosis",
			"psychosis",
			"HPA suppression",
			"AVN"
		],
		contra: ["systemic fungal (relative)", "live vaccines on high dose"],
		monitor: [
			"glucose",
			"BP",
			"DEXA if chronic",
			"eye"
		],
		pearls: ["Stress-dose if suppressed HPA.", "Taper if >3 weeks."],
		tags: ["steroid", "infection-risk"]
	},
	{
		id: "amoxicillin",
		generic: "amoxicillin",
		brands: ["Amoxil"],
		system: "Infectious",
		classes: ["Aminopenicillin"],
		moa: "PBP bind → cell wall lysis.",
		indications: [
			"otitis",
			"strep pharyngitis",
			"sinusitis",
			"H. pylori combo",
			"endocarditis prophylaxis"
		],
		dose: "500–875 mg BID–TID; high-dose AOM 80–90 mg/kg/day divided.",
		adrs: [
			"rash",
			"diarrhea",
			"C. diff",
			"anaphylaxis"
		],
		contra: ["severe PCN allergy"],
		monitor: ["allergy", "diarrhea"],
		pearls: ["EBV + amox → morbilliform rash, not always true allergy."],
		tags: ["beta-lactam"]
	},
	{
		id: "amox-clav",
		generic: "amoxicillin-clavulanate",
		brands: ["Augmentin"],
		system: "Infectious",
		classes: ["Aminopenicillin + BLI"],
		moa: "Amox plus β-lactamase inhibitor.",
		indications: [
			"sinusitis",
			"bite wounds",
			"AOM failure",
			"COPD exacerbation",
			"diverticulitis outpatient"
		],
		dose: "875/125 mg BID; use 14:1 ratio to limit diarrhea.",
		adrs: [
			"diarrhea",
			"hepatitis (clavulanate)",
			"rash"
		],
		contra: ["severe PCN allergy", "history Augmentin hepatitis"],
		monitor: ["LFTs if prolonged"],
		pearls: ["Clavulanate drives GI toxicity — pick right formulation."],
		tags: ["beta-lactam"]
	},
	{
		id: "azithromycin",
		generic: "azithromycin",
		brands: ["Zithromax", "Z-Pak"],
		system: "Infectious",
		classes: ["Macrolide"],
		moa: "50S protein synthesis inhibitor.",
		indications: [
			"CAP atypical",
			"MAC",
			"chlamydia",
			"COPD exacerbation",
			"traveler diarrhea some"
		],
		dose: "500 mg day 1 then 250 mg ×4; chlamydia 1 g once.",
		adrs: [
			"QT prolongation",
			"GI",
			"ototoxicity high dose",
			"rare hepatotoxicity"
		],
		contra: ["history cholestatic jaundice with azithro"],
		monitor: ["ECG if other QT drugs", "LFTs"],
		pearls: ["CYP3A4 interactions less than erythro/clarithro.", "Growing resistance in strep."],
		tags: ["qt", "macrolide"]
	},
	{
		id: "ciprofloxacin",
		generic: "ciprofloxacin",
		brands: ["Cipro"],
		system: "Infectious",
		classes: ["Fluoroquinolone"],
		moa: "DNA gyrase / topo IV inhibition.",
		indications: [
			"pyelo",
			"complicated UTI",
			"prostatitis",
			"anthrax",
			"gram-neg including Pseudomonas"
		],
		dose: "250–750 mg BID; 400 mg IV q8–12h.",
		bbw: "Tendon rupture, peripheral neuropathy, CNS, myasthenia exacerbation.",
		adrs: [
			"QT",
			"C. diff",
			"aortic aneurysm risk",
			"dysglycemia"
		],
		contra: [
			"myasthenia",
			"pregnancy relative",
			"kids (exceptions)"
		],
		monitor: [
			"tendon symptoms",
			"glucose",
			"QTc"
		],
		pearls: ["Bind cations — separate from Ca/Fe/antacids.", "Avoid for simple cystitis if alternatives."],
		tags: [
			"qt",
			"tendon",
			"cation-bind",
			"c-diff"
		]
	},
	{
		id: "levofloxacin",
		generic: "levofloxacin",
		brands: ["Levaquin"],
		system: "Infectious",
		classes: ["Respiratory FQ"],
		moa: "DNA gyrase / topo IV. Better gram-pos/atypical than cipro.",
		indications: [
			"CAP",
			"pyelo",
			"sinusitis last-line",
			"skin"
		],
		dose: "500–750 mg daily.",
		bbw: "Same FQ boxed warnings.",
		adrs: [
			"tendinopathy",
			"QT",
			"CNS",
			"C. diff"
		],
		contra: ["myasthenia", "QTc very long"],
		monitor: [
			"tendon",
			"QTc",
			"glucose"
		],
		pearls: ["Respiratory FQ covers strep pneumo + atypicals."],
		tags: [
			"qt",
			"tendon",
			"cation-bind",
			"c-diff"
		]
	},
	{
		id: "vancomycin",
		generic: "vancomycin",
		brands: ["Vancocin"],
		system: "Infectious",
		classes: ["Glycopeptide"],
		moa: "D-ala-D-ala bind → cell wall.",
		indications: ["MRSA serious", "PO for C. diff"],
		dose: "IV 15–20 mg/kg q8–12h AUC-guided; PO 125 mg QID C. diff.",
		adrs: [
			"nephrotoxicity",
			"Red man (infusion)",
			"ototoxicity",
			"neutropenia"
		],
		contra: ["known hypersensitivity"],
		monitor: [
			"AUC/MIC or trough",
			"Cr",
			"infusion rate"
		],
		pearls: ["PO is not absorbed — only C. diff.", "Red man: slow infusion ± antihistamine, not true allergy."],
		tags: [
			"nephro",
			"mrsa",
			"c-diff-po"
		]
	},
	{
		id: "metronidazole",
		generic: "metronidazole",
		brands: ["Flagyl"],
		system: "Infectious",
		classes: ["Nitroimidazole"],
		moa: "Free radicals in anaerobes/protozoa.",
		indications: [
			"anaerobes",
			"C. diff alternative",
			"BV",
			"trichomonas",
			"H. pylori",
			"ameba"
		],
		dose: "500 mg TID; trich 2 g once or 500 BID ×7.",
		bbw: "Carcinogenic in animals.",
		adrs: [
			"disulfiram-like with EtOH",
			"metallic taste",
			"neuropathy prolonged",
			"↑ INR"
		],
		contra: ["first trimester relative for some indications", "alcohol"],
		monitor: ["neuropathy if >2 wk", "INR if warfarin"],
		pearls: ["Avoid alcohol during + 48–72 h after.", "Warfarin INR jump."],
		tags: [
			"warfarin-boost",
			"etoh",
			"anaerobe"
		]
	},
	{
		id: "tmp-smx",
		generic: "trimethoprim-sulfamethoxazole",
		brands: ["Bactrim", "Septra"],
		system: "Infectious",
		classes: ["Folate antagonist"],
		moa: "Sequential folate block (DHFR + dihydropteroate synthase).",
		indications: [
			"UTI",
			"PCP treat/ppx",
			"MRSA skin",
			"nocardia",
			"toxo ppx"
		],
		dose: "1 DS BID many infections; PCP 5 mg/kg TMP q6–8h; ppx 1 DS daily or TIW.",
		adrs: [
			"rash/SJS",
			"hyperK",
			"↑ Cr (pseudo + real)",
			"bone marrow",
			"photosensitivity"
		],
		contra: [
			"sulfa severe",
			"G6PD",
			"third trimester/neonates (kernicterus)",
			"methotrexate"
		],
		monitor: [
			"K",
			"CBC prolonged",
			"Cr",
			"rash"
		],
		pearls: ["Raises INR with warfarin.", "HyperK like a K-sparing diuretic."],
		tags: [
			"warfarin-boost",
			"K-sparing-risk",
			"sulfa",
			"photosens"
		]
	},
	{
		id: "doxycycline",
		generic: "doxycycline",
		brands: ["Vibramycin"],
		system: "Infectious",
		classes: ["Tetracycline"],
		moa: "30S protein synthesis inhibitor.",
		indications: [
			"atypical CAP",
			"Lyme",
			"RMSF",
			"chlamydia",
			"acne",
			"malaria ppx"
		],
		dose: "100 mg BID.",
		adrs: [
			"photosensitivity",
			"esophagitis",
			"pill esophagitis",
			"teeth in young children (less than tetra)"
		],
		contra: ["pregnancy", "children <8 except RMSF/Lyme where benefit wins"],
		monitor: ["sun protection", "sit upright 30 min"],
		pearls: ["Drug of choice RMSF even in kids.", "Separate from cations."],
		tags: ["photosens", "cation-bind"]
	},
	{
		id: "ceftriaxone",
		generic: "ceftriaxone",
		brands: ["Rocephin"],
		system: "Infectious",
		classes: ["3rd-gen cephalosporin"],
		moa: "PBP cell wall.",
		indications: [
			"CAP",
			"meningitis",
			"gonorrhea",
			"pyelo",
			"SBP",
			"Lyme neuro/carditis"
		],
		dose: "1–2 g daily; meningitis 2 g q12h; gonorrhea 500 mg IM once.",
		adrs: [
			"biliary sludging",
			"C. diff",
			"hemolysis rare"
		],
		contra: ["neonates with hyperbili", "Ca-containing IV in neonates"],
		monitor: ["allergy", "CBC prolonged"],
		pearls: ["No renal adjustment in most adults.", "Never mix with calcium in neonates."],
		tags: ["beta-lactam", "biliary"]
	},
	{
		id: "pip-tazo",
		generic: "piperacillin-tazobactam",
		brands: ["Zosyn"],
		system: "Infectious",
		classes: ["Antipseudomonal PCN + BLI"],
		moa: "Extended-spectrum PCN + β-lactamase inhibitor.",
		indications: [
			"intra-abdominal",
			"neutropenic fever",
			"HAP/VAP",
			"severe mixed"
		],
		dose: "3.375–4.5 g IV q6–8h; extended infusion often used.",
		adrs: [
			"AKI especially with vanco",
			"C. diff",
			"cytopenias"
		],
		contra: ["severe PCN allergy"],
		monitor: [
			"Cr",
			"Na (salt load)",
			"CBC"
		],
		pearls: ["Does not cover MRSA or atypicals.", "Vanco + Zosyn nephro additive."],
		tags: [
			"beta-lactam",
			"pseudo",
			"nephro"
		]
	},
	{
		id: "fluconazole",
		generic: "fluconazole",
		brands: ["Diflucan"],
		system: "Infectious",
		classes: ["Azole antifungal"],
		moa: "14-α-demethylase block → ergosterol ↓.",
		indications: [
			"candida",
			"crypto maintenance",
			"coccidiomycosis"
		],
		dose: "vaginal 150 mg once; systemic 200–800 mg daily.",
		adrs: [
			"QT",
			"hepatotoxicity",
			"CYP interactions"
		],
		contra: ["strong CYP3A4 substrates with QT", "pregnancy high dose"],
		monitor: [
			"LFTs",
			"QTc",
			"INR if warfarin"
		],
		pearls: ["Excellent CSF/urine.", "Warfarin and phenytoin levels rise."],
		tags: [
			"qt",
			"cyp-inhib",
			"warfarin-boost"
		]
	},
	{
		id: "acyclovir",
		generic: "acyclovir",
		brands: ["Zovirax"],
		system: "Infectious",
		classes: ["Nucleoside analog antiviral"],
		moa: "Viral thymidine kinase → chain terminator for HSV/VZV DNA pol.",
		indications: [
			"HSV",
			"VZV",
			"HSV encephalitis",
			"ppx immunocompromised"
		],
		dose: "oral 400 TID HSV; zoster 800 5×/day; IV 10 mg/kg IBW q8h encephalitis.",
		adrs: [
			"crystal nephropathy IV",
			"neurotoxicity in CKD",
			"GI"
		],
		contra: ["hypersensitivity"],
		monitor: ["Cr", "hydration with IV"],
		pearls: ["Adjust in CKD.", "Valacyclovir is prodrug with better oral BA."],
		tags: ["nephro", "hsv"]
	},
	{
		id: "oseltamivir",
		generic: "oseltamivir",
		brands: ["Tamiflu"],
		system: "Infectious",
		classes: ["Neuraminidase inhibitor"],
		moa: "Blocks influenza neuraminidase → virion release ↓.",
		indications: ["influenza treat/ppx"],
		dose: "75 mg BID ×5 treat; 75 daily ppx. Adjust CrCl <60.",
		adrs: [
			"nausea",
			"rare neuropsych in kids",
			"headache"
		],
		contra: ["severe hypersensitivity"],
		monitor: ["start within 48 h if outpatient; always if hospitalized/high risk"],
		pearls: ["Does not wait for test if high suspicion in high-risk."],
		tags: ["influenza"]
	},
	{
		id: "sertraline",
		generic: "sertraline",
		brands: ["Zoloft"],
		system: "Neuropsych",
		classes: ["SSRI"],
		moa: "SERT inhibition → ↑ synaptic serotonin.",
		indications: [
			"MDD",
			"PTSD",
			"OCD",
			"panic",
			"PMDD",
			"social anxiety"
		],
		dose: "50–200 mg daily.",
		bbw: "Suicidality in age ≤24 — monitor.",
		adrs: [
			"GI",
			"sexual",
			"hyponatremia/SIADH",
			"insomnia",
			"QT milder than citalopram"
		],
		contra: ["MAOIs within 14 d", "pimozide"],
		monitor: [
			"mood 1–2 wk",
			"Na elderly",
			"bleeding with NSAID/warfarin"
		],
		pearls: ["Preferred in pregnancy among SSRIs often.", "Washout before MAOI."],
		tags: [
			"serotonin",
			"bleed-mild",
			"siadh"
		]
	},
	{
		id: "fluoxetine",
		generic: "fluoxetine",
		brands: ["Prozac"],
		system: "Neuropsych",
		classes: ["SSRI"],
		moa: "SERT inhibition; long t½, norfluoxetine active.",
		indications: [
			"MDD",
			"OCD",
			"bulimia",
			"PMDD",
			"panic"
		],
		dose: "20–60 mg daily; 90 mg weekly form.",
		bbw: "Suicidality ≤24.",
		adrs: [
			"activation/insomnia",
			"sexual",
			"CYP2D6 inhibition"
		],
		contra: ["MAOI — need 5 week washout after fluoxetine"],
		monitor: ["activation", "drug interactions"],
		pearls: ["Long half-life = fewer discontinuation symptoms.", "CYP2D6 inhibitor (tamoxifen)."],
		tags: ["serotonin", "cyp2d6-inhib"]
	},
	{
		id: "venlafaxine",
		generic: "venlafaxine",
		brands: ["Effexor XR"],
		system: "Neuropsych",
		classes: ["SNRI"],
		moa: "SERT + NET inhibition (NET at higher doses).",
		indications: [
			"MDD",
			"GAD",
			"panic",
			"social anxiety",
			"pain adjunct"
		],
		dose: "37.5–225 mg XR daily.",
		bbw: "Suicidality ≤24.",
		adrs: [
			"HTN",
			"sweating",
			"discontinuation syndrome",
			"sexual"
		],
		contra: ["MAOI 14 d", "uncontrolled HTN caution"],
		monitor: [
			"BP",
			"mood",
			"taper slowly"
		],
		pearls: ["Nasty discontinuation — never stop cold."],
		tags: ["serotonin", "bp"]
	},
	{
		id: "bupropion",
		generic: "bupropion",
		brands: ["Wellbutrin", "Zyban"],
		system: "Neuropsych",
		classes: ["NDRI"],
		moa: "NE/DA reuptake inhibition; nicotinic antagonist.",
		indications: [
			"MDD",
			"seasonal",
			"smoking cessation"
		],
		dose: "XL 150–300 mg qAM.",
		bbw: "Suicidality ≤24.",
		adrs: [
			"insomnia",
			"seizures dose-related",
			"dry mouth",
			"anxiety"
		],
		contra: [
			"seizure disorder",
			"bulimia/anorexia",
			"abrupt EtOH/benzo withdrawal",
			"MAOI"
		],
		monitor: [
			"seizure risk",
			"BP",
			"mood"
		],
		pearls: ["Least sexual dysfunction.", "Avoid stacking with other seizure-threshold drugs."],
		tags: ["seizure-risk"]
	},
	{
		id: "lorazepam",
		generic: "lorazepam",
		brands: ["Ativan"],
		system: "Neuropsych",
		classes: ["Benzodiazepine"],
		moa: "GABA-A PAM — increases Cl current frequency.",
		indications: [
			"status epilepticus",
			"alcohol withdrawal",
			"acute anxiety",
			"chemo nausea adjunct"
		],
		dose: "0.5–2 mg PO; status 4 mg IV, repeat.",
		bbw: "Combo with opioids → respiratory depression; abuse/dependence.",
		adrs: [
			"sedation",
			"ataxia",
			"respiratory depression",
			"withdrawal seizures"
		],
		contra: ["acute narrow-angle glaucoma", "severe respiratory insufficiency"],
		monitor: ["respiratory status", "taper if prolonged"],
		pearls: ["LOT benzos (loraz, oxaz, temaz) safer in liver disease — no CYP oxidation."],
		tags: [
			"gaba",
			"resp-depress",
			"withdrawal"
		]
	},
	{
		id: "lithium",
		generic: "lithium",
		brands: ["Lithobid"],
		system: "Neuropsych",
		classes: ["Mood stabilizer"],
		moa: "Complex: IP3, GSK-3; unique antisuicide in bipolar.",
		indications: ["bipolar acute mania + maintenance", "adjunct MDD"],
		dose: "300 mg BID–TID; trough 0.6–1.2 mEq/L.",
		bbw: "Toxicity can occur at near-therapeutic levels.",
		adrs: [
			"tremor",
			"DI",
			"hypothyroid",
			"Ebstein anomaly",
			"weight",
			"leukocytosis"
		],
		contra: ["significant renal disease", "pregnancy 1st trimester relative"],
		monitor: [
			"level 5 days after change",
			"TSH",
			"Cr",
			"Ca",
			"pregnancy"
		],
		pearls: ["NSAIDs, ACEI, thiazides raise levels.", "Hold if dehydrating illness."],
		tags: [
			"narrow-index",
			"nsaid-level",
			"ebstein",
			"nsaids-up"
		]
	},
	{
		id: "valproate",
		generic: "valproic acid / divalproex",
		brands: ["Depakote"],
		system: "Neuropsych",
		classes: ["AED", "mood stabilizer"],
		moa: "↑ GABA, Na channel effects, T-type Ca.",
		indications: [
			"bipolar mania",
			"generalized epilepsy",
			"migraine ppx"
		],
		dose: "10–15 mg/kg, target 50–100 mcg/mL (125 mania).",
		bbw: "Hepatotoxicity, pancreatitis, fetal neural tube / decreased IQ.",
		adrs: [
			"weight",
			"tremor",
			"PCOS",
			"hyperammonemia",
			"alopecia"
		],
		contra: [
			"pregnancy for migraine",
			"urea cycle",
			"mitochondrial POLG"
		],
		monitor: [
			"LFTs",
			"CBC",
			"level",
			"ammonia if altered",
			"pregnancy test"
		],
		pearls: ["Highly teratogenic — avoid in people who can become pregnant if possible."],
		tags: [
			"teratogen",
			"hepatotoxic",
			"aed"
		]
	},
	{
		id: "lamotrigine",
		generic: "lamotrigine",
		brands: ["Lamictal"],
		system: "Neuropsych",
		classes: ["AED", "mood stabilizer"],
		moa: "Use-dependent Na channel block; glutamate release ↓.",
		indications: ["bipolar depression maintenance", "focal + generalized epilepsy"],
		dose: "Slow titration to 100–200 mg; half with valproate, double with inducers.",
		bbw: "SJS/TEN — slow titration mandatory.",
		adrs: [
			"rash",
			"aseptic meningitis rare",
			"insomnia"
		],
		contra: ["prior serious rash to lamotrigine"],
		monitor: ["rash especially first 8 wk", "restart titration if gap >5 days"],
		pearls: ["Best bipolar depression preventer among AEDS.", "OCPs lower levels."],
		tags: ["sjs", "aed"]
	},
	{
		id: "levetiracetam",
		generic: "levetiracetam",
		brands: ["Keppra"],
		system: "Neuropsych",
		classes: ["AED"],
		moa: "SV2A binding — modulates neurotransmitter release.",
		indications: ["focal and generalized seizures", "status adjunct"],
		dose: "500–1500 mg BID; IV 1:1.",
		adrs: [
			"irritability/psychosis",
			"somnolence",
			"SIADH rare"
		],
		contra: ["hypersensitivity"],
		monitor: ["mood/behavior", "Cr adjust"],
		pearls: ["Minimal CYP interactions — ICU favorite.", "Watch psychiatric history."],
		tags: ["aed", "psych-adr"]
	},
	{
		id: "phenytoin",
		generic: "phenytoin",
		brands: ["Dilantin"],
		system: "Neuropsych",
		classes: ["AED", "Na channel"],
		moa: "Use-dependent Na channel block.",
		indications: ["status (fosphenytoin)", "focal seizures"],
		dose: "Load 15–20 mg/kg; maintenance 300 mg/d; free + total levels.",
		bbw: ["IV rate >50 mg/min → hypotension/arrhythmia (fosphenytoin safer)."].join(""),
		adrs: [
			"gingival hyperplasia",
			"hirsutism",
			"osteomalacia",
			"SJS HLA-B*1502",
			"purple glove IV"
		],
		contra: ["HLA-B*1502 (carbamazepine/phenytoin)", "sinus brady/block"],
		monitor: [
			"level 10–20 total; free 1–2",
			"albumin",
			"CBC",
			"LFTs"
		],
		pearls: ["Zero-order kinetics — small dose jumps → toxicity.", "Induces CYP — OCPs fail."],
		tags: [
			"narrow-index",
			"cyp-inducer",
			"sjs",
			"aed"
		]
	},
	{
		id: "haloperidol",
		generic: "haloperidol",
		brands: ["Haldol"],
		system: "Neuropsych",
		classes: ["First-gen antipsychotic", "D2 antagonist"],
		moa: "Potent D2 block.",
		indications: [
			"schizophrenia",
			"acute agitation",
			"Tourette",
			"antiemetic (off)"
		],
		dose: "0.5–5 mg PO/IM; IV used in ICU with ECG.",
		bbw: "Increased mortality in dementia-related psychosis.",
		adrs: [
			"EPS",
			"NMS",
			"QT (IV)",
			"tardive dyskinesia",
			"prolactin"
		],
		contra: [
			"Parkinson disease",
			"Lewy body",
			"QTc very prolonged"
		],
		monitor: [
			"AIMS",
			"QTc IV",
			"NMS signs"
		],
		pearls: ["Diphenhydramine/benztropine for acute dystonia.", "Avoid in dementia if possible."],
		tags: [
			"qt",
			"eps",
			"nms",
			"dementia-bbw"
		]
	},
	{
		id: "olanzapine",
		generic: "olanzapine",
		brands: ["Zyprexa"],
		system: "Neuropsych",
		classes: ["Second-gen antipsychotic"],
		moa: "5HT2A/D2 antagonist.",
		indications: [
			"schizophrenia",
			"bipolar mania",
			"agitation"
		],
		dose: "5–20 mg qHS.",
		bbw: "Dementia-related psychosis mortality.",
		adrs: [
			"weight/metabolic",
			"sedation",
			"DRESS rare",
			"orthostasis"
		],
		contra: ["caution diabetes"],
		monitor: ["weight, A1c, lipids", "AIMS"],
		pearls: ["Worst metabolic among SGAs with clozapine.", "IM + benzo IM → excess sedation warning."],
		tags: ["metabolic", "dementia-bbw"]
	},
	{
		id: "quetiapine",
		generic: "quetiapine",
		brands: ["Seroquel"],
		system: "Neuropsych",
		classes: ["Second-gen antipsychotic"],
		moa: "5HT2A/D2; H1/α1 at low dose.",
		indications: [
			"schizophrenia",
			"bipolar",
			"adjunct MDD"
		],
		dose: "50–800 mg; sedation 25–100; antipsychotic ≥300.",
		bbw: "Dementia mortality; suicidality in antidepressant use.",
		adrs: [
			"sedation",
			"orthostasis",
			"metabolic",
			"cataracts rare",
			"QT"
		],
		contra: ["caution elderly fall risk"],
		monitor: ["metabolic panel", "orthostatics"],
		pearls: ["Low dose ≠ antipsychotic — mostly antihistamine."],
		tags: [
			"metabolic",
			"qt",
			"dementia-bbw"
		]
	},
	{
		id: "albuterol",
		generic: "albuterol",
		brands: ["ProAir", "Ventolin"],
		system: "Pulmonary",
		classes: ["SABA"],
		moa: "β2 agonist → bronchodilation.",
		indications: [
			"asthma rescue",
			"COPD rescue",
			"hyperK shift"
		],
		dose: "2 puffs q4–6h PRN; neb 2.5 mg; hyperK 10–20 mg neb.",
		adrs: [
			"tremor",
			"tachycardia",
			"hypokalemia",
			"hyperglycemia"
		],
		contra: ["severe tachycardia caution"],
		monitor: [
			"HR",
			"K if frequent nebs",
			"rescue use frequency"
		],
		pearls: [">2 canisters/month = uncontrolled — step up controller."],
		tags: ["beta-agonist", "K-shift"]
	},
	{
		id: "fluticasone-inh",
		generic: "fluticasone (inhaled)",
		brands: ["Flovent", "Arnuity"],
		system: "Pulmonary",
		classes: ["ICS"],
		moa: "Airway glucocorticoid → ↓ eosinophilic inflammation.",
		indications: ["asthma controller", "COPD if eos/exacerbations with LABA/LAMA"],
		dose: "MDI 88–880 mcg/day divided.",
		adrs: [
			"oral thrush",
			"dysphonia",
			"pneumonia in COPD",
			"rare adrenal if high dose"
		],
		contra: ["status as monotherapy for acute"],
		monitor: [
			"thrush",
			"growth in kids",
			"exacerbation rate"
		],
		pearls: ["Rinse and spit.", "Never ICS monotherapy in COPD."],
		tags: ["steroid-inh"]
	},
	{
		id: "tiotropium",
		generic: "tiotropium",
		brands: ["Spiriva"],
		system: "Pulmonary",
		classes: ["LAMA"],
		moa: "M3 muscarinic antagonist → bronchodilation.",
		indications: ["COPD maintenance", "asthma add-on (Respimat)"],
		dose: "HandiHaler 18 mcg daily; Respimat 2.5–5 mcg.",
		adrs: [
			"dry mouth",
			"urinary retention",
			"glaucoma if mist in eyes"
		],
		contra: ["severe allergy to ipratropium/atropine"],
		monitor: ["anticholinergic symptoms in elderly"],
		pearls: ["Foundation of COPD maintenance with LABA."],
		tags: ["anticholinergic"]
	},
	{
		id: "omeprazole",
		generic: "omeprazole",
		brands: ["Prilosec"],
		system: "GI",
		classes: ["PPI"],
		moa: "Irreversible H+/K+ ATPase block on parietal cells.",
		indications: [
			"GERD",
			"PUD",
			"H. pylori combo",
			"Zollinger-Ellison",
			"GI bleed risk"
		],
		dose: "20–40 mg daily before meal.",
		adrs: [
			"C. diff",
			"hypoMg",
			"B12",
			"fracture long-term",
			"interstitial nephritis"
		],
		contra: ["rilpivirine"],
		monitor: ["Mg long-term", "indication for deprescribe"],
		pearls: ["CYP2C19 — may blunt clopidogrel.", "Take 30 min before breakfast."],
		tags: [
			"cyp2c19",
			"c-diff",
			"clopidogrel-blunt"
		]
	},
	{
		id: "ondansetron",
		generic: "ondansetron",
		brands: ["Zofran"],
		system: "GI",
		classes: ["5HT3 antagonist"],
		moa: "Central and peripheral 5-HT3 block.",
		indications: [
			"chemo nausea",
			"post-op",
			"gastroenteritis"
		],
		dose: "4–8 mg q8h; chemo 8–16 mg.",
		adrs: [
			"QT",
			"constipation",
			"headache",
			"serotonin syndrome rare with other serotonergics"
		],
		contra: ["congenital long QT", "apomorphine"],
		monitor: ["QTc if high dose/IV + other QT drugs"],
		pearls: ["Single IV doses >16 mg no longer recommended for QT."],
		tags: ["qt", "serotonin-mild"]
	},
	{
		id: "morphine",
		generic: "morphine",
		brands: ["MS Contin", "Kadian"],
		system: "Pain",
		classes: ["Opioid agonist", "full µ"],
		moa: "µ-opioid agonist.",
		indications: [
			"severe pain",
			"ACS ischemic pain",
			"dyspnea palliation"
		],
		dose: "IR 15–30 mg PO q4h; IV 2–4 mg q5–15min titrate. Equianalgesic charts.",
		bbw: "Addiction, respiratory depression, accidental ingestion, neonatal withdrawal, CYP/EtOH ER.",
		adrs: [
			"respiratory depression",
			"constipation",
			"histamine/itch",
			"hypotension"
		],
		contra: [
			"respiratory depression",
			"ileus",
			"MAOIs caution"
		],
		monitor: [
			"RR",
			"sedation scale",
			"bowel regimen always"
		],
		pearls: ["Renally cleared metabolites — avoid in ESRD (use fentanyl/hydromorphone)."],
		tags: [
			"opioid",
			"resp-depress",
			"renal-metab"
		]
	},
	{
		id: "hydromorphone",
		generic: "hydromorphone",
		brands: ["Dilaudid"],
		system: "Pain",
		classes: ["Opioid agonist"],
		moa: "µ agonist; more potent than morphine.",
		indications: ["severe pain", "preferred over morphine in CKD"],
		dose: "PO 2–4 mg q4h; IV 0.2–1 mg. ~5× morphine PO.",
		bbw: "Same opioid boxed warnings; high-potency errors.",
		adrs: [
			"resp depression",
			"constipation",
			"sedation"
		],
		contra: ["resp depression", "ileus"],
		monitor: ["RR", "sedation"],
		pearls: ["Unit-error magnet — never confuse mg with mL."],
		tags: ["opioid", "resp-depress"]
	},
	{
		id: "fentanyl",
		generic: "fentanyl",
		brands: ["Duragesic", "Sublimaze"],
		system: "Pain",
		classes: ["Opioid agonist", "synthetic"],
		moa: "Highly potent µ agonist; lipid soluble.",
		indications: [
			"anesthesia",
			"patch for opioid-tolerant chronic pain",
			"ICU analgosedation"
		],
		dose: "Patch 12–100 mcg/h q72h — tolerant only. IV mcg not mg.",
		bbw: "Patch in naive can be fatal; heat increases absorption.",
		adrs: [
			"resp depression",
			"chest wall rigidity (IV push)",
			"serotonin with MAOI/SSRI"
		],
		contra: ["opioid-naive patch", "acute post-op patch"],
		monitor: ["RR", "never cut reservoir patches"],
		pearls: ["Safe-ish in renal failure (hepatic).", "100× morphine — units matter."],
		tags: [
			"opioid",
			"resp-depress",
			"serotonin-mild"
		]
	},
	{
		id: "naloxone",
		generic: "naloxone",
		brands: ["Narcan", "Evzio"],
		system: "Pain",
		classes: ["Opioid antagonist"],
		moa: "Competitive µ antagonist.",
		indications: ["opioid overdose", "iatrogenic depression"],
		dose: "IN 4 mg; IV 0.04–0.4 mg titrate; drip if long-acting opioid.",
		adrs: [
			"precipitated withdrawal",
			"agitation",
			"pulmonary edema rare"
		],
		contra: ["none in emergency overdose"],
		monitor: ["recurrent apnea as naloxone wanes (30–90 min)"],
		pearls: ["Observe — fentanyl/methadone outlast naloxone."],
		tags: ["reversal"]
	},
	{
		id: "acetaminophen",
		generic: "acetaminophen",
		brands: ["Tylenol", "Ofirmev"],
		system: "Pain",
		classes: ["Analgesic/antipyretic"],
		moa: "Central COX / serotonergic; not anti-inflammatory.",
		indications: [
			"pain",
			"fever",
			"opioid-sparing"
		],
		dose: "325–1000 mg q6h; max 3–4 g/d; 2 g if liver disease/EtOH.",
		bbw: ["IV/combo products — hepatotoxicity / med errors."].join(""),
		adrs: ["hepatotoxicity in overdose (NAPQI)", "rare SJS"],
		contra: ["severe hepatic failure"],
		monitor: ["total daily dose across combos", "LFTs overdose"],
		pearls: ["N-acetylcysteine for overdose (Rumack-Matthew)."],
		tags: ["hepatotoxic", "otc"]
	},
	{
		id: "ibuprofen",
		generic: "ibuprofen",
		brands: ["Advil", "Motrin"],
		system: "Pain",
		classes: ["NSAID", "nonselective COX"],
		moa: "COX-1/2 inhibition → ↓ prostaglandins.",
		indications: [
			"pain",
			"inflammation",
			"fever",
			"PDA (IV)"
		],
		dose: "200–800 mg q6–8h; max 2400–3200 mg.",
		bbw: "CV thrombotic events; GI bleed; CABG peri-op contraindication.",
		adrs: [
			"AKI",
			"GI ulcer",
			"HTN",
			"worsen HF",
			"↑ lithium"
		],
		contra: [
			"third trimester",
			"CABG peri-op",
			"active GI bleed",
			"CKD severe"
		],
		monitor: [
			"Cr",
			"BP",
			"Hb",
			"lithium if co-prescribed"
		],
		pearls: ["Avoid with ACEI + diuretic (triple whammy)."],
		tags: [
			"nsaid",
			"aki",
			"bleed",
			"lithium-up",
			"nsaids-up"
		]
	},
	{
		id: "ketorolac",
		generic: "ketorolac",
		brands: ["Toradol"],
		system: "Pain",
		classes: ["NSAID", "parenteral"],
		moa: "Potent COX inhibition.",
		indications: ["moderate-severe acute pain, short course"],
		dose: "15–30 mg IV q6h; max 5 days total all routes.",
		bbw: "GI, renal, bleeding, labor, not for peri-op CABG; 5-day max.",
		adrs: [
			"GI bleed",
			"AKI",
			"platelet dysfunction"
		],
		contra: [
			"CKD",
			"active PUD",
			"labor",
			"CVA/CABG",
			"high bleed risk"
		],
		monitor: ["Cr", "duration clock"],
		pearls: ["Treat like a mini-opioid alternative, not a standing NSAID."],
		tags: [
			"nsaid",
			"aki",
			"bleed",
			"nsaids-up"
		]
	},
	{
		id: "gabapentin",
		generic: "gabapentin",
		brands: ["Neurontin"],
		system: "Pain",
		classes: ["Gabapentinoid"],
		moa: "α2δ Ca channel ligand → ↓ excitatory release.",
		indications: [
			"postherpetic neuralgia",
			"focal seizures",
			"neuropathic pain off-label"
		],
		dose: "100–300 mg HS titrate to 300–600 TID; adjust CKD.",
		adrs: [
			"sedation",
			"edema",
			"weight",
			"withdrawal",
			"misuse"
		],
		contra: ["caution opioid combo — resp depression"],
		monitor: ["sedation", "CrCl"],
		pearls: ["Not GABA agonist despite name.", "Renally cleared 100%."],
		tags: ["resp-depress-combo", "renal"]
	},
	{
		id: "allopurinol",
		generic: "allopurinol",
		brands: ["Zyloprim"],
		system: "Immune",
		classes: ["XO inhibitor"],
		moa: "Xanthine oxidase block → ↓ uric acid.",
		indications: [
			"gout prevention",
			"TLS prevention",
			"recurrent urate stones"
		],
		dose: "100 mg start, titrate to SUA <6; 300 mg typical; CKD lower.",
		adrs: [
			"hypersensitivity/DRESS",
			"SJS HLA-B*5801",
			"flare on start"
		],
		contra: ["HLA-B*5801 (Han Chinese, Korean, Thai — test)"],
		monitor: [
			"SUA",
			"rash",
			"Cr"
		],
		pearls: ["Start with colchicine/NSAID overlap to prevent flare.", "Azathioprine/6-MP interaction — fatal myelosuppression if not dose-cut."],
		tags: [
			"sjs",
			"azathioprine-fatal",
			"gout"
		]
	},
	{
		id: "colchicine",
		generic: "colchicine",
		brands: ["Colcrys"],
		system: "Immune",
		classes: ["Antimitotic"],
		moa: "Inhibits microtubules → neutrophil chemotaxis ↓.",
		indications: [
			"acute gout",
			"gout ppx",
			"pericarditis",
			"FMF"
		],
		dose: "Acute 1.2 mg then 0.6 mg 1 h later; ppx 0.6 daily/BID.",
		adrs: [
			"diarrhea",
			"myelosuppression overdose",
			"myopathy with statins"
		],
		contra: ["strong CYP3A4/P-gp inhibitors in CKD (clarithro, cyclosporine)"],
		monitor: [
			"GI",
			"CBC if prolonged",
			"CK with statin"
		],
		pearls: ["Narrow therapeutic index — never double-up."],
		tags: [
			"narrow-index",
			"myopathy",
			"cyp3a4-sub"
		]
	},
	{
		id: "methotrexate",
		generic: "methotrexate",
		brands: ["Trexall", "Otrexup"],
		system: "Immune",
		classes: ["Antimetabolite", "DHFR inhibitor"],
		moa: "DHFR inhibition; weekly low-dose immunomodulation in RA.",
		indications: [
			"RA",
			"psoriasis",
			"ectopic",
			"oncology high-dose"
		],
		dose: "RA 7.5–25 mg **once weekly** + folate 1 mg daily.",
		bbw: "Bone marrow, liver, lung, pregnancy, daily dosing errors fatal.",
		adrs: [
			"mucositis",
			"hepatotoxicity",
			"pneumonitis",
			"teratogen"
		],
		contra: [
			"pregnancy",
			"alcohol abuse",
			"CrCl very low",
			"blood dyscrasia"
		],
		monitor: [
			"CBC, LFTs, Cr q4–12wk",
			"CXR baseline",
			"hep B/C"
		],
		pearls: ["Weekly not daily — classic fatal error.", "Leucovorin rescue high-dose."],
		tags: [
			"teratogen",
			"weekly",
			"hepatotoxic",
			"folate"
		]
	},
	{
		id: "alendronate",
		generic: "alendronate",
		brands: ["Fosamax"],
		system: "Endocrine",
		classes: ["Bisphosphonate"],
		moa: "Inhibits osteoclast farnesyl pyrophosphate synthase.",
		indications: ["osteoporosis", "Paget"],
		dose: "70 mg weekly; 10 mg daily.",
		adrs: [
			"esophagitis",
			"ONJ",
			"atypical femur fracture",
			"hypoCa",
			"flu-like IV cousins"
		],
		contra: [
			"eGFR <35",
			"esophageal dysmotility",
			"inability to sit up 30 min",
			"hypoCa"
		],
		monitor: [
			"Ca/vit D",
			"dental exam",
			"DEXA"
		],
		pearls: ["Empty stomach, full glass water, upright 30 min.", "Drug holiday after 5 yr if low risk."],
		tags: ["esophagitis"]
	},
	{
		id: "tamsulosin",
		generic: "tamsulosin",
		brands: ["Flomax"],
		system: "Renal / GU",
		classes: ["α1a blocker"],
		moa: "Selective α1a antagonism → prostate/bladder neck relaxation.",
		indications: ["BPH", "ureteral stone adjunct"],
		dose: "0.4 mg daily 30 min after same meal.",
		adrs: [
			"retrograde ejaculation",
			"orthostasis",
			"intraoperative floppy iris"
		],
		contra: ["cataract surgery without telling ophthalmology"],
		monitor: ["orthostatics first doses"],
		pearls: ["Tell ophthalmology before cataract surgery (IFIS)."],
		tags: ["alpha-block", "ifis"]
	},
	{
		id: "sildenafil",
		generic: "sildenafil",
		brands: ["Viagra", "Revatio"],
		system: "Renal / GU",
		classes: ["PDE5 inhibitor"],
		moa: "PDE5 block → ↑ cGMP → smooth muscle relaxation (corpus / pulmonary).",
		indications: ["ED", "PAH (Revatio)"],
		dose: "ED 25–100 mg 1 h before; PAH 20 mg TID.",
		adrs: [
			"headache",
			"blue vision (PDE6)",
			"hypotension",
			"NAION rare",
			"priapism rare"
		],
		contra: [
			"nitrates any form",
			"riociguat",
			"severe CAD caution"
		],
		monitor: ["BP", "nitrate washout 24 h (sild/vard) 48 h tadalafil"],
		pearls: ["Fatal hypotension with nitrates."],
		tags: ["pde5-fatal"]
	},
	{
		id: "warfarin-adj",
		generic: "phytonadione (vitamin K)",
		brands: ["Mephyton", "AquaMephyton"],
		system: "Heme",
		classes: ["Warfarin reversal"],
		moa: "Provides vitamin K for γ-carboxylation of II, VII, IX, X.",
		indications: ["warfarin INR reversal", "vit K deficiency"],
		dose: "INR-guided 1–10 mg PO; IV 5–10 mg slow for major bleed + PCC.",
		adrs: ["anaphylactoid IV if fast", "warfarin resistance days after"],
		contra: ["none in life-threatening bleed"],
		monitor: ["INR", "give PCC not just K for major bleed"],
		pearls: ["PO preferred if no major bleed.", "IV: slow infusion."],
		tags: ["reversal", "vitK"]
	},
	{
		id: "sumatriptan",
		generic: "sumatriptan",
		brands: ["Imitrex"],
		system: "Neuropsych",
		classes: ["Triptan", "5HT1B/1D agonist"],
		moa: "Cranial vasoconstriction + trigeminal inhibition.",
		indications: ["migraine abortive", "cluster (SQ)"],
		dose: "PO 50–100 mg, may repeat 2 h; SQ 6 mg; nasal 20 mg.",
		adrs: [
			"chest tightness",
			"paresthesia",
			"serotonin syndrome rare",
			"rebound"
		],
		contra: [
			"CAD/stroke/PVD",
			"uncontrolled HTN",
			"ergot within 24 h",
			"another triptan 24 h",
			"basilar/hemiplegic"
		],
		monitor: ["CV risk screen before first dose"],
		pearls: ["Not for prophylaxis.", "Limit 2 days/week to avoid MOH."],
		tags: ["serotonin-mild", "vasoconstrict"]
	},
	{
		id: "donepezil",
		generic: "donepezil",
		brands: ["Aricept"],
		system: "Neuropsych",
		classes: ["AChE inhibitor"],
		moa: "Reversible acetylcholinesterase inhibition.",
		indications: ["Alzheimer mild–severe"],
		dose: "5 mg qHS → 10 mg; 23 mg selected.",
		adrs: [
			"N/V/diarrhea",
			"bradycardia",
			"vivid dreams",
			"incontinence"
		],
		contra: ["sick sinus caution", "active PUD caution"],
		monitor: [
			"HR",
			"GI",
			"functional status"
		],
		pearls: ["Modest benefit.", "Hold before surgery (cholinergic)."],
		tags: ["cholinergic", "bradycardia-risk"]
	},
	{
		id: "carbidopa-levodopa",
		generic: "carbidopa-levodopa",
		brands: ["Sinemet"],
		system: "Neuropsych",
		classes: ["Dopamine precursor"],
		moa: "Levodopa → DA in CNS; carbidopa blocks peripheral DOPA decarboxylase.",
		indications: ["Parkinson disease", "RLS selected"],
		dose: "25/100 TID start; CR and IR formulations.",
		adrs: [
			"nausea",
			"orthostasis",
			"dyskinesias",
			"hallucinations",
			"impulse control"
		],
		contra: ["nonselective MAOI", "narrow-angle glaucoma caution"],
		monitor: [
			"wearing-off",
			"psychosis",
			"orthostatics"
		],
		pearls: ["Protein competes for absorption.", "Never stop abruptly (NMS-like)."],
		tags: ["dopamine", "nms"]
	},
	{
		id: "isotretinoin",
		generic: "isotretinoin",
		brands: ["Accutane", "Absorica"],
		system: "Immune",
		classes: ["Systemic retinoid"],
		moa: "↓ sebum, follicular keratinization, P. acnes, inflammation.",
		indications: ["severe nodulocystic acne"],
		dose: "0.5–1 mg/kg/d divided, cumulative ~120–150 mg/kg.",
		bbw: "Extreme teratogen — iPLEDGE REMS.",
		adrs: [
			"dryness",
			"↑ lipids/LFTs",
			"IBD signal",
			"depression monitor",
			"pseudotumor"
		],
		contra: ["pregnancy", "breastfeeding"],
		monitor: ["two consents, two tests, monthly iPLEDGE", "lipids, LFTs"],
		pearls: ["Two forms of contraception.", "No donating blood during + 1 month."],
		tags: ["teratogen", "rems"]
	}
];
[...new Set(DRUGS.flatMap((d) => d.classes))].sort();
function drugById(id) {
	return DRUGS.find((d) => d.id === id);
}
function searchDrugs(q) {
	const s = q.trim().toLowerCase();
	if (!s) return DRUGS;
	return DRUGS.filter((d) => {
		return [
			d.generic,
			...d.brands,
			...d.classes,
			d.system,
			d.moa,
			...d.indications,
			...d.pearls,
			...d.tags
		].join(" ").toLowerCase().includes(s);
	});
}
//#endregion
export { searchDrugs as i, SYSTEMS as n, drugById as r, DRUGS as t };
