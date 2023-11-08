import styled from "styled-components";

export const Wrapper = styled.div`
  width: 1440px;
`;

export const MainSection = styled.section`
  height: 903px;
  background-color: ${({ theme }) => theme.colors.mainBgColor};
  color: ${({ theme }) => theme.colors.mainTextColor};
`;
