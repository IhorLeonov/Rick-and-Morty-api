import { Footer, Link, Caption, LinkBox, Year } from "./Footer.styled";
import { Icon } from "../../helpers/IconSelector";
// import logoImg from "../../assets/images/logo-incode.png";
import { FC } from "react";

export const FooterSection: FC = () => {
  return (
    <Footer>
      <Caption>performed as part of a test case for the company</Caption>
      {/* <LogoImg src={logoImg} alt="Incode logo" /> */}
      <LinkBox>
        <Link
          href="https://github.com/IhorLeonov/Rick-and-Morty-api"
          target="_blank"
          rel="noreferrer"
        >
          <Icon name="github" width={18} height={18} />
        </Link>
        <Link href="https://twitter.com/incode_group" target="_blank" rel="noreferrer">
          <Icon name="twitter" width={18} height={18} />
        </Link>
        <Link href="https://www.instagram.com/incode_group/" target="_blank" rel="noreferrer">
          <Icon name="heart" width={18} height={18} />
        </Link>
      </LinkBox>
      <Year>2023</Year>
    </Footer>
  );
};
