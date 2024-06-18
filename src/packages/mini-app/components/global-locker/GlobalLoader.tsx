"use client";

import { Box } from "@/components/Box";
import { Typography } from "@/components/Typography";
import classNames from "classnames/bind";
import { FC } from "react";
import styles from "./global-loader.module.scss";

const cn = classNames.bind(styles);

type Props = {
  onBackdropClick?: () => void;
  title?: string;
};

const GlobalLoader: FC<Props> = ({ onBackdropClick, title = "" }) => {
  return (
    <Box className={cn("global-locker")} onClick={onBackdropClick}>
      <Box className={cn("global-locker__content")}>
        <Box className={cn("global-locker__loader")}></Box>
      </Box>
      <Typography variant="h6" className={cn("global-locker__text")}>
        {title}
      </Typography>
    </Box>
  );
};

export default GlobalLoader;
