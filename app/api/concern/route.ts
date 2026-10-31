import { NextResponse } from "next/server";

function referenceId(prefix: string) {
  const random = typeof crypto !== "undefined" && "randomUUID" in crypto ? crypto.randomUUID().slice(0, 8).toUpperCase() : Math.random().toString(36).slice(2, 10).toUpperCase();
  return `${prefix}-${random}`;
}

export async function POST(request: Request) {
  try {
    const body: unknown = await request.json();
    const record = body && typeof body === "object" ? (body as Record<string, unknown>) : {};
    const name = typeof record.name === "string" ? record.name.trim() : "";
    const mobile = typeof record.mobile === "string" ? record.mobile.trim() : "";
    const concern = typeof record.concern === "string" ? record.concern.trim() : "";

    if (!name || !/^\d{10}$/.test(mobile) || !concern) {
      return NextResponse.json({ error: "Name, a 10-digit mobile number and concern are required." }, { status: 400 });
    }

    return NextResponse.json({ ok: true, referenceId: referenceId("VZM-CONCERN"), message: "Your concern has been received for review." }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Please send a valid JSON request." }, { status: 400 });
  }
}
