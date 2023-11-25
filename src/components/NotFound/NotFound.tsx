import { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 714px;
`;

const Title = styled.h2`
  color: tomato;
  font-size: 33px;
`;

const StyledLink = styled(Link)`
  margin-top: 40px;
  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.blue};
  }
`;

const NotFound: FC = () => {
  return (
    <Box>
      <Title>Ups! Nothing was found!</Title>
      <StyledLink to="/">Click - to redirect to homepage</StyledLink>
    </Box>
  );
};

export default NotFound;
