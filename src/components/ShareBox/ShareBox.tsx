"use client";

import classnames from "classnames/bind";
import Link from "next/link";
import { Box } from "../Box";
import Icon from "../Icon";
import IconButton from "../IconButton";
import RippleBase from "../RippleBase";
import { Typography } from "../Typography";
import styles from "./ShareBox.module.scss";

const emptyLine = `%0a`;

type Props = {
  id: string;
  isShareBoxOpen: boolean;
  onClose: () => void;
  caption: string;
  showMemefeed?: boolean;
};

const cn = classnames.bind(styles);

const ShareBox = ({
  isShareBoxOpen,
  onClose,
  id,
  caption,
  showMemefeed = false,
}: Props) => {
  if (!isShareBoxOpen) return null;

  return (
    <Box className={cn("share__container")}>
      <Box className={cn("share")}>
        <div className={cn("share__header")}>
          <Typography variant="h4">Share</Typography>
          <IconButton
            icon="close"
            onClick={onClose}
            className={cn("share__close-icon")}
          />
        </div>
        <div className={cn("share__list")}>
          {showMemefeed ? (
            <RippleBase className={cn("share__item")}>
              <Link
                className={cn("share__link")}
                href={`https://twitter.com/intent/post?text=${caption} ${emptyLine}https://app.memeprof.com/memes/${id} ${emptyLine}${emptyLine}this meme is generated via memeprof telegram bot${emptyLine}&hashtags=meme,memeprof`}
                target="_blank"
              >
                <Icon icon="twitter" className={cn("share__icon")} />
              </Link>
            </RippleBase>
          ) : null}
          <RippleBase className={cn("share__item")}>
            <Link
              className={cn("share__link")}
              href={`https://twitter.com/intent/post?text=${caption} ${emptyLine}https://app.memeprof.com/memes/${id} ${emptyLine}${emptyLine}this meme is generated via memeprof telegram bot${emptyLine}&hashtags=meme,memeprof`}
              target="_blank"
            >
              <Icon icon="twitter" className={cn("share__icon")} />
            </Link>
          </RippleBase>
          <RippleBase className={cn("share__item")}>
            <Link
              className={cn("share__link")}
              href={`https://t.me/share/url?url=https://app.memeprof.com/memes/${id}&text=${caption} ${emptyLine}${emptyLine}*This meme is generated via memeprof telegram bot* https://t.me/memeprofbot`}
              target="_blank"
            >
              <Icon icon="telegram" className={cn("share__icon")} />
            </Link>
          </RippleBase>
        </div>
      </Box>
    </Box>
  );
};

export default ShareBox;
