import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 33px;

  & nav button {
    border: none;
    box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.12), 0px 2px 2px 0px rgba(0, 0, 0, 0.14),
      0px 1px 1px 0px rgba(0, 0, 0, 0.2);
  }

  & nav li div {
    color: ${({ theme }) => theme.colors.white};
  }
`;
