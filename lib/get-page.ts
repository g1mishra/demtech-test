import { Data } from "@measured/puck";
import clientPromise from "./mongodb";

export async function getPage(path: string): Promise<Data | null> {
  try {
    const client = await clientPromise;
    const db = client.db("puckCMS");
    const page = await db.collection("pages").findOne({ path });

    return page ? page.data : null;
  } catch (error) {
    console.error("Failed to get page:", error);
    return null;
  }
}
