// Serverless function (Vercel/Netlify). Keeps your API key OFF the client.
// Default: Google Gemini free tier. Get a key at https://aistudio.google.com/apikey
// To swap providers, replace the fetch below (e.g. Groq's OpenAI-compatible endpoint).

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Use POST" });
    return;
  }
  try {
    const { lang, context, messages } = req.body || {};
    const key = process.env.GEMINI_API_KEY;
    if (!key) {
      res.status(500).json({ error: "Missing GEMINI_API_KEY env var" });
      return;
    }
    const model = process.env.TUTOR_MODEL || "gemini-2.0-flash";

    const system =
      "You are a calm, accurate UKPCS (Uttarakhand PCS) exam tutor. Reply " +
      (lang === "hi" ? "in Hindi" : "in English") +
      ", concise and exam-oriented (3-6 sentences). Prefer facts that match standard references and " +
      "past UKPSC answer keys; if a point is contested, give the exam-canonical answer and note the nuance briefly." +
      (context ? " The student is studying this topic: " + context : "");

    const contents = (messages || []).map((m) => ({
      role: m.role === "assistant" ? "model" : "user",
      parts: [{ text: m.content }],
    }));

    const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${key}`;
    const r = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        systemInstruction: { parts: [{ text: system }] },
        contents,
        generationConfig: { maxOutputTokens: 700, temperature: 0.3 },
      }),
    });
    const data = await r.json();
    const text =
      data?.candidates?.[0]?.content?.parts?.map((p) => p.text).join("") || "";
    res.status(200).json({ text });
  } catch (e) {
    res.status(500).json({ error: "Tutor request failed" });
  }
}
