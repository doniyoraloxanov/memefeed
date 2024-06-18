"use client";

import Image from "next/image";

import BackButton from "@/components/BackButton";
import MainButton from "@/components/MainButton";
import { getTelegram, getTgUser } from "@/utils";
import { useRouter } from "next/navigation";
import useSetHeaderBg from "@/packages/mini-app/hooks/useSetHeaderBg";
import { rewardXFollowing, rewardInstaFollowing } from "@/app/lib/actions";
import { useRef } from "react";
import { PointReasons } from "@/app/lib/constants";

import classNames from "classnames/bind";
import styles from "./TaskDetails.module.scss";
import { SocialLinkInput } from "./SocialLinkInput";
const cn = classNames.bind(styles);

type Props = {
  url: string;
  icon: string;
  payload?: string | null;
  description: string;
  shortDescription: string;
  rewardAmount: number;
};

const TaskDetails = ({
  url,
  icon,
  payload,
  description,
  shortDescription,
  rewardAmount,
}: Props) => {
  const router = useRouter();
  const telegram = getTelegram();
  const tgUser = getTgUser();
  const inputRef = useRef<HTMLTextAreaElement | null>(null);
  const inputValue = inputRef?.current?.value;

  useSetHeaderBg(telegram?.themeParams?.secondary_bg_color);

  const handleButtonClick = async () => {
    if (
      payload === PointReasons.JOIN_TO_COMMUNITY ||
      payload === PointReasons.JOIN_TO_CHANNEL
    ) {
      telegram?.openTelegramLink(url);
    } else if (payload === PointReasons.JOIN_TO_INSTAGRAM) {
      if (inputValue?.length !== 0) {
        await rewardInstaFollowing(
          inputValue!,
          String(tgUser?.user?.id),
          rewardAmount,
          payload
        );
        window.open(url);
      } else {
        telegram?.showAlert(
          `Please paste your Instagram link, ${tgUser?.user?.first_name || ""}!`
        );
      }
    } else if (payload === PointReasons.JOIN_TO_TWITTER) {
      if (!!inputValue) {
        await rewardXFollowing(
          inputValue!,
          String(tgUser?.user?.id),
          rewardAmount,
          payload
        );
        window.open(url);
      } else {
        telegram?.showAlert(
          `Please paste your Twitter link, ${tgUser?.user?.first_name || ""}!`
        );
      }
    } else if (payload === PointReasons.INVITE_FRIENDS) {
      telegram?.openLink(`${url}?start=refer`);

      telegram?.close();
    } else {
      telegram?.openLink(url);
    }
  };

  return (
    <div className={cn("task")}>
      <BackButton isBackable onClick={router.back} />
      <div className={cn("task__image-box")}>
        <Image
          src={`/images/${icon}.jpg`}
          alt="Telegram"
          fill
          className={cn("task__image")}
        />
      </div>
      <div className={cn("task__header")}>
        <p className={cn("task__short-description")}>{shortDescription}</p>
        <Image
          src={`/assets/icons/${icon}.svg`}
          alt="Telegram"
          width={50}
          height={50}
        />
      </div>
      <p className={cn("task__description")}>{description}</p>

      {payload === PointReasons.JOIN_TO_INSTAGRAM && (
        <SocialLinkInput
          inputRef={inputRef}
          placeholder="Paste your Instagram link"
        />
      )}
      {payload === PointReasons.JOIN_TO_TWITTER && (
        <SocialLinkInput
          inputRef={inputRef}
          placeholder="Paste your Twitter link"
        />
      )}

      <MainButton text="complete" onClick={handleButtonClick} />
    </div>
  );
};

export default TaskDetails;
