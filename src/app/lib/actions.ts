"use server";

import { prisma } from "@/utils/prisma";
import { getUserPoints } from "../api/common/levelHelpers";
import { PointReasons, JOINING_REWARDS } from "./constants";

export async function like(memeId: string, userId: string) {
  const like = await prisma.meme.update({
    where: {
      id: memeId,
    },
    data: {
      likes: {
        create: {
          userId: BigInt(userId),
        },
      },
    },
  });

  return like.createdById.toString();
}

export async function unLike(likeId: string) {
  try {
    await prisma.like.delete({
      where: {
        id: likeId,
      },
    });

    return "success";
  } catch (error) {
    console.error(error);
  }

  return "failed";
}

export async function follow(userId: string, followerId: string) {
  const follow = await prisma.user.update({
    where: {
      id: BigInt(userId),
    },
    data: {
      followers: {
        connect: {
          id: BigInt(followerId),
        },
      },
    },
  });

  return "following";
}

export async function unFollow(userId: string, followerId: string) {
  const follow = await prisma.user.update({
    where: {
      id: BigInt(userId),
    },
    data: {
      followers: {
        disconnect: {
          id: BigInt(followerId),
        },
      },
    },
  });

  return "unfollowed";
}

export async function rewardXFollowing(
  xLink: string,
  userId: string,
  rewardAmount: number,
  payload: string
) {
  await prisma.point.create({
    data: {
      userId: BigInt(userId),
      amount: rewardAmount,
      pointReason: payload,
    },
  });
  const { currentLevel } = await getUserPoints(BigInt(userId));

  await prisma.user.update({
    where: { id: BigInt(userId) },
    data: { level: currentLevel, x_profile_url: xLink },
  });
}

export async function rewardInstaFollowing(
  instagramLink: string,
  userId: string,
  rewardAmount: number,
  payload: string
) {
  await prisma.point.create({
    data: {
      userId: BigInt(userId),
      amount: rewardAmount,
      pointReason: payload,
    },
  });
  const { currentLevel } = await getUserPoints(BigInt(userId));

  await prisma.user.update({
    where: { id: BigInt(userId) },
    data: { level: currentLevel, insta_profile_url: instagramLink },
  });
}
