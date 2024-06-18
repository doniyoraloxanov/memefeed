"use client";

import Chip from "@/components/Chip";
import { Flex } from "@radix-ui/themes";
import classNames from "classnames/bind";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import styles from "./meme-filters.module.scss";

const cn = classNames.bind(styles);

const filters = [
  { name: "Trending", value: "trending" },
  { name: "Following", value: "following" },
  { name: "Most Liked", value: "liked" },
];

const MemeFilters = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentFilter = searchParams.get("filter");

  useEffect(() => {
    if (!currentFilter) {
      router.replace(`${pathname}?filter=trending`);
    }
  }, [currentFilter, pathname, router]);

  return (
    <Flex className={cn("filters")}>
      {filters.map((f) => (
        <Chip
          key={f.value}
          isActive={currentFilter === f.value}
          onClick={() => router.push(`${pathname}?filter=${f.value}`)}
        >
          {f.name}
        </Chip>
      ))}
    </Flex>
  );
};

export default MemeFilters;
