import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const path = req.query.path;

  // normalisasi path
  const endpoint = Array.isArray(path)
    ? path.join("/")
    : typeof path === "string"
    ? path
    : "";

  // ambil query string setelah tanda ?
  const qs = req.url!.split("?")[1] || ""

  const targetURL = `https://wpu-cafe.vercel.app/api/${endpoint}${qs ? `?${qs}` : ""}`

  console.log("Proxy →", targetURL)

  try {
    const response = await fetch(targetURL, {
      method: req.method,
      headers: {
        ...(req.headers.authorization ? { Authorization: req.headers.authorization } : {}),
        "Content-Type": "application/json",
      },
      body: req.method !== "GET" ? JSON.stringify(req.body) : undefined,
    })

    // ambil text dulu (karena bisa JSON atau HTML)
    const text = await response.text()

    // coba parse JSON
    try {
      return res.status(response.status).json(JSON.parse(text))
    } catch {
      // kalau bukan JSON, kirim raw HTML/teks biar tahu error backend
      return res.status(500).json({
        error: "Invalid JSON from backend",
        raw: text,
      })
    }
  } catch (err: any) {
    res.status(500).json({ error: "Proxy error", details: err.message })
  }
}
