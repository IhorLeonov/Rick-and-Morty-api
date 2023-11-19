import { FC } from "react";
import { Btn } from "./Button.styled";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  text?: string;
  onClick?: () => void;
  styles?: object;
}

export const Button: FC<ButtonProps> = ({ type, text, onClick, styles }) => {
  return (
    <Btn type={type} onClick={onClick} style={styles}>
      {text}
    </Btn>
  );
};
