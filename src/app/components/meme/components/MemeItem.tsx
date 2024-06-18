"use client";

import { useState } from "react";
import Button from "@/components/Button";
import Card from "@/components/Card";
import IconButton from "@/components/IconButton";
import { Typography } from "@/components/Typography";
import { getTelegram, getTgUser } from "@/utils";
import { Prisma } from "@prisma/client";
import { Avatar } from "@radix-ui/themes";
import classnames from "classnames/bind";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { memo, type FC } from "react";
import { Box } from "../../../../components/Box";
import styles from "./MemeItem.module.scss";
import ShareBox from "@/components/ShareBox/ShareBox";

const cn = classnames.bind(styles);

type MemeItemProps = {
  url: string;
  caption: string;
  userId: string;
  id: string;
  creator: Prisma.MemeGetPayload<{
    include: { createdBy: { include: { followers: true } } };
  }>["createdBy"];
  likeId?: string;
  onLike: (id: string) => Promise<void>;
  onUnLike: (id: string, memeId: string) => Promise<void>;
  onFollow: (id: string) => Promise<void>;
  onUnFollow: (id: string) => Promise<void>;
};

export const MemeItem: FC<MemeItemProps> = memo(
  ({
    url,
    caption,
    userId,
    id,
    creator,
    likeId,
    onLike,
    onUnLike,
    onFollow,
    onUnFollow,
  }) => {
    const tgUser = getTgUser();
    const router = useRouter();
    const telegram = getTelegram();

    const isOneSelf = userId == tgUser?.user?.id?.toString();
    const isFollowing = !!creator?.followers?.length;

    const [isShareBoxOpen, setIsShareBoxOpen] = useState(false);

    const handleFollow = async () => {
      if (isOneSelf) {
        return router.push("/profile");
      }

      if (isFollowing) {
        await onUnFollow(userId);
      } else {
        await onFollow(userId);
      }
    };

    const handleLike = async () => {
      if (!tgUser?.user?.id) {
        return telegram?.showAlert(`Please login to like this meme!`);
      }

      if (likeId) {
        await onUnLike(likeId, id);
      } else {
        await onLike(id);
      }
    };

    return (
      <Card className={cn("meme")}>
        <Box className={cn("meme__container")}>
          <Box className={cn("meme__profile")}>
            <Box
              className={cn("meme__profile-content")}
              onClick={() => router.push(`/profile?id=${creator?.id}`)}
            >
              <Avatar
                variant="solid"
                color="violet"
                className={cn("meme__profile-avatar")}
                fallback={`${creator?.firstName?.charAt(0) ?? ""}${
                  creator?.lastName?.charAt(0) ?? ""
                }`}
              />

              <Typography fontSize="sm">
                {creator?.firstName} {creator?.lastName || ""}
              </Typography>
            </Box>
            <div>
              <Button onClick={handleFollow}>
                {isOneSelf ? "View" : isFollowing ? "Unfollow" : "Follow"}
              </Button>
            </div>
          </Box>

          <Box className={cn("meme__image-content")}>
            <Image
              src={url}
              alt={"image"}
              width={400}
              height={400}
              style={{
                objectFit: "contain",
              }}
              className={cn("meme__image")}
            />
          </Box>

          <Box className={cn("meme__footer")}>
            <div className={cn("meme__like")}>
              <IconButton
                icon="like"
                onClick={handleLike}
                className={cn(
                  `${!!likeId ? "meme__like-status" : "meme__unlike-status"}`
                )}
              />
              <Typography fontSize="xs">Like</Typography>
            </div>
            <div
              className={cn("meme__share")}
              onClick={() => {
                setIsShareBoxOpen(true);
              }}
            >
              <IconButton
                icon="share"
                onClick={() => {
                  setIsShareBoxOpen(true);
                }}
              />
              <Typography fontSize="xs">Share</Typography>
            </div>
          </Box>
        </Box>

        <ShareBox
          id={id}
          caption={caption}
          isShareBoxOpen={isShareBoxOpen}
          onClose={() => setIsShareBoxOpen(false)}
        />
      </Card>
    );
  }

  // (prevProps, nextProps) => {
  //   const hasPropsMatched =
  //     prevProps.likeId === nextProps.likeId &&
  //     prevProps?.creator?.followers?.length ===
  //       nextProps?.creator?.followers?.length;

  //   console.log(
  //     "hasPropsMatched",
  //     hasPropsMatched,
  //     prevProps.likeId,
  //     nextProps.likeId
  //   );

  //   return hasPropsMatched;
  // }
);

MemeItem.displayName = "MemeItem";
