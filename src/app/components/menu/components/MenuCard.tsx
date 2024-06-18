"use client";

import classNames from "classnames/bind";
import styles from "./MenuCard.module.scss";
import { useRouter } from "next/navigation";
import RippleBase from "@/components/RippleBase";
import Image from "next/image";

const cn = classNames.bind(styles);

type MenuCardProps = {
  title: string;
  path: string;
  icon: string;
};

const MenuCard = ({ title, path, icon }: MenuCardProps) => {
  const router = useRouter();

  return (
    <RippleBase onClick={() => router.push(path)}>
      <div className={cn("card")}>
        <div className={cn("card__icon")}>
          <Image src={icon} alt={title} width={24} height={24} />
        </div>
        <p className={cn("card__title")}>{title}</p>
      </div>
    </RippleBase>
  );
};

export default MenuCard;
