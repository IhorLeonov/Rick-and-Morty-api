import { FooterSection } from "../Footer/Footer";
import { HeaderSection } from "../Header/Header";
import { HeroSection } from "../Hero/Hero";
import { MainSection } from "../Main/Main";
import { Wrapper } from "./App.styled";

function App() {
  return (
    <Wrapper>
      <HeaderSection />
      <main>
        <HeroSection />
        <MainSection />
      </main>
      <FooterSection />
    </Wrapper>
  );
}

export default App;
