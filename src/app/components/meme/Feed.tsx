"use client";

import classnames from "classnames/bind";
import styles from "./Feed.module.scss";
const cn = classnames.bind(styles);

import BackButton from "@/components/BackButton";
import MainButton from "@/components/MainButton";
import useSetHeaderBg from "@/packages/mini-app/hooks/useSetHeaderBg";
import { getTelegram } from "@/utils";
import { useRouter } from "next/navigation";
import { Suspense } from "react";
import MemeFilters from "./components/MemeFilters";
import { MemeList } from "./components/MemeList";

const Feed = () => {
  const router = useRouter();
  const telegram = getTelegram();

  useSetHeaderBg(telegram?.themeParams?.secondary_bg_color);

  return (
    <div className={cn("meme")}>
      <BackButton isBackable onClick={() => router.push("/")} />
      <Suspense fallback={<>Here should be a skeloton</>}>
        <MemeFilters />
        <MemeList />
      </Suspense>
      <MainButton text="backToMenu" onClick={() => router.push("/")} />
    </div>
  );
};

export default Feed;
