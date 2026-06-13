import { type NextRequest, NextResponse } from "next/server";
import { loadSiteData } from "@/lib/site-data";

/** TEAMZ 本番・Webflow プレビュー + ローカル開発。パスはオリジンに含まれないためホストのみ一致で許可。 */
const DEFAULT_ALLOWED_ORIGINS = [
  "https://www.teamz.co.jp",
  "https://web3-summit-3a4ae8.webflow.io",
  "http://localhost:3000",
] as const;

function allowedOrigins(): Set<string> {
  const extra = process.env.SPEAKERS_API_ALLOWED_ORIGINS;
  if (!extra?.trim()) {
    return new Set(DEFAULT_ALLOWED_ORIGINS);
  }
  return new Set([
    ...DEFAULT_ALLOWED_ORIGINS,
    ...extra
      .split(",")
      .map((o) => o.trim())
      .filter(Boolean),
  ]);
}

function corsHeaders(request: NextRequest): Record<string, string> {
  const origin = request.headers.get("origin");
  const allowed = allowedOrigins();
  const base: Record<string, string> = {
    "Access-Control-Allow-Methods": "GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
    "Access-Control-Max-Age": "86400",
  };
  if (origin && allowed.has(origin)) {
    return {
      ...base,
      "Access-Control-Allow-Origin": origin,
      Vary: "Origin",
    };
  }
  return base;
}

export async function OPTIONS(request: NextRequest) {
  return new NextResponse(null, { status: 204, headers: corsHeaders(request) });
}

export async function GET(request: NextRequest) {
  try {
    const { speakers } = await loadSiteData();

    return NextResponse.json(
      { speakers },
      {
        headers: {
          ...corsHeaders(request),
          "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600",
        },
      },
    );
  } catch (error) {
    console.error("Failed to read speakers data:", error);
    return NextResponse.json(
      { speakers: [], error: "Failed to load speakers data" },
      {
        status: 503,
        headers: corsHeaders(request),
      },
    );
  }
}
