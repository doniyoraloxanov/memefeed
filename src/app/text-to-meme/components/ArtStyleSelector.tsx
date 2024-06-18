"use client";

import { Box } from "@/components/Box";
import Card from "@/components/Card";
import Paper from "@/components/Paper";
import { Typography } from "@/components/Typography";
import classNames from "classnames/bind";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import { useState } from "react";
import styles from "./art-style-selector.module.scss";
import Icon from "@/components/Icon";

const cn = classNames.bind(styles);

type Props = {};

const ArtStyleSelector = (props: Props) => {
  const [selected, setSelected] = useState<string>("1");
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 3,
      spacing: 15,
    },
  });

  return (
    <Paper className={cn("selector")}>
      <Typography useSecondaryFont>Art Style</Typography>
      <div className={cn("keen-slider")} ref={sliderRef}>
        <div
          className={cn("keen-slider__slide", "selector__item", {
            "selector__item--selected": selected === "1",
          })}
          onClick={() => setSelected("1")}
        >
          <Card
            style={{
              position: "relative",
              width: "100%",
              height: 120,
              borderRadius: 22,
            }}
          >
            <Image
              fill
              alt="test"
              src="https://www.familyhandyman.com/wp-content/uploads/2018/02/diy-wreath-paint-chip.jpg"
              style={{
                objectFit: "cover",
                borderRadius: 12,
                objectPosition: "top",
              }}
            />
          </Card>
          <Box>
            <Typography
              useSecondaryFont
              align="center"
              style={{
                marginTop: "0.25rem",
                fontSize: "1rem",
              }}
            >
              None
            </Typography>
          </Box>
        </div>
        <div
          className={cn("keen-slider__slide", "selector__item", {
            "selector__item--selected": selected === "cyberpank",
          })}
          onClick={() => setSelected("cyberpank")}
        >
          <Card
            style={{
              position: "relative",
              height: 120,
              borderRadius: 12,
            }}
          >
            <Image
              fill
              alt="CyberPank"
              src="/images/cyberpank.webp"
              style={{
                objectFit: "cover",
                borderRadius: 12,
                objectPosition: "top",
              }}
            />
          </Card>
          <Box>
            <Typography
              useSecondaryFont
              style={{
                marginTop: "0.25rem",
                fontSize: "1rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "0.25rem",
              }}
              align="center"
            >
              CyberPank
              <Icon icon="premium" color="cta" />
            </Typography>
          </Box>
        </div>
        <div
          className={cn("keen-slider__slide", "selector__item", {
            "selector__item--selected": selected === "2",
          })}
          onClick={() => setSelected("2")}
        >
          <Card
            style={{
              position: "relative",
              width: "100%",
              height: 120,
              borderRadius: 12,
            }}
          >
            <Image
              fill
              alt="Paint"
              src="/images/dog.webp"
              style={{
                objectFit: "cover",
                borderRadius: 12,
                objectPosition: "top",
              }}
            />
          </Card>
          <Box>
            <Typography
              align="center"
              useSecondaryFont
              style={{
                marginTop: "0.25rem",
                fontSize: "1rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "0.25rem",
              }}
            >
              Paint
              <Icon icon="premium" color="cta" />
            </Typography>
          </Box>
        </div>
      </div>
    </Paper>
  );
};

export default ArtStyleSelector;
