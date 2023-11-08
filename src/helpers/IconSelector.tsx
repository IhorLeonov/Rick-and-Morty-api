import { FC } from "react";
import sprite from "../assets/icons/sprite.svg";

interface IconSelector {
  name: string;
  width?: number;
  height?: number;
}

export const Icon: FC<IconSelector> = ({ name, width, height }) => {
  return (
    <svg className="svg" width={width} height={height}>
      <use href={sprite + `#${name}`}></use>
    </svg>
  );
};
