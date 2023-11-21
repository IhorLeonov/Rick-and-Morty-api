import styled from "styled-components";

export const Wrapper = styled.div`
  width: 1440px;
`;

export const MainSection = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 24px 106px 15px 107px;
  min-height: 668px;

  background-color: ${({ theme }) => theme.colors.darkGrey};
  color: ${({ theme }) => theme.colors.white};
`;
