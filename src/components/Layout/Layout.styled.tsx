import styled from "styled-components";

export const Wrapper = styled.div`
  width: 1440px;
`;

export const MainSection = styled.section`
  padding: 24px 106px 11px 107px;

  height: 903px;
  background-color: ${({ theme }) => theme.colors.mainBgColor};
  color: ${({ theme }) => theme.colors.mainTextColor};
`;
