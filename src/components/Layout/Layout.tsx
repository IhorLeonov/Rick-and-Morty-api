import { Outlet } from "react-router-dom";
import { FC, Suspense } from "react";
import { FooterSection } from "../Footer/Footer";
import { HeaderSection } from "../Header/Header";
import { HeroSection } from "../Hero/Hero";
import { Wrapper, MainSection } from "./Layout.styled";
import TemporaryDrawer from "../Drawer/Drawer";
import Loader from "../Loader/Loader";

export const Layout: FC = () => {
  return (
    <Wrapper>
      <HeaderSection />
      <main>
        <HeroSection />
        <MainSection>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </MainSection>
      </main>
      <FooterSection />
      <TemporaryDrawer />
    </Wrapper>
  );
};
