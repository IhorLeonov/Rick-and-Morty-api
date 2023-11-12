import styled from "styled-components";

export const Wrapper = styled.div`
  width: 1440px;
`;

export const MainSection = styled.section`
  padding: 24px 106px 11px 107px;

  height: 918px;
  background-color: ${({ theme }) => theme.colors.darkGrey};
  color: ${({ theme }) => theme.colors.white};
`;
