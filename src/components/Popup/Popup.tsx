"use client";

import classNames from "classnames/bind";
import { useKeenSlider } from "keen-slider/react";
import React, { FC, useEffect, useRef, useState } from "react";
import styles from "./Popup.module.scss";

const cn = classNames.bind(styles);

type Props = {
  children: React.ReactNode;
  topLevelChildren?: React.ReactNode;
  className?: string;
  onClose: () => void;
  open: boolean;
  title: string;
  subtitle?: string;
};

const Popup: FC<Props> = ({
  children,
  onClose,
  open,
  title,
  subtitle,
  className,
  topLevelChildren,
}) => {
  const [scrolling, setScrolling] = useState(true);
  const smallHeight = useRef(0);

  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    initial: 2,
    vertical: true,
    rubberband: true,
    slides: (size, elements) => {
      smallHeight.current = !open ? 0 : elements[1].clientHeight;
      const mediumHeight = elements[1].clientHeight;

      size -= smallHeight.current;

      return [
        { size: smallHeight.current / size, origin: 0 },
        { size: mediumHeight / size, origin: 0 },
        {
          size: (size - smallHeight.current - mediumHeight) / size,
          origin: -(size - smallHeight.current - mediumHeight) / size,
        },
      ];
    },
    detailsChanged(slider) {
      const y =
        (slider.size - smallHeight.current) *
        slider.track.details.length *
        slider.track.details.progress *
        -1;
      slider.container.style.transform = `translate3d(0, ${Math.round(
        y
      )}px, 0)`;
    },
    renderMode: "custom",
    slideChanged(slider) {
      // if closed call onClose
      if (slider.track.details.rel === 0) {
        onClose();
      }

      setScrolling(slider.track.details.rel === 2);
      // desktop fix
      slider.container.querySelector(".card__inner__scrolling")?.scrollTo(0, 0);
    },
  });

  useEffect(() => {
    if (slider?.current && open) {
      slider.current?.moveToIdx(2);
    }
  }, [open, slider]);

  return (
    <div className={cn("card", className)}>
      <div className={cn("card__inner keen-slider")} ref={sliderRef}>
        <div
          className={cn("card__inner__scrolling")}
          data-keen-slider-scrollable
          style={{
            height: "100%",
            overflowY: scrolling ? "scroll" : "visible",
          }}
        >
          <div className={cn("indicatorWrapper")}>
            <div className={cn("indicator")}></div>
          </div>
          <div className={cn("keen-slider__slide small")}>
            <div className={cn("title")}>{title}</div>
            <div className={cn("subtitle")}>{subtitle}</div>
          </div>
          <div className={cn("keen-slider__slide medium")}>
            {topLevelChildren}
          </div>
          <div className={cn("keen-slider__slide large")}>
            <br />
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
