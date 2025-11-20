import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const fullPath = req.url!.replace("/api/", ""); // menu?page=1&pageSize=8
  const targetURL = `https://wpu-cafe.vercel.app/api/${fullPath}`;

  console.log("Proxy →", targetURL);

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

    // cek apakah JSON valid
    try {
      const json = JSON.parse(text);
      res.status(response.status).json(json);
    } catch {
      return res.status(500).json({
        error: "Invalid JSON response from backend",
        raw: text,
      });
    }

  } catch (err: any) {
    res.status(500).json({ error: "Proxy error", details: err.message });
  }
}
