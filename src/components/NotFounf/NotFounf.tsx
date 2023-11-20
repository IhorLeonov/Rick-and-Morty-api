import { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.h2`
  color: tomato;
  font-size: 33px;
`;

export const NotFound: FC = () => {
  return (
    <Box>
      <Title>Ups! This path not found</Title>
      <Link to={"/"}>Click to home page</Link>
    </Box>
  );
};
