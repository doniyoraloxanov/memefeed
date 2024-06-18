"use client";

import { useRouter } from "next/navigation";
import { useCallback, useEffect } from "react";
import { getTelegram } from "../../utils";

const Initial = () => {
  const Telegram = getTelegram();
  const router = useRouter();

  const onSettingsClick = useCallback(() => {
    router.push("/settings");
  }, [router]);

  useEffect(() => {
    if (Telegram) {
      Telegram.ready?.();
      Telegram.expand?.();
    }
  }, [Telegram]);

  useEffect(() => {
    if (!Telegram?.isClosingConfirmationEnabled) {
      Telegram?.enableClosingConfirmation?.();
    }

    if (!Telegram?.SettingsButton?.isVisible) {
      Telegram?.SettingsButton?.show?.();

      Telegram?.SettingsButton.onClick(onSettingsClick);
    }
  }, [Telegram, onSettingsClick]);

  return null;
};

export default Initial;
