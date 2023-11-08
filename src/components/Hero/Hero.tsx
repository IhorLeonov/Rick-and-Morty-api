import { Hero, Title, Image } from "./Hero.styled";
import bgImage from "../../assets/icons/rick-and-morty.svg";

export const HeroSection = () => {
  return (
    <Hero>
      <Title>The Rick and Morty API</Title>
      <Image src={bgImage} alt="Rick and Morty" />
    </Hero>
  );
};
