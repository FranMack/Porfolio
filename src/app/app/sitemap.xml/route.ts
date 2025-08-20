import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = "https://francisco-mackinnon.vercel.app";
  const urls = ["", "about", "projects", "contact"]; // tus páginas reales

  const content = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls
      .map(
        (url) => `
      <url>
        <loc>${baseUrl}/${url}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>${url === "" ? "1.0" : "0.8"}</priority>
      </url>
    `
      )
      .join("")}
  </urlset>`.trim();

  return new NextResponse(content, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
