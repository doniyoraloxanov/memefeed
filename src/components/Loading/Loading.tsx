import React, { FC } from "react";
import styles from "./Loading.module.scss";
import classNames from "classnames/bind";

const cn = classNames.bind(styles);

type Props = {
  className?: string;
  style?: React.CSSProperties;
};

const Loading: FC<Props> = ({ className, style }) => {
  return (
    <div className={cn("loader", className)} style={style}>
      <div className={cn("loader__spinner")} />
    </div>
  );
};

export default Loading;
