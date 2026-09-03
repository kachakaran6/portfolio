import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const appId = searchParams.get("appId");

  if (!appId) {
    return NextResponse.json({ error: "appId query parameter is required" }, { status: 400 });
  }

  try {
    const res = await fetch(`https://play.google.com/store/apps/details?id=${encodeURIComponent(appId)}`, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Accept-Language": "en-US,en;q=0.9",
      },
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      return NextResponse.json({ error: "App not found on Play Store" }, { status: 404 });
    }

    const html = await res.text();
    const match = html.match(/<div class="ClM7O">([^<]+)<\/div><div class="g1rdde">Downloads<\/div>/i);
    const downloads = match ? match[1].trim() : null;

    return NextResponse.json({
      appId,
      downloads: downloads ? `${downloads} Downloads` : null,
    });
  } catch (err) {
    return NextResponse.json({ error: "Failed to fetch from Play Store" }, { status: 500 });
  }
}
