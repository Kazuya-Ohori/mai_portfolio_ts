import type { NextApiRequest, NextApiResponse } from "next";
import { client } from "@/libs/client";

export default async function handler(_: NextApiRequest, res: NextApiResponse) {
  const response = await client.get({ endpoint: "works" });
  const works = response.contents;
  res.status(200).json({ works });
}
