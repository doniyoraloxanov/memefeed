"use client";

import BackButton from "@/components/BackButton";
import MainButton from "@/components/MainButton";
import { getTelegram } from "@/utils/getters";
import { useRouter } from "next/navigation";
import BonusContent from "./components/BonusContent";

const BonusDetails = () => {
  const router = useRouter();
  const telegram = getTelegram();

  return (
    <div>
      <BackButton isBackable onClick={router.back} />
      <BonusContent />
      <MainButton
        text="inviteFrens"
        onClick={() => {
          telegram?.openLink(
            `https://t.me/${process.env.NEXT_PUBLIC_BOT_USERNAME}?start=refer`
          );
          telegram?.close();
        }}
      />
    </div>
  );
};

export default BonusDetails;
