import styled from "styled-components";

export const Btn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
  min-width: 143px;
  height: 57px;

  color: ${({ theme }) => theme.colors.darkGrey};
  background-color: ${({ theme }) => theme.colors.white};
  line-height: 1.5;
  letter-spacing: 0.5px;
  text-transform: uppercase;

  &:hover {
    color: ${({ theme }) => theme.colors.blue} !important;
  }
`;
