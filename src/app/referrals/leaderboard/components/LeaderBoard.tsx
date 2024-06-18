"use client";

import { Box } from "@/components/Box";
import MainButton from "@/components/MainButton";
import Sticker from "@/components/Sticker";
import { Typography } from "@/components/Typography";
import { TopPointUsersProps } from "@/types/userType";
import { getTelegram } from "@/utils/getters";
import classnames from "classnames/bind";
import { FC } from "react";
import styles from "./LeaderBoard.module.scss";
import LeaderBoardList from "./LeaderBoardList";
import BackButton from "@/components/BackButton";
import { useRouter } from "next/navigation";

const cn = classnames.bind(styles);

const LeaderBoard: FC<TopPointUsersProps> = ({ TopPointUsers }) => {
  const telegram = getTelegram();

  const router = useRouter();

  return (
    <>
      <BackButton
        isBackable
        onClick={() => {
          router.back();
        }}
      />
      <Box className={cn("leaderboard")}>
        <Box className={cn("leaderboard__top")}>
          <Sticker name="leaders" width={100} height={100} />
          <Typography variant="h2">Top Leaders</Typography>
          <Typography
            className={cn("leaderboard__top-subtitle")}
            variant="caption"
          >
            Invite more friends to get there
          </Typography>
        </Box>

        <LeaderBoardList TopPointUsers={TopPointUsers} />

        <MainButton
          text="inviteFrens"
          onClick={() => {
            telegram?.openLink(
              `https://t.me/${process.env.NEXT_PUBLIC_BOT_USERNAME}?start=refer`
            );
            telegram?.close();
          }}
        />
      </Box>
    </>
  );
};

export default LeaderBoard;
