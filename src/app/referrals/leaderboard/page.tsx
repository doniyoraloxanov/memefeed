import { Box } from "@/components/Box";
import { prisma } from "@/utils/prisma";
import { User } from "@prisma/client";
import LeaderBoard from "./components/LeaderBoard";

export const dynamic = "force-dynamic";

const Referrals = async () => {
  const topPointUsers = await prisma.user.findMany({
    take: 10,
    orderBy: {
      point: {
        _count: "desc",
      },
    },
    where: {
      point: {
        some: {},
      },
    },
    include: {
      point: true,
      referredUsers: true,
    },
  });

  return (
    <Box>
      <LeaderBoard TopPointUsers={topPointUsers as User[] | any} />
    </Box>
  );
};

export default Referrals;
