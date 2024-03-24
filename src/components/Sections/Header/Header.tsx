import logo from "../../../assets/images/logo.png";

import { Header, Link } from "./Header.styled";

export const HeaderSection = () => {
  return (
    <Header>
      <Link href="https://rickandmortyapi.com/" target="_blank" rel="noreferrer">
        <img src={logo} alt="Logo" />
      </Link>
    </Header>
  );
};
