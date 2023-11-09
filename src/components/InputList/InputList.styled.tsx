import styled from "styled-components";

export const List = styled.ul`
  :first-child > input {
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
  }
  :last-child > input {
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
  }
`;

export const Input = styled.input`
  width: 260px;
  padding: 8px 12px;
  border: none;
  outline: none;
  height: 57px;

  line-height: 1.5;
  letter-spacing: 0.5px;
  border-bottom: 1px solid black;
`;
