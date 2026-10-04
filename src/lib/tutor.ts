import { createServerFn } from "@tanstack/react-start";
import { DRUGS } from "./catalog";

export const askTutor = createServerFn({ method: "POST" })
  .validator((input: { question: string; drugId?: string; history?: { role: "user" | "assistant"; content: string }[] }) => input)
  .handler(async ({ data }) => {
    const apiKey = process.env.XAI_API_KEY;
    if (!apiKey) return { ok: false as const, error: "Tutor is offline in this environment." };

    const q = data.question.trim().slice(0, 800);
    if (!q) return { ok: false as const, error: "Ask a pharmacology question." };

    const drug = data.drugId ? DRUGS.find((d) => d.id === data.drugId) : undefined;
    const context = drug
      ? `Focus drug:\n${JSON.stringify({
          generic: drug.generic,
          brands: drug.brands,
          classes: drug.classes,
          moa: drug.moa,
          indications: drug.indications,
          dose: drug.dose,
          bbw: drug.bbw,
          adrs: drug.adrs,
          pearls: drug.pearls,
        })}`
      : `Catalog generics: ${DRUGS.map((d) => d.generic).join(", ")}`;

    const prior = (data.history ?? []).slice(-6).map((m) => ({
      role: m.role,
      content: m.content.slice(0, 1200),
    }));

    const res = await fetch("https://api.x.ai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "grok-4.5",
        max_tokens: 500,
        temperature: 0.3,
        messages: [
          {
            role: "system",
            content:
              "You are Monograph, a boards-level pharmacology tutor for PA/NP/MD/PharmD learners. Teach mechanisms, pearls, monitoring, and classic interactions. Be concise and structured. Never give personalized medical advice or dosing for a real patient. Always include a one-line 'not medical advice' closer. If a question is about making, sourcing, or abusing controlled substances, refuse and redirect to legitimate study content.",
          },
          { role: "system", content: context },
          ...prior,
          { role: "user", content: q },
        ],
      }),
    });
    if (!res.ok) return { ok: false as const, error: `Tutor error ${res.status}` };
    const body = (await res.json()) as { choices: { message: { content: string } }[] };
    return { ok: true as const, text: body.choices[0]?.message.content ?? "" };
  });
