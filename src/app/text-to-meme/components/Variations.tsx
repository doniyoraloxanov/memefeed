"use client";

import Paper from "@/components/Paper";
import React, { useState } from "react";
import styles from "./variations.module.scss";
import classNames from "classnames/bind";
import { Typography } from "@/components/Typography";
import { Box } from "@/components/Box";
import Chip from "@/components/Chip";
import Icon from "@/components/Icon";

const cn = classNames.bind(styles);

type Props = {};

const Variations = (props: Props) => {
  const [selected, setSelected] = useState<number>(1);

  return (
    <Paper className={cn("variations")}>
      <Typography useSecondaryFont>Select Variations</Typography>
      <Box className={cn("variations__list")}>
        <Chip
          isActive={selected === 1}
          className={cn("variations__item")}
          onClick={() => setSelected(1)}
        >
          <Typography useSecondaryFont>1</Typography>
        </Chip>
        <Chip
          className={cn("variations__item")}
          isActive={selected === 2}
          onClick={() => setSelected(2)}
        >
          <Typography useSecondaryFont>2</Typography>
          <Icon icon="premium" color="cta" />
        </Chip>
        <Chip disabled className={cn("variations__item")}>
          <Typography useSecondaryFont>3</Typography>{" "}
          <Icon icon="premium" color="cta" />
        </Chip>
        <Chip disabled className={cn("variations__item")}>
          <Typography useSecondaryFont>4</Typography>{" "}
          <Icon icon="premium" color="cta" />
        </Chip>
      </Box>
    </Paper>
  );
};

export default Variations;
