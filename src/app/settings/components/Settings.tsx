"use client";

import {
  MEME_PAPER_LINK,
  PROFAPP_CHANNLE_LINK,
  SUPPORT_BOT_LINK,
} from "@/app/constants";
import useBackButton from "@/components/BackButton/useBackButton";
import { Box } from "@/components/Box";
import { useMainButton } from "@/components/MainButton/useMainButton";
import { Typography } from "@/components/Typography";
import { useClearCache } from "@/hooks/useClearCache";
import { getTelegram } from "@/utils";
import classnames from "classnames/bind";
import { useRouter } from "next/navigation";
import SettingCard from "./SettingCard";
import styles from "./Settings.module.scss";

const cn = classnames.bind(styles);

const Settings = () => {
  const router = useRouter();
  const telegram = getTelegram();

  const { onClearCache } = useClearCache();

  const handleDownloadPDF = () => {
    telegram?.openLink(MEME_PAPER_LINK, {
      try_instant_view: true,
    });
  };

  useBackButton({
    isBackable: true,
    onClick: () => {
      router.replace("/menu");
    },
  });

  useMainButton({
    onClick: () => {
      router.replace("/menu");
    },
    text: "backToMenu",
  });

  return (
    <Box className={cn("setting")}>
      <Box className={cn("setting__general-container")}>
        <Box>
          <Typography variant="h1">Settings</Typography>
          <Typography className={cn("setting__subtitle")}>General</Typography>
        </Box>

        <SettingCard
          onClick={() => {
            router.push("/settings/languages");
          }}
          icon="langauge"
          description="Prof App Language"
          className={cn("setting__icon--language")}
        />
        <SettingCard
          onClick={handleDownloadPDF}
          icon="questionMark"
          description="MemePaper"
          className={cn("setting__icon--memepaper")}
        />
      </Box>
      <Box className={cn("setting__help-container")}>
        <Typography className={cn("setting__subtitle")}>Help</Typography>

        <SettingCard
          onClick={() => {
            telegram?.openTelegramLink(SUPPORT_BOT_LINK);
          }}
          icon="support"
          description="Contact support"
          className={cn("setting__icon--support")}
        />

        <SettingCard
          onClick={() => {
            telegram?.openTelegramLink(PROFAPP_CHANNLE_LINK);
          }}
          icon="news"
          description="Prof App News"
          className={cn("setting__icon--news")}
        />
      </Box>
      <Box className={cn("setting__help-container")}>
        <Typography className={cn("setting__subtitle")}>Actions</Typography>

        <SettingCard
          onClick={onClearCache}
          icon="removeBin"
          description="Clear Cache"
          className={cn("setting__icon--cache")}
        />
      </Box>
    </Box>
  );
};

export default Settings;
