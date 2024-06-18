"use client";

import { Box } from "@/components/Box";
import useSetHeaderBg from "@/packages/mini-app/hooks/useSetHeaderBg";
import { getTelegram } from "@/utils";
import Memes from "./components/TextToMeme";

// styles
import classnames from "classnames/bind";
import styles from "./page.module.scss";
const cn = classnames.bind(styles);

export const dynamic = "force-dynamic";

const TextToMemePage = () => {
  const telegram = getTelegram();

  useSetHeaderBg(telegram?.themeParams.secondary_bg_color);

  return (
    <Box className={cn("memes")}>
      <Memes />
    </Box>
  );
};

export default TextToMemePage;
