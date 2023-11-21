import { FC } from "react";
import { LoaderBox } from "./Loader.styled.tsx";
import { RotatingLines } from "react-loader-spinner";

interface LoaderProps {
  style?: object;
  width?: string;
  color?: string;
}

export const Loader: FC<LoaderProps> = ({ style, width, color = "yellowgreen" }) => {
  return (
    <LoaderBox style={style}>
      <RotatingLines
        strokeColor={color}
        strokeWidth="5"
        animationDuration="0.75"
        width={width}
        visible={true}
      />
    </LoaderBox>
  );
};
