import styled from "styled-components";
import { Form } from "formik";
import { Btn } from "../Button/Button.styled";

export const Title = styled.p`
  display: flex;
  align-items: center;
  padding: 8px 12px;
  width: 260px;
  height: 57px;

  line-height: 1.5;
  letter-spacing: 0.5px;
  border-bottom: 1px solid black;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.darkGrey};

  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
`;

export const FilterBox = styled.div`
  position: relative;
  display: flex;
`;

export const FormikForm = styled(Form)`
  position: absolute;
  left: 315px;
  display: flex;
  gap: 28px;
  z-index: 2;
`;

export const SelectButton = styled(Btn)`
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
