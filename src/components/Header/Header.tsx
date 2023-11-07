import logo from "../../assets/images/logo.png";
import { Header } from "./Header.styled";

export const HeaderSection = () => {
  return (
    <Header>
      <img src={logo} alt="Logo" style={{ marginLeft: 27 }} />
    </Header>
  );
};
