"use client";

import React, { useEffect } from "react";
import ComingSoon from "@/components/ComingSoon/ComingSoon";
import { getTelegram } from "@/utils";

type Props = {};

const TrendingPage = (props: Props) => {
  const telegram = getTelegram();
  useEffect(() => {
    if (telegram && telegram.themeParams?.secondary_bg_color) {
      telegram.setHeaderColor(telegram.themeParams.secondary_bg_color);
    }
  }, [telegram]);
  return (
    <div>
      <ComingSoon />
    </div>
  );
};

export default TrendingPage;
