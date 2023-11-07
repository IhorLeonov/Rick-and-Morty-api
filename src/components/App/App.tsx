import { HeaderSection } from "../Header/Header";
import { HeroSection } from "../Hero/Hero";
import { Wrapper } from "./App.styled";

function App() {
  return (
    <Wrapper>
      <HeaderSection />
      <HeroSection />
    </Wrapper>
  );
}

export default App;
