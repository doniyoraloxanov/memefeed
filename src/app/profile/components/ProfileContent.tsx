"use client";

import { tabs } from "@/app/constants";
import { Box } from "@/components/Box";
import Empty from "@/components/Empty";
import MainButton from "@/components/MainButton";
import Skeleton from "@/components/Skeleton";
import { useMeme } from "@/utils/getMeme";
import { getTgUser } from "@/utils/getters";
import { Meme } from "@prisma/client";
import * as Tabs from "@radix-ui/react-tabs";
import classnames from "classnames/bind";
import { useRouter } from "next/navigation";
import { useState } from "react";
import ProfileCard from "./ProfileCard";
import styles from "./ProfileContent.module.scss";

const cn = classnames.bind(styles);

const ProfileContent = ({ userId }: { userId?: string }) => {
  const [filter, setFilter] = useState("all");

  const tgUser = getTgUser();
  const router = useRouter();

  const { memes, isLoading } = useMeme(userId || tgUser?.user?.id?.toString()!);

  if (isLoading) {
    return (
      <Box className={cn("content")}>
        <Box className={cn("content__tablist")}>
          <Skeleton width="100%" height="20px" borderRadius="5px" />
          <Skeleton width="100%" height="20px" borderRadius="5px" />
          <Skeleton width="100%" height="20px" borderRadius="5px" />
          <Skeleton width="100%" height="20px" borderRadius="5px" />
        </Box>
        <Box className={cn("content__memelist")}>
          <Skeleton width="100%" height="180px" borderRadius="0" />
          <Skeleton width="100%" height="180px" borderRadius="0" />
          <Skeleton width="100%" height="180px" borderRadius="0" />
          <Skeleton width="100%" height="180px" borderRadius="0" />
        </Box>
      </Box>
    );
  }

  return (
    <Box className={cn("content")}>
      <Tabs.Root defaultValue="all">
        <Tabs.List
          className="content__tablist"
          aria-label="Manage your account"
        >
          {tabs?.map((tab) => (
            <Tabs.Trigger
              className={cn("content__tablist--tab")}
              key={tab.id}
              value={tab.id}
            >
              {tab.name}
            </Tabs.Trigger>
          ))}
        </Tabs.List>
        <Tabs.Content value="all">
          {memes.length === 0 ? (
            <Empty />
          ) : (
            <Box className={cn("content__list")}>
              {memes?.map((meme: Meme) => {
                return (
                  <ProfileCard
                    key={meme.id}
                    id={meme.id}
                    url={meme.url}
                    caption={meme.caption}
                  />
                );
              })}
            </Box>
          )}
        </Tabs.Content>
        <Tabs.Content value="favs">
          <Empty />
        </Tabs.Content>
        <Tabs.Content value="tab3">
          <Empty />
        </Tabs.Content>
        <Tabs.Content value="tab4">
          <Empty />
        </Tabs.Content>
      </Tabs.Root>
      <MainButton
        text="backToMenu"
        onClick={() => {
          router.push("/");
        }}
      />
    </Box>
  );
};

export default ProfileContent;
