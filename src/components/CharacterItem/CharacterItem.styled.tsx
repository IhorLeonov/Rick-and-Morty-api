import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

export const CardItem = styled.li`
  display: flex;
`;

export const Image = styled.img`
  width: 229px;
  height: 220px;
  border-bottom-left-radius: 9px;
  border-top-left-radius: 9px;
`;

export const Wrapper = styled.div`
  width: 371px;
  padding: 12.5px 13.5px 13.51px 13.5px;
  background-color: ${({ theme }) => theme.colors.grey};
  border-bottom-right-radius: 9px;
  border-top-right-radius: 9px;
`;

export const Link = styled(RouterLink)`
  &:hover h2 {
    color: ${({ theme }) => theme.colors.orange};
  }
`;

export const Name = styled.h2`
  font-size: 27px;
  font-weight: 800;
  line-height: 1.1;
`;

export const Indicator = styled.div`
  margin-right: 7px;
  width: 9px;
  height: 9px;
  border-radius: 4.5px;
  background-color: ${({ theme }) => theme.colors.lightGrey};
`;

export const Status = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.6;
  text-transform: capitalize;
`;

export const Label = styled.p`
  margin-top: 13px;
  color: ${({ theme }) => theme.colors.lightGrey};
  font-weight: 500;
  line-height: 1.7;
`;

export const Caption = styled.p`
  font-size: 18px;
  line-height: 1.6;
`;
