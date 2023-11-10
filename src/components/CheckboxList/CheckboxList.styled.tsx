import styled from "styled-components";

export const FilterList = styled.ul`
  position: absolute;
  top: 57px;
  background-color: ${({ theme }) => theme.colors.white};
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
`;

export const FilterItem = styled.ul`
  &:hover span {
    color: ${({ theme }) => theme.colors.blue};
  }
`;
