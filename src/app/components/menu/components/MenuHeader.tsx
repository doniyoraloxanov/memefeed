"use client";

import { Typography } from "@/components/Typography";
import { getTgUser } from "@/utils";
import classNames from "classnames/bind";
import styles from "./MenuHeader.module.scss";

const cn = classNames.bind(styles);

const MenuHeader = () => {
  const tgUser = getTgUser();

  return (
    <div className={cn("menu-header")}>
      <Typography variant="h2" className={cn("menu-header__title")}>
        Hi, {tgUser?.user?.first_name || "User"} 👋
      </Typography>
    </div>
  );
};

export default MenuHeader;
