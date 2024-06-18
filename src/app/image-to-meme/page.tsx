"use client";

import ComingSoon from "@/components/ComingSoon/ComingSoon";
import { getTelegram } from "@/utils";
import { useEffect } from "react";

const ImageToMemePage = () => {
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

export default ImageToMemePage;
