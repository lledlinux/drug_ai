import { n as TSS_SERVER_FUNCTION, t as createServerFn } from "./ssr.mjs";
import { t as DRUGS } from "./catalog-C_WiOTXl.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/tutor-B4pibcCo.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var askTutor_createServerFn_handler = createServerRpc({
	id: "e4b298ada733254d7dc14aac47b9f6d9ecc8198d39cd13d11e0d91f3eeec50d8",
	name: "askTutor",
	filename: "src/lib/tutor.ts"
}, (opts) => askTutor.__executeServer(opts));
var askTutor = createServerFn({ method: "POST" }).validator((input) => input).handler(askTutor_createServerFn_handler, async ({ data }) => {
	const apiKey = process.env.XAI_API_KEY;
	if (!apiKey) return {
		ok: false,
		error: "Tutor is offline in this environment."
	};
	const q = data.question.trim().slice(0, 800);
	if (!q) return {
		ok: false,
		error: "Ask a pharmacology question."
	};
	const drug = data.drugId ? DRUGS.find((d) => d.id === data.drugId) : void 0;
	const context = drug ? `Focus drug:\n${JSON.stringify({
		generic: drug.generic,
		brands: drug.brands,
		classes: drug.classes,
		moa: drug.moa,
		indications: drug.indications,
		dose: drug.dose,
		bbw: drug.bbw,
		adrs: drug.adrs,
		pearls: drug.pearls
	})}` : `Catalog generics: ${DRUGS.map((d) => d.generic).join(", ")}`;
	const prior = (data.history ?? []).slice(-6).map((m) => ({
		role: m.role,
		content: m.content.slice(0, 1200)
	}));
	const res = await fetch("https://api.x.ai/v1/chat/completions", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${apiKey}`
		},
		body: JSON.stringify({
			model: "grok-4.5",
			max_tokens: 500,
			temperature: .3,
			messages: [
				{
					role: "system",
					content: "You are Monograph, a boards-level pharmacology tutor for PA/NP/MD/PharmD learners. Teach mechanisms, pearls, monitoring, and classic interactions. Be concise and structured. Never give personalized medical advice or dosing for a real patient. Always include a one-line 'not medical advice' closer. If a question is about making, sourcing, or abusing controlled substances, refuse and redirect to legitimate study content."
				},
				{
					role: "system",
					content: context
				},
				...prior,
				{
					role: "user",
					content: q
				}
			]
		})
	});
	if (!res.ok) return {
		ok: false,
		error: `Tutor error ${res.status}`
	};
	return {
		ok: true,
		text: (await res.json()).choices[0]?.message.content ?? ""
	};
});
//#endregion
export { askTutor_createServerFn_handler };
