"use client";

import { useEffect } from "react";
import BackButton from "@/components/BackButton";
import { Box } from "@/components/Box";
import Icon from "@/components/Icon";
import MainButton from "@/components/MainButton";
import RippleBase from "@/components/RippleBase";
import { Typography } from "@/components/Typography";
import AnimatedNumbers from "@/external/AnimatedNumbers";
import { getTelegram } from "@/utils/getters";
import classnames from "classnames/bind";
import { useRouter } from "next/navigation";
import styles from "./ReferalHome.module.scss";
import ReferredUsers from "./ReferredUsers";
import BonuseList from "./BonuseList";

const cn = classnames.bind(styles);

const ReferalHome = () => {
  const router = useRouter();
  const telegram = getTelegram();

  useEffect(() => {
    if (telegram && telegram.themeParams?.secondary_bg_color) {
      telegram.setHeaderColor(telegram.themeParams.secondary_bg_color);
    }
  }, [telegram]);

  return (
    <Box className={cn("referral")}>
      <BackButton isBackable={true} onClick={router.back} />
      <Typography className={cn("referral__title")} variant="h1">
        Friends zone
      </Typography>
      <RippleBase
        className={cn("referral__leaders")}
        onClick={() => {
          router.push("/referrals/leaderboard");
        }}
      >
        <span className={cn("referral__leaders-coins")}>
          +
          <AnimatedNumbers
            includeComma
            transitions={(index) => ({
              type: "spring",
              duration: index + 0.3,
            })}
            className={cn("container")}
            fontStyle={{
              fontSize: 14,
              color: "#efb832",
            }}
            animateToNumber={100}
          />
          <Icon
            className={cn("referral__leaders-coins-icon")}
            icon="coin"
            size="sm"
          />
        </span>
        <span className={cn("referral__leaders-text")}>
          <b> Top </b> leaders
        </span>
        <Icon
          className={cn("referral__leaders-right")}
          icon="right"
          size="sm"
          color="text"
        />
      </RippleBase>

      <Typography className={cn("referral__heading")} variant="h2">
        Invite friends to get bonuses
      </Typography>

      <BonuseList />

      <Typography className={cn("referral__heading")} variant="h2">
        Friends list
      </Typography>

      <ReferredUsers />

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
  );
};

export default ReferalHome;
