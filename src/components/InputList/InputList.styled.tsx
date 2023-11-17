import styled from "styled-components";
import { Field } from "formik";

export const List = styled.div`
  position: absolute;
  left: 241px;
  display: flex;
  flex-direction: column;

  :last-child {
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
  }

  :first-child {
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
  }
`;

export const Input = styled(Field)`
  width: 260px;
  padding: 8px 12px;
  border: none;
  outline: none;
  height: 57px;

  line-height: 1.5;
  letter-spacing: 0.5px;
  border-bottom: 1px solid black;
`;
