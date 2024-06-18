"use client";

import { Box } from "@/components/Box";
import Snackbar from "@/packages/mini-app/components/snackbar/Snackbar";
// import { getMainButton, getTelegram, getTgUser } from "@/utils/getters";
import React, { FC } from "react";

type Props = {
  children: React.ReactNode;
};

// if (!globalThis.telegram || !globalThis.user || !globalThis.mainButton) {
//   globalThis.telegram = getTelegram();
//   globalThis.user = getTgUser();
//   globalThis.mainButton = getMainButton();
// }

const TelegramThemeProvider: FC<Props> = ({ children }) => {
  return (
    <Box>
      <Snackbar />
      {children}
    </Box>
  );
};

export default TelegramThemeProvider;
