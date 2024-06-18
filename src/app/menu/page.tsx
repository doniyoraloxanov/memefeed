// import Menu from "../components/menu/Menu";
import dynamicImport from "next/dynamic";
import { Suspense } from "react";
import Ads from "../submodules/menu/Ads";

const Menu = dynamicImport(() => import("../components/menu/Menu"), {
  ssr: false,
});

export const revalidate = 20;

const MenuPage = () => {
  return (
    <div>
      <Menu>
        <Suspense fallback={<>Loading Ads</>}>
          <Ads />
        </Suspense>
      </Menu>
    </div>
  );
};

export default MenuPage;
