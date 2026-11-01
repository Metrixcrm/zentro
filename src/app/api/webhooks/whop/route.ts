import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.text();
  const signature = req.headers.get("whop-signature") || "";

  // TODO: verify signature with WHOP_WEBHOOK_SECRET
  // const crypto = await import("crypto");
  // const expected = crypto.createHmac("sha256", process.env.WHOP_WEBHOOK_SECRET!).update(body).digest("hex");
  // if (signature !== expected) return NextResponse.json({ error: "invalid signature" }, { status: 401 });

  try {
    const event = JSON.parse(body);
    console.log("Whop webhook received:", event.type || event.event, event);

    // Handle events
    switch (event.type || event.event) {
      case "payment.succeeded":
        // Handle successful payment
        break;
      case "membership.activated":
        // Handle membership activation
        break;
      case "membership.deactivated":
        // Handle membership deactivation
        break;
      default:
        console.log("Unhandled event:", event.type || event.event);
    }

    return NextResponse.json({ received: true });
  } catch (err) {
    console.error("Webhook parse error:", err);
    return NextResponse.json({ error: "invalid payload" }, { status: 400 });
  }
}

export async function GET() {
  return NextResponse.json({ status: "ok", endpoint: "whop-webhook" });
}
