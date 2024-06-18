"use client";

import { Language } from "@/app/constants";
import BackButton from "@/components/BackButton";
import useBackButton from "@/components/BackButton/useBackButton";
import { Box } from "@/components/Box";
import { useMainButton } from "@/components/MainButton/useMainButton";
import {
  selectSnackbarShow,
  useSnackbar,
} from "@/packages/mini-app/components/snackbar/useSnackbar";
import { useRouter } from "next/navigation";
import { useState } from "react";
import LanguageFormGroup from "./LanguageFormGroup";

import classnames from "classnames/bind";
import styles from "./LanguagePage.module.scss";
const cn = classnames.bind(styles);

const Languages = () => {
  const router = useRouter();
  const show = useSnackbar(selectSnackbarShow);

  const [language, setLanguage] = useState<Language>("english");

  const handleLanguageChange = async (value: Language) => {
    setLanguage(value);
    show(`Your language is changed to ${language}`, { variant: "success" });
  };

  useBackButton({
    isBackable: true,
    onClick: router.back,
  });

  useMainButton({
    onClick: () => {
      router.replace("/menu");
    },
    text: "backToMenu",
  });

  return (
    <Box className={cn("language")}>
      <BackButton isBackable={true} />
      <LanguageFormGroup
        legend="Prof App language"
        defaultValue={language}
        onChange={handleLanguageChange}
      />
    </Box>
  );
};

export default Languages;
