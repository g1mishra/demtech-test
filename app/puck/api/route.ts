import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import clientPromise from "../../../lib/mongodb";

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const client = await clientPromise;
    const db = client.db("puckCMS");
    const pagesCollection = db.collection("pages");

    // Update or insert the page data
    await pagesCollection.updateOne(
      { path: payload.path },
      { $set: { path: payload.path, data: payload.data } },
      { upsert: true }
    );

    // Purge Next.js cache
    revalidatePath(payload.path);

    return NextResponse.json({ status: "ok" });
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json({ error: "Failed to update page data" }, { status: 500 });
  }
}
