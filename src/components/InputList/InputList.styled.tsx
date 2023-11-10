import styled from "styled-components";
import { Field } from "formik";

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;

  :last-child {
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
  }

  :first-child {
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
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
