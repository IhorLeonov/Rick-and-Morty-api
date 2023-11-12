import { FC } from "react";
import logo from "../../assets/images/logo.png";
import { Header } from "./Header.styled";

export const HeaderSection: FC = () => {
  return (
    <Header>
      <img src={logo} alt="Logo" style={{ marginLeft: 27 }} />
    </Header>
  );
};
