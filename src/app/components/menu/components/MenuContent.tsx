"use client";

import classNames from "classnames/bind";
import MenuCard from "./MenuCard";
import styles from "./MenuContent.module.scss";

import MainButton from "@/components/MainButton";
import { useRouter } from "next/navigation";
import { MainMenuContent } from "@/app/constants";

const cn = classNames.bind(styles);

type MenuContentProps = {};
const MenuContent = (props: MenuContentProps) => {
  const router = useRouter();
  return (
    <div className={cn("menu")}>
      <div className={cn("menu__content")}>
        {MainMenuContent.map((item, index) => (
          <MenuCard
            title={item.title}
            path={item.href}
            icon={item.icon}
            key={index}
          />
        ))}
      </div>
      <MainButton
        text="trending"
        onClick={() => {
          router.push("/memes");
        }}
      />
    </div>
  );
};
export default MenuContent;
