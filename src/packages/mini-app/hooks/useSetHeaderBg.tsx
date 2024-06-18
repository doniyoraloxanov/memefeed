import { getTelegram } from "@/utils";
import { useEffect } from "react";

const useSetHeaderBg = (bgColor: string) => {
  const telegram = getTelegram();

  useEffect(() => {
    if (telegram && bgColor) {
      telegram.setHeaderColor(bgColor);
    }
  }, [bgColor, telegram]);

  return null;
};

export default useSetHeaderBg;
