import classNames from "classnames/bind";
import React, { FC } from "react";
import styles from "./formGroup.module.scss";

const cn = classNames.bind(styles);

interface FormGroupProps {
  legend: string;
  children: React.ReactNode;
  className?: string;
  legendClassName?: string;
}

const FormGroup: FC<FormGroupProps> = ({
  legend,
  children,
  className,
  legendClassName,
}) => {
  return (
    <div className={cn("form-group", className)}>
      <fieldset className={cn("form-group__fieldset")}>
        <legend className={cn("form-group__legend", legendClassName)}>
          {legend}
        </legend>
        {children}
      </fieldset>
    </div>
  );
};

export default FormGroup;
