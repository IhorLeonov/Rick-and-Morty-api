import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { FooterSection } from "../Footer/Footer";
import { HeaderSection } from "../Header/Header";
import { HeroSection } from "../Hero/Hero";
import { Wrapper, MainSection } from "./Layout.styled";
import { ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({});

export const Layout = () => {
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
};
