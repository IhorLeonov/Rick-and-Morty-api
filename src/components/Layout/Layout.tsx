import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { FooterSection } from "../Footer/Footer";
import { HeaderSection } from "../Header/Header";
import { HeroSection } from "../Hero/Hero";
import { Wrapper, MainSection } from "./Layout.styled";

export const Layout = () => {
  return (
    <Wrapper>
      <HeaderSection />
      <main>
        <HeroSection />
        <MainSection>
          <Suspense fallback={<p style={{ color: "green" }}>Loading...</p>}>
            <Outlet />
          </Suspense>
        </MainSection>
      </main>
      <FooterSection />
    </Wrapper>
  );
};
