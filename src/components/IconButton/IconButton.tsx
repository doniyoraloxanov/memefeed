"use client";

import icons from "@/assets/icons";
import classNames from "classnames/bind";
import React, { FC, useRef } from "react";
import TouchRipple, { TouchRippleActions } from "../TouchRipple/TouchRipple";
import useTouchRipple from "../TouchRipple/useTouchRipple";
import styles from "./IconButton.module.scss";

const cn = classNames.bind(styles);

type IconButtonProps = {
  icon: keyof typeof icons;
  onClick: (event: React.SyntheticEvent) => void;
  className?: string;
  style?: React.CSSProperties;
  color?: "primary" | "secondary" | "default" | "error" | "success" | "warning";
  disableRipple?: boolean;
};

const IconButton: FC<IconButtonProps> = ({
  icon,
  onClick,
  className,
  style,
  color = "primary",
  disableRipple = false,
}) => {
  const rippleRef = useRef<TouchRippleActions>(null);

  const { enableTouchRipple, getRippleHandlers } = useTouchRipple({
    disabled: false,
    rippleRef,
    disableFocusRipple: disableRipple,
    disableRipple,
    disableTouchRipple: disableRipple,
  });

  const Component = icons[icon];

  return (
    <button
      className={cn("icon-button", className, `icon-button--${color}`)}
      onClick={onClick}
      style={style}
      {...getRippleHandlers()}
    >
      <Component className={cn("icon-button__icon")} />
      {enableTouchRipple ? (
        <TouchRipple center={false} ref={rippleRef} />
      ) : null}
    </button>
  );
};

export default IconButton;
