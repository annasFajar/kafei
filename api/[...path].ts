import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const { path } = req.query;

  // gabung path jadi string
  const endpoint = Array.isArray(path) ? path.join("/") : path;

  try {
    const response = await fetch(`https://wpu-cafe.vercel.app/api/${endpoint}`, {
      method: req.method,
      headers: {
        "Content-Type": "application/json",
        ...(req.headers.authorization ? { Authorization: req.headers.authorization } : {}),
      },
      body: req.method !== "GET" ? JSON.stringify(req.body) : undefined,
    });

    const data = await response.json();
    res.status(response.status).json(data);
  } catch (error) {
    res.status(500).json({ error: "Proxy error", details: (error as Error).message });
  }
}
