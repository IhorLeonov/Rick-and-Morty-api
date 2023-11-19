import { Formik } from "formik";
import { Icon } from "../../helpers/IconSelector";
import { CheckboxList } from "../CheckboxList/CheckboxList";
import { InputList } from "../InputList/InputList";
import { FilterBox, FormikForm, SelectButton, Title } from "./Filter.styled";
import { FilterProps, FormInputValues } from "../../constants/types";
import { FC, useState } from "react";
import { initialValues } from "../../constants/values";
import { Backdrop } from "@mui/material";
import { setInputValues, resetData } from "../../redux/mainSlice";
import { useAppDispatch } from "../../redux/store";
import { Button } from "../Button/Button";

export const Filter: FC<FilterProps> = ({ setIsFilterApplied }) => {
  const dispatch = useAppDispatch();

  const [checkboxFilters, setCheckboxFilters] = useState<string[]>([]);
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);
  const [isFilterListOpen, setIsFilterListOpen] = useState<boolean>(false);

  const handleCloseList = () => {
    setIsFilterListOpen(!isFilterListOpen);
  };

  const handleRemoveFilter = () => {
    setCheckboxFilters([]);
    setIsFilterApplied(false);
    setIsFilterOpen(!isFilterOpen);
    dispatch(resetData());
  };

  const handleSubmit = (values: FormInputValues) => {
    dispatch(setInputValues(values));
    setIsFilterListOpen(false);
    setIsFilterApplied(true);
  };

  return (
    <>
      <FilterBox>
        <Button
          type={"button"}
          text={isFilterOpen ? "Remove filter" : "Filter"}
          onClick={handleRemoveFilter}
        />
        <Formik
          initialValues={initialValues}
          // validationSchema={ContactSchema}
          onSubmit={(values, actions) => {
            handleSubmit(values);
            actions.resetForm();
          }}
        >
          {isFilterOpen && (
            <FormikForm>
              <SelectButton type="button" onClick={handleCloseList}>
                Select Item <Icon name="v-icon" width={14} height={14} />
              </SelectButton>
              {isFilterListOpen && (
                <CheckboxList filters={checkboxFilters} setFilters={setCheckboxFilters} />
              )}
              <Title>Add key words to find</Title>
              {isFilterListOpen && <InputList filters={checkboxFilters} />}
              <Button type="submit" text={"Find"} />
            </FormikForm>
          )}
        </Formik>
      </FilterBox>
      <Backdrop sx={{ zIndex: 1 }} open={isFilterListOpen} onClick={handleCloseList} />
    </>
  );
};
