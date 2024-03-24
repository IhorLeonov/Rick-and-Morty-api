import { Formik } from "formik";
import { Icon } from "../../helpers/IconSelector";
import { CheckboxList } from "../CheckboxList/CheckboxList";
import { InputList } from "../InputList/InputList";
import { FilterBox, FormikForm, SelectButton, Title } from "./Filter.styled";
import { FilterProps, FormInputValues } from "../../constants/types";
import { useState } from "react";
import { initialValues } from "../../constants/values";
import { Backdrop } from "@mui/material";
import { setInputValues, resetData, setListView } from "../../redux/mainSlice";
import { setHistoryData } from "../../redux/historySlice";

import { useAppDispatch } from "../../redux/store";
import { Button } from "../Button/Button";
import { getFilteredHistory } from "../../helpers/helpers";

export const Filter = ({ setIsFilterApplied }: FilterProps) => {
  const dispatch = useAppDispatch();
  const [checkboxFilters, setCheckboxFilters] = useState<string[]>([]);
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);
  const [isFilterListOpen, setIsFilterListOpen] = useState<boolean>(false);

  const handleCloseList = () => {
    setIsFilterListOpen(!isFilterListOpen);
  };

  const handleRemoveFilter = () => {
    dispatch(setListView("all"));
    setCheckboxFilters([]);
    setIsFilterApplied(false);
    setIsFilterOpen(!isFilterOpen);
    dispatch(resetData());
  };

  const resetFilter = () => {}; // !!!!!!!!!

  const handleSubmit = (values: FormInputValues) => {
    const history = getFilteredHistory(values);
    console.log("values on Submit", values);

    dispatch(setHistoryData(history));
    dispatch(setInputValues(values));
    setIsFilterListOpen(false);
    setIsFilterApplied(true);

    resetFilter();
  };

  return (
    <>
      <FilterBox>
        <Button type="button" onClick={handleRemoveFilter}>
          {isFilterOpen ? "Remove filter" : "Filter"}
        </Button>

        <Formik
          initialValues={initialValues}
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
              <Button type="submit">Find</Button>
            </FormikForm>
          )}
        </Formik>
      </FilterBox>

      <Backdrop sx={{ zIndex: 1 }} open={isFilterListOpen} onClick={handleCloseList} />
    </>
  );
};
