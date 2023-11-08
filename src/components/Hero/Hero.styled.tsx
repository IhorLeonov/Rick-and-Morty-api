import styled from "styled-components";

export const Hero = styled.section`
  position: relative;
  display: flex;
  height: 345px;
  justify-content: center;
  align-items: center;
  /* height: calc(50vh - 60px); */
  background-color: #ffffff;
`;

export const Title = styled.h1`
  position: relative;
  text-align: center;
  font-size: 101px;
  font-weight: 900;
  line-height: 111px;
  z-index: 1;

  color: ${({ theme }) => theme.colors.titleColor};
`;

export const Image = styled.img`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
`;
