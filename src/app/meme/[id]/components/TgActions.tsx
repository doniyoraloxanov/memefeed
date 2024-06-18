"use client";

import BackButton from "@/components/BackButton";
import MainButton from "@/components/MainButton";
import { useRouter } from "next/navigation";

const TgActions = () => {
  const router = useRouter();

  return (
    <>
      <BackButton isBackable onClick={router.back} />
      <MainButton text="backToMenu" onClick={() => router.push("/menu")} />
    </>
  );
};

export default TgActions;
