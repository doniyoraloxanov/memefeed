import { prisma } from "@/utils/prisma";
import AdsSlider from "@/app/components/menu/components/AdsSlider";

export const revalidate = 30;

const Ads = async () => {
  const ads = await prisma.ad.findMany();

  return <AdsSlider ads={ads} />;
};

export default Ads;
