import styled from "styled-components";
// import { Form } from "formik";

export const FilterBox = styled.div`
  display: flex;
`;

export const FormikForm = styled.form`
  position: relative;
  display: flex;
  margin-left: 161px;
  gap: 28px;
`;

export const Button = styled.button`
  padding: 0 16px;
  width: 143px;
  height: 57px;

  color: "#272B33";
  background-color: ${({ theme }) => theme.colors.lightColor};
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
