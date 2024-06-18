"use client";

import { Box } from "@/components/Box";
import Skeleton from "@/components/NextSkeleton";

type Props = {};

const MemeListLoader = (props: Props) => {
  return (
    <Box>
      <Skeleton height={600} borderRadius="0px" />
    </Box>
  );
};

export default MemeListLoader;
