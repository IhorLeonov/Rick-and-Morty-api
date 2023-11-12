import styled from "styled-components";
import { Form } from "formik";

export const HomePage = styled.div`
  /* height: 100%; */
`;

export const FilterBox = styled.div`
  position: relative;
  display: flex;
  padding-bottom: 20px;
`;

export const FormikForm = styled(Form)`
  position: absolute;
  left: 315px;
  display: flex;
  gap: 28px;
  z-index: 2;
`;

export const Button = styled.button`
  padding: 0 16px;
  min-width: 143px;
  height: 57px;

  color: ${({ theme }) => theme.colors.darkGrey};
  background-color: ${({ theme }) => theme.colors.white};
  line-height: 1.5;
  letter-spacing: 0.5px;
  text-transform: uppercase;

  &:hover {
    color: ${({ theme }) => theme.colors.blue};
  }
`;

export const FilterBtn = styled(Button)``;

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

  &:hover {
    svg {
      fill: ${({ theme }) => theme.colors.blue};
    }
    color: ${({ theme }) => theme.colors.darkGrey};
  }
`;

export const SubmitBtn = styled(Button)``;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 33px;

  & nav button {
    border: none;
    background-color: ${({ theme }) => theme.colors.grey};
    color: ${({ theme }) => theme.colors.white};
    box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.12), 0px 2px 2px 0px rgba(0, 0, 0, 0.14),
      0px 1px 1px 0px rgba(0, 0, 0, 0.2);
  }

  & nav li div {
    color: ${({ theme }) => theme.colors.white};
  }
`;
