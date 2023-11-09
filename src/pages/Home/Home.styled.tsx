import styled from "styled-components";
// import { Form } from "formik";

export const FilterBox = styled.div`
  display: flex;
`;

export const FormikForm = styled.form`
  display: flex;
  margin-left: 161px;
  gap: 28px;
`;

export const Button = styled.button`
  padding: 0 16px;
  min-width: 143px;
  height: 57px;

  color: "#272B33";
  background-color: "#F5F5F5";
  line-height: 1.5;
  letter-spacing: 0.5px;
  text-transform: uppercase;
`;

export const SelectBtn = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 20px 8px 12px;
  width: 213px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border-bottom: 1px solid black;
  text-transform: none;
`;

export const FilterBtn = styled(Button)``;

export const SubmitBtn = styled(Button)``;

export const Input = styled.input`
  width: 260px;
  padding: 8px 12px;
  border: none;
  outline: none;
  height: 57;

  line-height: 1.5;
  letter-spacing: 0.5px;
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
  border-bottom: 1px solid black;
`;
