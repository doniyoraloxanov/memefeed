"use client";

import useBackButton from "@/components/BackButton/useBackButton";
import Icon from "@/components/Icon";
import { useMainButton } from "@/components/MainButton/useMainButton";
import RippleBase from "@/components/RippleBase";
import { Typography } from "@/components/Typography";
import useSetHeaderBg from "@/packages/mini-app/hooks/useSetHeaderBg";
import { getTelegram, getTgUser } from "@/utils";
import { Verification } from "@prisma/client";
import classNames from "classnames/bind";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FC } from "react";
import useSWR from "swr";
import styles from "./verification.module.scss";

const cn = classNames.bind(styles);

type Props = {};

const fetcher = async () => {
  const tgUser = getTgUser();

  const res = await fetch(`/api/auth/verification?id=${tgUser?.user?.id}`);

  return res.json();
};

const Verifications: FC<Props> = () => {
  const router = useRouter();
  const telegram = getTelegram();

  const { data: tasks, mutate: refetch } = useSWR("verification", fetcher);

  useSetHeaderBg(telegram?.themeParams?.secondary_bg_color);

  useMainButton({
    text: "refresh",
    onClick: () => {
      refetch();
      router.refresh();
    },
  });

  useBackButton({
    isBackable: false,
  });

  const renderBonus = (isCompleted: boolean, rewardAmount: number) => {
    if (isCompleted) {
      return (
        <>
          <Typography
            variant="caption"
            className={cn("task__bonus--completed")}
          >
            Completed
          </Typography>
          <Icon icon="tick" size="sm" className={cn("task__button")} />
        </>
      );
    } else {
      return (
        <>
          <Typography variant="caption" className={cn("task__bonus")}>
            <b>+{rewardAmount}</b>
            <Icon icon="coin" size="sm" className={cn("task__coin")} />
          </Typography>
          <Icon icon="right" size="sm" className={cn("task__button")} />
        </>
      );
    }
  };

  return (
    <div className={cn("task")}>
      <Typography variant="h2">
        Welcome to <span>MemeProf</span>
      </Typography>
      <Typography variant="caption">
        Complete these tasks and Earn 2500 Prof points and directly become
        GRIFTER
      </Typography>
      <div className={cn("task__list")}>
        {tasks?.map?.((task: Verification) => {
          return (
            <RippleBase
              key={task.id}
              className={cn("task__option", {
                "task__option--complated": task.isCompleted,
              })}
              onClick={() => {
                if (task.isCompleted) {
                  return;
                } else {
                  router.push(`/tasks/${task.id}`);
                }
              }}
            >
              <div className={cn("task__icon")}>
                <Image
                  src={`/assets/icons/${task.icon}.svg`}
                  alt="icon"
                  width={30}
                  height={30}
                />
              </div>

              <div>
                <p className={cn("task__option--title")}>{task.title}</p>
                {renderBonus(!!task.isCompleted, task.rewardAmount ?? 0)}
              </div>
            </RippleBase>
          );
        })}
      </div>
    </div>
  );
};

export default Verifications;
