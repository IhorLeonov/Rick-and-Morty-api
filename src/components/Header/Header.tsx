import { FC } from "react";
import logo from "../../assets/images/logo.png";
import { Header } from "./Header.styled";

export const HeaderSection: FC = () => {
  return (
    <Header>
      <a href="https://rickandmortyapi.com/" target="_blank" rel="noreferrer">
        <img src={logo} alt="Logo" style={{ marginLeft: 27, width: 40, height: 40 }} />
      </a>
    </Header>
  );
};
