import React from "react";
import Skeleton from "@/components/Skeleton";
import classnames from "classnames/bind";
import styles from "./profile-loading.module.scss";

const cn = classnames.bind(styles);

type Props = {};

const Loading = (props: Props) => {
  return (
    <div className={cn("loading")}>
      <Skeleton width="100%" height="250px" borderRadius="20px" />
    </div>
  );
};

export default Loading;
