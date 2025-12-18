import { NextResponse } from "next/server";

export async function GET() {
    try {
        const res = await fetch("https://explorer.linkcoinchain.com/api/dashboard", {
            cache: "no-store",
        });

        if (!res.ok) {
            throw new Error(`External API responded with status: ${res.status}`);
        }

        const data = await res.json();

        return NextResponse.json(data, {
            status: 200,
            headers: {
                "Cache-Control": "no-store, max-age=0",
            },
        });
    } catch (error) {
        console.error("Failed to fetch dashboard data:", error);
        return NextResponse.json(
            { error: "Failed to fetch data" },
            { status: 500 }
        );
    }
}
