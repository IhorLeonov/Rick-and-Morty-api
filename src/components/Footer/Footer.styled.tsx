import styled from "styled-components";

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 393px;
  color: ${({ theme }) => theme.colors.lightGrey};
  background-color: ${({ theme }) => theme.colors.darkerGrey};
`;

export const Caption = styled.p`
  margin-bottom: 34px;
  width: 212px;
  font-size: 13.5px;
  font-weight: 700;
  line-height: 1.6;

  text-align: center;
  text-transform: uppercase;
`;

export const LogoImg = styled.img`
  width: 50px;
  height: 50px;
  margin-bottom: 56px;
  border-radius: 50%;
  box-shadow: 0px 0px 70px 0px rgba(255, 255, 255, 0.8);
`;

export const LinkBox = styled.div`
  display: flex;
  gap: 27px;
  margin-bottom: 23px;
`;

export const Link = styled.a`
  fill: ${({ theme }) => theme.colors.lightGrey};

  &:hover,
  &:focus {
    svg {
      scale: 1.2;
      fill: ${({ theme }) => theme.colors.orange};
    }
  }
`;

export const Year = styled.p`
  font-size: 12.5px;
  font-weight: 400;
  line-height: 1.76;
`;
