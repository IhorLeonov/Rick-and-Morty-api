import styled from "styled-components";

export const ListToggler = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
`;

export const ToggleButton = styled.button`
  display: flex;
  padding: 8px 14px;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.blue};
  }
`;
