import styled from "styled-components";

export const Title = styled.h3`
  font-size: 20px;
  font-weight: 500;
  line-height: 1.6;
  letter-spacing: 0.25px;
`;

export const Category = styled.p`
  color: ${({ theme }) => theme.colors.lightGrey};
`;

export const Values = styled.li`
  color: ${({ theme }) => theme.colors.darkGrey};
`;
