"use client";

import BackButton from "@/components/BackButton";
import { getTelegram } from "@/utils";
import classNames from "classnames/bind";
import { useEffect, type FC } from "react";
import styles from "./Menu.module.scss";
import MenuContent from "./components/MenuContent";
import MenuHeader from "./components/MenuHeader";

const cn = classNames.bind(styles);

type MenuProps = {
  children: React.ReactNode;
};

const Menu: FC<MenuProps> = ({ children }) => {
  const telegram = getTelegram();

  useEffect(() => {
    if (telegram && telegram.themeParams?.bg_color) {
      telegram.setHeaderColor(telegram.themeParams.bg_color);
    }
  }, [telegram]);

  return (
    <div className={cn("menu-container")}>
      <BackButton isBackable={false} />
      <MenuHeader />
      <MenuContent />
      {children}
    </div>
  );
};

export default Menu;
