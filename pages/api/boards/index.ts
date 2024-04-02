import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";
const Prisma = new PrismaClient();
type Data = {
  title: string;
};

const BodySchema = z.object({
  title: z.string(),
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "POST") {
    res.status(405).end();
    return;
  }
  try {
    const body = BodySchema.parse(req.body);
    console.log(body);
    const p = await Prisma.board.create(req.body);
    console.log(p);
  } catch (error) {
    console.log("dfdf");
    res.status(400);
  }
  console.log(req.body);
}
