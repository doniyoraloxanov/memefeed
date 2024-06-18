"use server";

import { POINT_REASON } from "@/app/lib/constants";
import { serialize } from "@/app/lib/helpers";
import { prisma } from "@/utils/prisma";
import { existsSync, promises as fs } from "fs";
import path from "path";
import { uploadImage } from "./imageUpload";

export const saveMeme = async ({
  userId,
  prompt,
  caption,
  isPublished,
}: {
  userId: string;
  prompt: string;
  caption: string;
  isPublished: boolean;
}) => {
  const folderPath = path.join(process.cwd(), "public", "memes", userId);
  const filePath = path.join(folderPath, "temp.png");
  const memePath = path.join(folderPath, "meme.png");

  if (
    !existsSync(folderPath) ||
    !existsSync(filePath) ||
    !existsSync(memePath)
  ) {
    throw new Error("Image not found");
  }

  const img = await fs.readFile(memePath);
  const res = await uploadImage(userId, img);

  if (res.error) {
    throw new Error("Error occurred while uploading image");
  }

  const meme = await prisma.meme.create({
    data: {
      url: `${process.env.SUPABASE_URL}/storage/v1/object/public/memes/${res.data?.path}`,
      createdById: BigInt(userId),
      prompt,
      caption,
      isPublished,
    },
  });

  await prisma.point.create({
    data: {
      userId: BigInt(userId),
      amount: isPublished ? 20 : 10,
      pointReason: isPublished
        ? POINT_REASON.SAVE_PUBLISH_COMBO
        : POINT_REASON.MEME_CREATED,
    },
  });

  return serialize(meme);
};

export const publishMeme = async (memeId: string, userId: string) => {
  const meme = await prisma.meme.update({
    where: {
      id: memeId,
    },
    data: {
      isPublished: true,
    },
  });

  await prisma.point.create({
    data: {
      userId: BigInt(userId),
      amount: 10,
      pointReason: POINT_REASON.MEME_CREATED,
    },
  });

  return serialize(meme);
};
