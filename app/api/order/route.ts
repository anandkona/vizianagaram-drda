import { NextResponse } from "next/server";

type OrderItem = { id?: unknown; quantity?: unknown };

export async function POST(request: Request) {
  try {
    const body: unknown = await request.json();
    const record = body && typeof body === "object" ? (body as Record<string, unknown>) : {};
    const name = typeof record.name === "string" ? record.name.trim() : "";
    const mobile = typeof record.mobile === "string" ? record.mobile.trim() : "";
    const address = typeof record.address === "string" ? record.address.trim() : "";
    const items = Array.isArray(record.items) ? (record.items as OrderItem[]) : [];

    if (!name || !/^\d{10}$/.test(mobile) || !address || items.length === 0 || items.some((item) => typeof item.id !== "string" || typeof item.quantity !== "number" || item.quantity < 1)) {
      return NextResponse.json({ error: "Name, 10-digit mobile, address and at least one valid item are required." }, { status: 400 });
    }

    const suffix = typeof crypto !== "undefined" && "randomUUID" in crypto ? crypto.randomUUID().slice(0, 8).toUpperCase() : Math.random().toString(36).slice(2, 10).toUpperCase();
    return NextResponse.json({ ok: true, orderId: `VZM-MART-${suffix}`, message: "Your demonstration order request has been received." }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Please send a valid JSON request." }, { status: 400 });
  }
}
