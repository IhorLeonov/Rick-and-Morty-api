import { FC } from "react";
import { Btn } from "./Button.styled";
import { ButtonProps } from "../../constants/types";

export const Button: FC<ButtonProps> = ({ children, ...props }) => {
  return <Btn {...props}>{children}</Btn>;
};
