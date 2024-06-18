"use client";

import classNames from "classnames/bind";
import { CSSProperties, FC, MouseEventHandler, ReactNode, useRef } from "react";
import TouchRipple, { TouchRippleActions } from "../TouchRipple/TouchRipple";
import useTouchRipple from "../TouchRipple/useTouchRipple";
import styles from "./Button.module.scss";

const cn = classNames.bind(styles);

export type ButtonProps = {
  children: ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  style?: CSSProperties;
  className?: string;
  disableRipple?: boolean;
  type?: "button" | "submit" | "reset";
};

const Button: FC<ButtonProps> = ({
  children,
  className,
  disableRipple,
  ...rest
}) => {
  const rippleRef = useRef<TouchRippleActions>(null);

  const { enableTouchRipple, getRippleHandlers } = useTouchRipple({
    disabled: false,
    rippleRef,
    disableFocusRipple: disableRipple,
    disableRipple,
    disableTouchRipple: disableRipple,
  });

  return (
    <button
      {...rest}
      className={cn("btn", className)}
      type="button"
      {...getRippleHandlers()}
    >
      {children}
      {enableTouchRipple ? (
        <TouchRipple center={false} ref={rippleRef} />
      ) : null}
    </button>
  );
};

export default Button;
