import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const fullPath = req.url!.replace(/^\/api\//, "");  

  const targetURL = `https://wpu-cafe.vercel.app/api/${fullPath}`;

  console.log("Proxy →", targetURL);
  console.log("Incoming req.query:", req.query);

  try {
    const response = await fetch(targetURL, {
      method: req.method,
      headers: {
        ...(req.headers.authorization ? { Authorization: req.headers.authorization } : {}),
        "Content-Type": "application/json",
      },
      body: req.method !== "GET" ? JSON.stringify(req.body) : undefined,
    });

    const text = await response.text();
    try {
      return res.status(response.status).json(JSON.parse(text));
    } catch {
      return res.status(500).json({ error: "Invalid JSON", raw: text });
    }
  } catch (err: any) {
    return res.status(500).json({ error: "Proxy error", details: err.message });
  }
}
