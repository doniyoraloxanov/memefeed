"use client";

import React from "react";
import classNames from "classnames/bind";
import styles from "./ComingSoon.module.scss";
import { Typography } from "../Typography";
import BackButton from "../BackButton";
import { useRouter } from "next/navigation";
import MainButton from "../MainButton";

const cn = classNames.bind(styles);

type CommingSoonProps = {};

const ComingSoon = (props: CommingSoonProps) => {
  const router = useRouter();

  return (
    <div className={cn("coming")}>
      <BackButton
        isBackable={true}
        onClick={() => {
          router.back();
        }}
      />
      <Typography variant="h1" className={cn("coming__title")}>
        <span className={cn("coming__title--mark")}>It&apos;s </span>
        <br />
        <span>coming soon...</span>
      </Typography>
      <MainButton
        text="backToMenu"
        onClick={() => {
          router.push("/");
        }}
      />
    </div>
  );
};

export default ComingSoon;
