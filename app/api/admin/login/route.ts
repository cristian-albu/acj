import { NextResponse } from "next/server";

export async function POST(request: Request) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
}
