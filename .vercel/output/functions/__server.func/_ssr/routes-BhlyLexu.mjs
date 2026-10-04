import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Trash2, c as Pencil, d as GraduationCap, f as FlaskConical, g as BookOpen, h as BookmarkCheck, l as List, m as BookmarkPlus, n as Upload, o as Search, p as Check, r as Trophy, s as Plus, t as X, u as House } from "../_libs/lucide-react.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BhlyLexu.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors duration-150 disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-bg active:scale-[0.98]", {
	variants: {
		variant: {
			default: "bg-primary text-primary-fg hover:bg-primary-hover",
			secondary: "bg-surface text-fg border border-border hover:bg-surface-2",
			ghost: "text-fg hover:bg-surface-2",
			danger: "bg-danger text-paper hover:opacity-90"
		},
		size: {
			default: "h-11 px-4",
			sm: "h-9 px-3 text-xs",
			lg: "h-12 px-5",
			icon: "size-11"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
function Button({ className, variant, size, asChild = false, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		...props
	});
}
function Input({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		className: cn("h-11 w-full rounded-md border border-border bg-surface px-3 text-sm text-fg placeholder:text-muted-2", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring", className),
		...props
	});
}
function Textarea({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("min-h-28 w-full rounded-md border border-border bg-surface px-3 py-2 text-sm text-fg placeholder:text-muted-2", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring", className),
		...props
	});
}
function Label({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		className: cn("text-xs font-medium tracking-wide text-muted", className),
		...props
	});
}
function DrugDetail({ drug, known, onEdit, onRemove, onKnow, onClose, readOnly }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "rounded-xl border border-border bg-surface p-5 sm:p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-start justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium tracking-widest text-muted uppercase",
					children: "Principal active"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-1 font-display text-3xl text-ink",
					children: drug.pa
				})] }), !readOnly ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-2",
					children: [
						onKnow ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "secondary",
							size: "sm",
							onClick: onKnow,
							children: [known ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookmarkCheck, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookmarkPlus, { className: "size-4" }), known ? "In study list" : "Add to study"]
						}) : null,
						onEdit ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "secondary",
							size: "sm",
							onClick: onEdit,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "size-4" }), "Edit"]
						}) : null,
						onRemove ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "ghost",
							size: "sm",
							onClick: onRemove,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-4" }), "Remove"]
						}) : null
					]
				}) : null]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
				className: "mt-6 grid gap-5 sm:grid-cols-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
						label: "Class",
						items: drug.classes
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
						label: "Dose",
						items: drug.dose ? [drug.dose] : []
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
						label: "Indications",
						items: drug.indications
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
						label: "Generics",
						items: drug.generics
					})
				]
			}),
			onClose ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "ghost",
				className: "mt-4",
				onClick: onClose,
				children: "Close"
			}) : null
		]
	});
}
function Block({ label, items }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
		className: "text-xs font-medium tracking-widest text-muted uppercase",
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
		className: "mt-2 flex flex-wrap gap-1.5",
		children: items.length ? items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: cn("rounded-full border border-border bg-paper px-3 py-1 text-sm text-fg"),
			children: item
		}, item)) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-sm text-muted-2",
			children: "Not set"
		})
	})] });
}
function slugId(pa) {
	return pa.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}
function splitList(value) {
	return value.split(/[,;]/).map((s) => s.trim()).filter(Boolean);
}
function parseLine(line) {
	const parts = line.split(":").map((p) => p.trim());
	if (parts.length < 4 || !parts[0]) return null;
	return {
		id: slugId(parts[0]),
		pa: parts[0],
		classes: splitList(parts[1] ?? ""),
		indications: splitList(parts[2] ?? ""),
		generics: splitList(parts[3] ?? ""),
		dose: parts[4] ?? ""
	};
}
function toLine(d) {
	return `${d.pa}:${d.classes.join(",")}:${d.indications.join(",")}:${d.generics.join(",")}:${d.dose}`;
}
function uniqueSorted(values) {
	return [...new Set(values.map((v) => v.trim()).filter(Boolean))].sort((a, b) => a.localeCompare(b));
}
var SEED_DRUGS = `
Paracetamol:Analgesic,Antipyretic:Pain,Fever:Doliprane,Dafalgan,Panadol:500-1000 mg
Ibuprofen:NSAID:Pain,Inflammation,Fever:Advil,Nurofen,Brufen:200-400 mg
Amoxicillin:Penicillin antibiotic:Bacterial infections:Clamoxyl,Amoxil:500 mg-1 g
Metformin:Biguanide:Type 2 diabetes:Glucophage:500-1000 mg
Omeprazole:PPI:GERD,Peptic ulcer:Mopral,Losec:20-40 mg
Atorvastatin:Statin:Hypercholesterolemia:Tahor,Lipitor:10-80 mg
Amlodipine:Calcium channel blocker:Hypertension,Angina:Amlor,Norvasc:5-10 mg
Losartan:ARB:Hypertension,Diabetic nephropathy:Cozaar:50-100 mg
Salbutamol:Beta-2 agonist:Asthma,COPD:Ventolin:100-200 mcg
Prednisone:Corticosteroid:Inflammation,Allergy,Autoimmune:Cortancyl:5-60 mg
Morphine:Opioid analgesic:Severe pain:Moscontin,Skenan:10-30 mg
Furosemide:Loop diuretic:Edema,Heart failure:Lasilix:20-80 mg
Warfarin:Vitamin K antagonist:Thrombosis,AF:Coumadin:individualized
Levothyroxine:Thyroid hormone:Hypothyroidism:Levothyrox,Synthroid:25-200 mcg
Sertraline:SSRI:Depression,Anxiety,OCD:Zoloft:50-200 mg
Diazepam:Benzodiazepine:Anxiety,Seizures,Spasm:Valium:2-10 mg
Metronidazole:Nitroimidazole:Anaerobic infection,Amebiasis:Flagyl:500 mg
Ciprofloxacin:Fluoroquinolone:Bacterial infections:Ciflox:250-750 mg
Clopidogrel:Antiplatelet:ACS,Stent,Stroke prevention:Plavix:75 mg
Enoxaparin:LMWH:VTE,ACS:Lovenox:40-100 mg SC
Hydrochlorothiazide:Thiazide diuretic:Hypertension,Edema:Esidrex:12.5-25 mg
Bisoprolol:Beta blocker:Hypertension,Heart failure:Cardensiel:2.5-10 mg
Gliclazide:Sulfonylurea:Type 2 diabetes:Diamicron:30-120 mg
Cetirizine:H1 antihistamine:Allergic rhinitis,Urticaria:Zyrtec:10 mg
Tramadol:Weak opioid:Moderate pain:Topalgic,Contramal:50-100 mg
Pantoprazole:PPI:GERD,Ulcer:Inipomp,Eupantol:20-40 mg
Azithromycin:Macrolide:Bacterial infections:Zithromax:250-500 mg
Fluoxetine:SSRI:Depression,OCD,Bulimia:Prozac:20-60 mg
Ramipril:ACE inhibitor:Hypertension,Heart failure:Triatec:2.5-10 mg
Spironolactone:Potassium-sparing diuretic,Aldosterone antagonist:Heart failure,Hyperaldosteronism:Aldactone:25-100 mg
Digoxin:Cardiac glycoside:Heart failure,AF:Digoxin:0.125-0.25 mg
Heparin:Anticoagulant:Thrombosis,ACS:Heparin:individualized
Insulin glargine:Long-acting insulin:Diabetes:Lantus,Toujeo:individualized
Salmeterol:Long-acting beta-2 agonist:Asthma,COPD:Serevent:50 mcg
Budesonide:Inhaled corticosteroid:Asthma,COPD:Pulmicort:200-800 mcg
Montelukast:Leukotriene antagonist:Asthma,Allergic rhinitis:Singulair:10 mg
Allopurinol:Xanthine oxidase inhibitor:Gout,Hyperuricemia:Zyloric:100-300 mg
Colchicine:Anti-gout:Acute gout:Colchicine:0.5-1 mg
Methotrexate:Antimetabolite,DMARD:RA,Psoriasis,Cancer:Novatrex:weekly dosing
Hydroxychloroquine:DMARD,Antimalarial:RA,Lupus:Plaquenil:200-400 mg
Gabapentin:Antiepileptic:Neuropathic pain,Seizures:Neurontin:300-900 mg
Carbamazepine:Antiepileptic:Seizures,Trigeminal neuralgia:Tegretol:200-400 mg
Valproate:Antiepileptic:Seizures,Bipolar,Migraine:Depakine:500-1500 mg
Haloperidol:Typical antipsychotic:Psychosis,Agitation:Haldol:0.5-5 mg
Olanzapine:Atypical antipsychotic:Schizophrenia,Bipolar:Zyprexa:5-20 mg
Alprazolam:Benzodiazepine:Anxiety,Panic:Xanax:0.25-1 mg
Amitriptyline:TCA:Depression,Neuropathic pain,Migraine:Laroxyl:10-75 mg
Risperidone:Atypical antipsychotic:Schizophrenia,Bipolar:Risperdal:1-6 mg
Lisinopril:ACE inhibitor:Hypertension,Heart failure:Zestril:5-20 mg
Nifedipine:Calcium channel blocker:Hypertension,Angina:Adalate:10-30 mg
Isosorbide dinitrate:Nitrate:Angina,Heart failure:Risordan:10-40 mg
Aspirin:Antiplatelet,NSAID,Analgesic:ACS prevention,Pain,Fever:Aspegic,Kardegic:75-325 mg
Doxycycline:Tetracycline:Bacterial infections,Acne,Malaria prophylaxis:Vibramycin:100 mg
Co-trimoxazole:Sulfonamide + DHFR inhibitor:UTI,PCP,Nocardia:Bactrim:800/160 mg
Fluconazole:Azole antifungal:Candidiasis,Cryptococcus:Triflucan:50-400 mg
Aciclovir:Antiviral:HSV,VZV:Zovirax:200-800 mg
Oseltamivir:Neuraminidase inhibitor:Influenza:Tamiflu:75 mg
Isoniazid:Antitubercular:Tuberculosis:Rimifon:300 mg
Rifampicin:Antitubercular,Rifamycin:Tuberculosis:Rifadine:600 mg
`.trim().split("\n").map(parseLine).filter((d) => d !== null);
function pickRandom(arr) {
	if (!arr.length) return void 0;
	return arr[Math.floor(Math.random() * arr.length)];
}
function shuffle(arr) {
	const a = [...arr];
	for (let i = a.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[a[i], a[j]] = [a[j], a[i]];
	}
	return a;
}
function quizChoices(correct, pool, n = 4) {
	return shuffle([correct, ...shuffle(uniqueSorted(pool.filter((x) => x.toLowerCase() !== correct.toLowerCase()))).slice(0, Math.max(0, n - 1))]);
}
function fromDrug(d) {
	return {
		pa: d?.pa ?? "",
		classes: d?.classes.join(", ") ?? "",
		indications: d?.indications.join(", ") ?? "",
		generics: d?.generics.join(", ") ?? "",
		dose: d?.dose ?? ""
	};
}
function DrugForm({ initial, onCancel, onSave }) {
	const [draft, setDraft] = (0, import_react.useState)(() => fromDrug(initial));
	const [error, setError] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		setDraft(fromDrug(initial));
		setError(null);
	}, [initial]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		className: "flex flex-col gap-4",
		onSubmit: (e) => {
			e.preventDefault();
			const result = onSave({
				pa: draft.pa,
				classes: splitList(draft.classes),
				indications: splitList(draft.indications),
				generics: splitList(draft.generics),
				dose: draft.dose.trim()
			});
			if (!result.ok) setError(result.error ?? "Could not save.");
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Principal active",
				value: draft.pa,
				onChange: (v) => setDraft({
					...draft,
					pa: v
				}),
				required: true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Class (comma separated)",
				value: draft.classes,
				onChange: (v) => setDraft({
					...draft,
					classes: v
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Indications (comma separated)",
				value: draft.indications,
				onChange: (v) => setDraft({
					...draft,
					indications: v
				}),
				multiline: true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Generics / brands (comma separated)",
				value: draft.generics,
				onChange: (v) => setDraft({
					...draft,
					generics: v
				}),
				multiline: true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Dose",
				value: draft.dose,
				onChange: (v) => setDraft({
					...draft,
					dose: v
				})
			}),
			error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-danger",
				children: error
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-2 pt-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "submit",
					children: initial ? "Save changes" : "Add drug"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "button",
					variant: "secondary",
					onClick: onCancel,
					children: "Cancel"
				})]
			})
		]
	});
}
function Field({ label, value, onChange, required, multiline }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-1.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: label }), multiline ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
			value,
			onChange: (e) => onChange(e.target.value),
			required
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
			value,
			onChange: (e) => onChange(e.target.value),
			required
		})]
	});
}
var useMedStore = create()(persist((set, get) => ({
	drugs: SEED_DRUGS,
	known: [],
	scores: [],
	view: "home",
	query: "",
	selectedId: null,
	hydrated: false,
	setView: (view) => set({
		view,
		selectedId: null
	}),
	setQuery: (query) => set({ query }),
	setSelected: (selectedId) => set({ selectedId }),
	setHydrated: () => set({ hydrated: true }),
	addDrug: (d) => {
		const pa = d.pa.trim();
		if (!pa) return {
			ok: false,
			error: "Principal active is required."
		};
		const id = slugId(pa);
		if (get().drugs.some((x) => x.id === id)) return {
			ok: false,
			error: "This principal active already exists."
		};
		set({ drugs: [...get().drugs, {
			...d,
			pa,
			id
		}] });
		return { ok: true };
	},
	updateDrug: (id, d) => {
		const pa = d.pa.trim();
		if (!pa) return {
			ok: false,
			error: "Principal active is required."
		};
		const nextId = slugId(pa);
		if (get().drugs.find((x) => x.id === nextId && x.id !== id)) return {
			ok: false,
			error: "Another entry already uses that name."
		};
		set({
			drugs: get().drugs.map((x) => x.id === id ? {
				...d,
				pa,
				id: nextId
			} : x),
			known: get().known.map((k) => slugId(k) === id ? pa : k),
			selectedId: nextId
		});
		return { ok: true };
	},
	removeDrug: (id) => {
		const pa = get().drugs.find((d) => d.id === id)?.pa;
		set({
			drugs: get().drugs.filter((d) => d.id !== id),
			known: get().known.filter((k) => slugId(k) !== id && k !== pa),
			selectedId: get().selectedId === id ? null : get().selectedId
		});
	},
	addKnown: (pa) => {
		if (get().known.some((k) => k.toLowerCase() === pa.toLowerCase())) return;
		set({ known: [...get().known, pa] });
	},
	addRandomUnknown: (n) => {
		const { drugs, known } = get();
		const knownSet = new Set(known.map((k) => k.toLowerCase()));
		const picked = shuffleCopy(drugs.filter((d) => !knownSet.has(d.pa.toLowerCase()))).slice(0, n);
		if (picked.length) set({ known: [...known, ...picked.map((d) => d.pa)] });
		return picked;
	},
	recordScore: (score, total) => {
		set({ scores: [{
			at: (/* @__PURE__ */ new Date()).toISOString(),
			score,
			total
		}, ...get().scores].slice(0, 40) });
	},
	importLines: (text) => {
		const incoming = text.split("\n").map((l) => parseLine(l)).filter((d) => d !== null);
		if (!incoming.length) return 0;
		const map = new Map(get().drugs.map((d) => [d.id, d]));
		for (const d of incoming) map.set(d.id, d);
		set({ drugs: [...map.values()] });
		return incoming.length;
	},
	resetToSeed: () => set({
		drugs: SEED_DRUGS,
		known: [],
		scores: [],
		selectedId: null
	})
}), {
	name: "med-drugs-v1",
	partialize: (s) => ({
		drugs: s.drugs,
		known: s.known,
		scores: s.scores
	}),
	onRehydrateStorage: () => (state) => {
		state?.setHydrated();
	}
}));
function shuffleCopy(arr) {
	const a = [...arr];
	for (let i = a.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[a[i], a[j]] = [a[j], a[i]];
	}
	return a;
}
function allGenerics(drugs) {
	return uniqueSorted(drugs.flatMap((d) => d.generics));
}
function allClasses(drugs) {
	return uniqueSorted(drugs.flatMap((d) => d.classes));
}
function knownDrugs(drugs, known) {
	const set = new Set(known.map((k) => k.toLowerCase()));
	return drugs.filter((d) => set.has(d.pa.toLowerCase()));
}
function LibraryList({ drugs, known, query, onQuery, onSelect, selectedId, showGenerics }) {
	const knownSet = (0, import_react.useMemo)(() => new Set(known.map((k) => k.toLowerCase())), [known]);
	const filtered = (0, import_react.useMemo)(() => {
		const q = query.trim().toLowerCase();
		const list = [...drugs].sort((a, b) => a.pa.localeCompare(b.pa));
		if (!q) return list;
		return list.filter((d) => [
			d.pa,
			...d.classes,
			...d.indications,
			...d.generics,
			d.dose
		].join(" ").toLowerCase().includes(q));
	}, [drugs, query]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-2" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					className: "pl-10",
					placeholder: "Search PA, class, brand, indication…",
					value: query,
					onChange: (e) => onQuery(e.target.value)
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm text-muted tabular-nums",
				children: [filtered.length, " entries"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "flex flex-col gap-2",
				children: filtered.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => onSelect(d.id),
					className: cn("w-full rounded-lg border px-4 py-3 text-left transition-colors duration-150", selectedId === d.id ? "border-primary bg-primary text-primary-fg" : "border-border bg-surface hover:bg-surface-2"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium",
							children: d.pa
						}), knownSet.has(d.pa.toLowerCase()) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: cn("text-[11px] tracking-wide uppercase", selectedId === d.id ? "text-primary-fg/80" : "text-ok"),
							children: "Known"
						}) : null]
					}), showGenerics ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: cn("mt-1 text-sm", selectedId === d.id ? "text-primary-fg/80" : "text-muted"),
						children: d.generics.join(" · ") || "No generics listed"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: cn("mt-1 text-sm", selectedId === d.id ? "text-primary-fg/80" : "text-muted"),
						children: d.classes.join(" · ")
					})]
				}) }, d.id))
			})
		]
	});
}
function ClassesView({ drugs, onPick }) {
	const classes = allClasses(drugs);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "font-display text-2xl",
			children: "Classes"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-1 text-sm text-muted",
			children: [classes.length, " unique classes in the library"]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-5 grid gap-2 sm:grid-cols-2",
			children: classes.map((c) => {
				const count = drugs.filter((d) => d.classes.some((x) => x.toLowerCase() === c.toLowerCase())).length;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => onPick(c),
					className: "flex w-full items-center justify-between rounded-lg border border-border bg-surface px-4 py-3 text-left hover:bg-surface-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: c }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "tabular-nums text-sm text-muted",
						children: count
					})]
				}) }, c);
			})
		})
	] });
}
function GenericsView({ drugs, onPick }) {
	const generics = allGenerics(drugs);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "font-display text-2xl",
			children: "Drugs & brands"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-1 text-sm text-muted",
			children: [generics.length, " names"]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-3",
			children: generics.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => onPick(g),
				className: "w-full rounded-lg border border-border bg-surface px-4 py-3 text-left hover:bg-surface-2",
				children: g
			}) }, g))
		})
	] });
}
function KnownStrip({ drugs, known, onSelect }) {
	const list = knownDrugs(drugs, known);
	if (!list.length) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-sm text-muted",
		children: "Nothing on the study list yet. Add a few from the library or use Study."
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex flex-wrap gap-2",
		children: list.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			variant: "secondary",
			size: "sm",
			onClick: () => onSelect(d.id),
			children: d.pa
		}, d.id))
	});
}
function StudyPanel({ drugs, known, onAddRandom, onKnow }) {
	const [count, setCount] = (0, import_react.useState)(3);
	const [fresh, setFresh] = (0, import_react.useState)([]);
	const [index, setIndex] = (0, import_react.useState)(0);
	const [mode, setMode] = (0, import_react.useState)("idle");
	const [prompt, setPrompt] = (0, import_react.useState)(null);
	const [revealed, setRevealed] = (0, import_react.useState)(false);
	const knownDrugsList = (0, import_react.useMemo)(() => {
		const set = new Set(known.map((k) => k.toLowerCase()));
		return drugs.filter((d) => set.has(d.pa.toLowerCase()));
	}, [drugs, known]);
	const remaining = drugs.length - knownDrugsList.length;
	const current = mode === "learn" ? fresh[index] : prompt?.drug;
	function startLearn() {
		const picked = onAddRandom(Math.max(1, count));
		setFresh(picked);
		setIndex(0);
		setMode(picked.length ? "learn" : "idle");
	}
	function nextRevise() {
		const d = pickRandom(knownDrugsList);
		if (!d) return;
		const p = pickRandom([{
			kind: "principal active",
			value: d.pa
		}, ...d.generics.map((g) => ({
			kind: "generic",
			value: g
		}))]);
		if (!p) return;
		setPrompt({
			...p,
			drug: d
		});
		setRevealed(false);
		setMode("revise");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-2xl",
				children: "Build knowledge"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-1 text-sm text-muted",
				children: [
					knownDrugsList.length,
					" of ",
					drugs.length,
					" principal actives on your list.",
					remaining ? ` ${remaining} still unknown.` : " You have them all."
				]
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "rounded-xl border border-border bg-surface p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-medium",
							children: "New drugs"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted",
							children: "Draw random unknown PAs, add them to the study list, then read each card."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								type: "number",
								min: 1,
								max: 20,
								className: "w-20",
								value: count,
								onChange: (e) => setCount(Number(e.target.value) || 1)
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								onClick: startLearn,
								disabled: !remaining,
								children: "Draw"
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "rounded-xl border border-border bg-surface p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-medium",
							children: "Revision"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted",
							children: "See a PA or brand name, recall the rest, then reveal the card."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							className: "mt-4",
							variant: "secondary",
							onClick: nextRevise,
							disabled: !knownDrugsList.length,
							children: "Next card"
						})
					]
				})]
			}),
			mode === "learn" && current ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mb-3 text-sm text-muted tabular-nums",
					children: [
						"New ",
						index + 1,
						" / ",
						fresh.length
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DrugDetail, {
					drug: current,
					known: true,
					readOnly: true
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 flex gap-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						onClick: () => {
							if (index + 1 < fresh.length) setIndex(index + 1);
							else setMode("idle");
						},
						children: index + 1 < fresh.length ? "Next" : "Done"
					})
				})
			] }) : null,
			mode === "revise" && prompt ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl border border-border bg-surface p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-widest text-muted uppercase",
						children: prompt.kind
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 font-display text-3xl",
						children: prompt.value
					}),
					!revealed ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						className: "mt-6",
						onClick: () => setRevealed(true),
						children: "Reveal"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DrugDetail, {
							drug: prompt.drug,
							known: true,
							readOnly: true
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							className: "mt-3",
							onClick: nextRevise,
							children: "Next card"
						})]
					})
				]
			}) : null
		]
	});
}
function buildQuestions(known, n) {
	const source = shuffle(known);
	const picked = source.slice(0, Math.min(n, source.length));
	const qs = [];
	for (const d of picked) {
		const classPool = known.flatMap((x) => x.classes);
		const indPool = known.flatMap((x) => x.indications);
		const genPool = known.flatMap((x) => x.generics);
		const c = pickRandom(d.classes);
		const i = pickRandom(d.indications);
		const g = pickRandom(d.generics) ?? d.pa;
		if (c) qs.push({
			pa: d.pa,
			kind: "class",
			prompt: `Class of ${d.pa}`,
			correct: c,
			choices: quizChoices(c, classPool)
		});
		if (i) qs.push({
			pa: d.pa,
			kind: "indication",
			prompt: `Indication of ${d.pa}`,
			correct: i,
			choices: quizChoices(i, indPool)
		});
		qs.push({
			pa: d.pa,
			kind: "generic",
			prompt: `A generic / brand for ${d.pa}`,
			correct: g,
			choices: quizChoices(g, genPool.length > 3 ? genPool : [...genPool, d.pa])
		});
	}
	return qs;
}
function QuizPanel({ drugs, known, onFinish }) {
	const knownList = (0, import_react.useMemo)(() => {
		const set = new Set(known.map((k) => k.toLowerCase()));
		return drugs.filter((d) => set.has(d.pa.toLowerCase()));
	}, [drugs, known]);
	const [n, setN] = (0, import_react.useState)(3);
	const [qs, setQs] = (0, import_react.useState)(null);
	const [i, setI] = (0, import_react.useState)(0);
	const [score, setScore] = (0, import_react.useState)(0);
	const [picked, setPicked] = (0, import_react.useState)(null);
	const [done, setDone] = (0, import_react.useState)(false);
	const q = qs?.[i];
	function start() {
		const built = buildQuestions(knownList, n);
		setQs(built);
		setI(0);
		setScore(0);
		setPicked(null);
		setDone(false);
	}
	function answer(choice) {
		if (picked || !q) return;
		setPicked(choice);
		if (choice === q.correct) setScore((s) => s + 1);
	}
	function next() {
		if (!qs || !q) return;
		const nextScore = score;
		if (i + 1 >= qs.length) {
			setDone(true);
			onFinish(nextScore, qs.length);
			return;
		}
		setI(i + 1);
		setPicked(null);
	}
	if (!knownList.length) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-sm text-muted",
		children: "Add drugs to your study list before running a QCM."
	});
	if (done && qs) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl border border-border bg-surface p-8 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs tracking-widest text-muted uppercase",
				children: "Score"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 font-display text-5xl tabular-nums",
				children: [
					score,
					"/",
					qs.length
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				className: "mt-6",
				onClick: start,
				children: "Again"
			})
		]
	});
	if (!qs || !q) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl border border-border bg-surface p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-2xl",
				children: "QCM"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted",
				children: "Three questions per drug: class, indication, generic. Drawn from your study list."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex items-center gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						type: "number",
						min: 1,
						max: knownList.length,
						className: "w-24",
						value: n,
						onChange: (e) => setN(Number(e.target.value) || 1)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm text-muted",
						children: "drugs"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						onClick: start,
						children: "Start"
					})
				]
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl border border-border bg-surface p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between text-sm text-muted tabular-nums",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
					i + 1,
					" / ",
					qs.length
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Score ", score] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 font-display text-2xl",
				children: q.prompt
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-5 flex flex-col gap-2",
				children: q.choices.map((c) => {
					const isCorrect = picked && c === q.correct;
					const isWrong = picked === c && c !== q.correct;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => answer(c),
						className: cn("flex w-full items-center justify-between rounded-lg border px-4 py-3 text-left", !picked && "border-border bg-paper hover:bg-surface-2", isCorrect && "border-ok bg-ok/10 text-ok", isWrong && "border-danger bg-danger/10 text-danger", picked && !isCorrect && !isWrong && "border-border bg-paper opacity-60"),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: c }),
							isCorrect ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4" }) : null,
							isWrong ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" }) : null
						]
					}) }, c);
				})
			}),
			picked ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				className: "mt-5",
				onClick: next,
				children: i + 1 >= qs.length ? "See score" : "Next"
			}) : null
		]
	});
}
var NAV = [
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
		id: "classes",
		label: "Classes",
		icon: FlaskConical
	},
	{
		id: "generics",
		label: "Drugs",
		icon: List
	},
	{
		id: "study",
		label: "Study",
		icon: GraduationCap
	},
	{
		id: "quiz",
		label: "QCM",
		icon: Search
	},
	{
		id: "scores",
		label: "Scores",
		icon: Trophy
	}
];
function AppShell() {
	const store = useMedStore();
	const [formOpen, setFormOpen] = (0, import_react.useState)(false);
	const [importOpen, setImportOpen] = (0, import_react.useState)(false);
	const [importText, setImportText] = (0, import_react.useState)("");
	const [confirmId, setConfirmId] = (0, import_react.useState)(null);
	const [showGenerics, setShowGenerics] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		if (!store.hydrated) {
			const t = setTimeout(() => store.setHydrated(), 50);
			return () => clearTimeout(t);
		}
	}, [store]);
	const selected = store.drugs.find((d) => d.id === store.selectedId) ?? null;
	const knownSet = (0, import_react.useMemo)(() => new Set(store.known.map((k) => k.toLowerCase())), [store.known]);
	const genericCount = allGenerics(store.drugs).length;
	const knownGenericCount = allGenerics(knownDrugs(store.drugs, store.known)).length;
	function openSearch(term) {
		store.setQuery(term);
		store.setView("library");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-bg text-fg",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl gap-0 lg:gap-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "sticky top-0 hidden h-dvh w-56 shrink-0 flex-col border-r border-border px-4 py-8 lg:flex",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Brand, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "mt-10 flex flex-col gap-1",
						children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavBtn, {
							active: store.view === item.id,
							onClick: () => store.setView(item.id),
							icon: item.icon,
							label: item.label
						}, item.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						className: "mt-auto",
						onClick: () => {
							setFormOpen(true);
							store.setSelected(null);
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" }), "New PA"]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0 flex-1 px-4 pt-6 pb-28 sm:px-6 lg:py-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
						className: "mb-8 flex items-end justify-between gap-4 lg:hidden",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Brand, { compact: true }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							size: "sm",
							onClick: () => setFormOpen(true),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" }), "Add"]
						})]
					}),
					store.view === "home" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HomeView, {
						pa: store.drugs.length,
						drugs: genericCount,
						knownPa: store.known.length,
						knownDrugs: knownGenericCount,
						lastScore: store.scores[0],
						onImport: () => setImportOpen(true),
						onReset: () => {
							if (confirm("Reset library to the built-in set?")) store.resetToSeed();
						}
					}) : null,
					store.view === "library" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-4 flex items-center justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-2xl",
								children: "Principal actives"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-1 rounded-full border border-border bg-surface p-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: cn("rounded-full px-3 py-1 text-xs", showGenerics ? "bg-primary text-primary-fg" : "text-muted"),
									onClick: () => setShowGenerics(true),
									children: "With brands"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: cn("rounded-full px-3 py-1 text-xs", !showGenerics ? "bg-primary text-primary-fg" : "text-muted"),
									onClick: () => setShowGenerics(false),
									children: "Names only"
								})]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LibraryList, {
							drugs: store.drugs,
							known: store.known,
							query: store.query,
							onQuery: store.setQuery,
							onSelect: store.setSelected,
							selectedId: store.selectedId,
							showGenerics
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: formOpen && !selected ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							className: "rounded-xl border border-border bg-surface p-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-xl",
								children: "New medicament"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DrugForm, {
									onCancel: () => setFormOpen(false),
									onSave: (d) => {
										const r = store.addDrug(d);
										if (r.ok) setFormOpen(false);
										return r;
									}
								})
							})]
						}) : selected && formOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							className: "rounded-xl border border-border bg-surface p-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
								className: "font-display text-xl",
								children: ["Edit ", selected.pa]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DrugForm, {
									initial: selected,
									onCancel: () => setFormOpen(false),
									onSave: (d) => {
										const r = store.updateDrug(selected.id, d);
										if (r.ok) setFormOpen(false);
										return r;
									}
								})
							})]
						}) : selected ? confirmId === selected.id ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-xl border border-border bg-surface p-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
								"Remove ",
								selected.pa,
								"?"
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 flex gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "danger",
									onClick: () => {
										store.removeDrug(selected.id);
										setConfirmId(null);
									},
									children: "Remove"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "secondary",
									onClick: () => setConfirmId(null),
									children: "Keep"
								})]
							})]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DrugDetail, {
							drug: selected,
							known: knownSet.has(selected.pa.toLowerCase()),
							onEdit: () => setFormOpen(true),
							onRemove: () => setConfirmId(selected.id),
							onKnow: () => store.addKnown(selected.pa)
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted",
							children: "Select a principal active to see the card."
						}) })]
					}) : null,
					store.view === "classes" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClassesView, {
						drugs: store.drugs,
						onPick: openSearch
					}) : null,
					store.view === "generics" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GenericsView, {
						drugs: store.drugs,
						onPick: openSearch
					}) : null,
					store.view === "study" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StudyPanel, {
							drugs: store.drugs,
							known: store.known,
							onAddRandom: store.addRandomUnknown,
							onKnow: store.addKnown
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mb-3 font-medium",
							children: "Study list"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KnownStrip, {
							drugs: store.drugs,
							known: store.known,
							onSelect: (id) => {
								store.setSelected(id);
								store.setView("library");
							}
						})] })]
					}) : null,
					store.view === "quiz" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuizPanel, {
						drugs: store.drugs,
						known: store.known,
						onFinish: store.recordScore
					}) : null,
					store.view === "scores" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScoresView, { scores: store.scores }) : null,
					formOpen && store.view !== "library" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "fixed inset-0 z-40 flex items-end justify-center bg-ink/40 p-4 sm:items-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "max-h-[90dvh] w-full max-w-lg overflow-auto rounded-xl border border-border bg-paper p-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-xl",
								children: "New medicament"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DrugForm, {
									onCancel: () => setFormOpen(false),
									onSave: (d) => {
										const r = store.addDrug(d);
										if (r.ok) {
											setFormOpen(false);
											store.setView("library");
										}
										return r;
									}
								})
							})]
						})
					}) : null,
					importOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImportModal, {
						text: importText,
						setText: setImportText,
						sample: store.drugs.slice(0, 2).map(toLine).join("\n"),
						onClose: () => setImportOpen(false),
						onImport: () => {
							store.importLines(importText);
							setImportOpen(false);
							setImportText("");
						},
						onExport: () => {
							const blob = new Blob([store.drugs.map(toLine).join("\n")], { type: "text/plain" });
							const url = URL.createObjectURL(blob);
							const a = document.createElement("a");
							a.href = url;
							a.download = "drug.txt";
							a.click();
							URL.revokeObjectURL(url);
						}
					}) : null
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
			className: "fixed inset-x-0 bottom-0 z-30 border-t border-border bg-paper/95 backdrop-blur lg:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-5 gap-0 px-1 py-2",
				children: [
					NAV[0],
					NAV[1],
					NAV[4],
					NAV[5],
					NAV[6]
				].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => store.setView(item.id),
					className: cn("flex min-h-11 flex-col items-center justify-center gap-0.5 text-[10px]", store.view === item.id ? "text-primary" : "text-muted"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, { className: "size-4" }), item.label]
				}, item.id))
			})
		})]
	});
}
function Brand({ compact }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-[11px] tracking-[0.22em] text-muted uppercase",
		children: "For Islam"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: cn("font-display text-ink", compact ? "text-2xl" : "text-3xl"),
		children: "Med Drugs"
	})] });
}
function NavBtn({ active, onClick, icon: Icon, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick,
		className: cn("flex h-11 items-center gap-3 rounded-md px-3 text-sm", active ? "bg-primary text-primary-fg" : "text-fg hover:bg-surface-2"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4" }), label]
	});
}
function HomeView({ pa, drugs, knownPa, knownDrugs: knownD, lastScore, onImport, onReset }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "max-w-xl text-muted",
			children: "A desk for principal actives, classes, brands and doses — browse, edit, then drill with revision cards and QCM."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
			className: "mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
					label: "Principal actives",
					value: pa
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
					label: "Drugs / brands",
					value: drugs
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
					label: "Known PA",
					value: knownPa
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
					label: "Known brands",
					value: knownD
				})
			]
		}),
		lastScore ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-6 text-sm text-muted",
			children: [
				"Last QCM:",
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "tabular-nums text-fg",
					children: [
						lastScore.score,
						"/",
						lastScore.total
					]
				})
			]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-6 text-sm text-muted",
			children: "No quiz scores yet."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-8 flex flex-wrap gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				variant: "secondary",
				onClick: onImport,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "size-4" }), "Import / export"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "ghost",
				onClick: onReset,
				children: "Restore seed library"
			})]
		})
	] });
}
function Stat({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl border border-border bg-surface p-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "text-xs tracking-wide text-muted",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: "mt-2 font-display text-3xl tabular-nums",
			children: value
		})]
	});
}
function ScoresView({ scores }) {
	if (!scores.length) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-sm text-muted",
		children: "Scores appear here after a QCM."
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
		className: "font-display text-2xl",
		children: "Scores"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "mt-5 divide-y divide-border rounded-xl border border-border bg-surface",
		children: scores.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
			className: "flex items-center justify-between px-4 py-3 text-sm",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-muted",
				children: new Date(s.at).toLocaleString()
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "tabular-nums font-medium",
				children: [
					s.score,
					"/",
					s.total
				]
			})]
		}, s.at))
	})] });
}
function ImportModal({ text, setText, sample, onClose, onImport, onExport }) {
	const fileRef = (0, import_react.useRef)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-40 flex items-end justify-center bg-ink/40 p-4 sm:items-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-lg rounded-xl border border-border bg-paper p-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-xl",
					children: "Import / export"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted",
					children: "Same colon format as the original script: PA:class:indication:generic:dose"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
					className: "mt-4 font-mono text-xs",
					placeholder: sample,
					value: text,
					onChange: (e) => setText(e.target.value)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					ref: fileRef,
					type: "file",
					accept: ".txt,text/plain",
					className: "hidden",
					onChange: async (e) => {
						const f = e.target.files?.[0];
						if (!f) return;
						setText(await f.text());
					}
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 flex flex-wrap gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							onClick: onImport,
							disabled: !text.trim(),
							children: "Merge in"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "secondary",
							onClick: () => fileRef.current?.click(),
							children: "Load file"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "secondary",
							onClick: onExport,
							children: "Download drug.txt"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							onClick: onClose,
							children: "Close"
						})
					]
				})
			]
		})
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, {});
}
//#endregion
export { Home as component };
