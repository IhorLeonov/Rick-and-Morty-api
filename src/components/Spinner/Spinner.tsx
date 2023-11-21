import styled, { keyframes } from "styled-components";
import img from "../../assets/images/spinner.png";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const StyledImg = styled.img`
  animation: 1.5s ${rotate} linear infinite;
  width: 175px;
  height: 175px;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Title = styled.h2`
  color: greenyellow;
  font-size: 30px;
`;

export const Spinner = () => {
  return (
    <Box>
      <StyledImg src={img} alt="spinner" />
      <Title>Loading...</Title>
    </Box>
  );
};
