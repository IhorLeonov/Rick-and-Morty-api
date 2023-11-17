import { Formik } from "formik";
import { Icon } from "../../helpers/IconSelector";
import { CheckboxList } from "../CheckboxList/CheckboxList";
import { InputList } from "../InputList/InputList";
import { FilterBox, FilterBtn, FormikForm, SelectBtn, SubmitBtn, Title } from "./Filter.styled";
import { FilterProps, FormInputValues } from "../../constants/types";
import { FC, useState } from "react";
import { initialValues } from "../../constants/values";
import { Backdrop } from "@mui/material";
import { setCharactersPage } from "../../redux/mainSlice";

export const Filter: FC<FilterProps> = ({
  setInputValues,
  filtredChars,
  setListViewing,
  location,
  episodes,
  setIsFilterApplied,
  // setCharactersPage,
  setFiltredCharPage,
  setLocationPage,
  setEpisodesPage,
  setFiltredCharData,
  setLocationData,
  setEpisodesData,
}) => {
  const [checkboxFilters, setCheckboxFilters] = useState<string[]>([]);
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);
  const [isFilterListOpen, setIsFilterListOpen] = useState<boolean>(false);

  const handleCloseList = () => {
    setIsFilterListOpen(!isFilterListOpen);
  };

  const handleRemoveFilter = () => {
    setIsFilterOpen(!isFilterOpen);
    setIsFilterApplied(false);
    setCharactersPage(1);
    setFiltredCharPage(1);
    setLocationPage(1);
    setEpisodesPage(1);
    setFiltredCharData([]);
    setLocationData([]);
    setEpisodesData([]);
    setListViewing("all");
    setInputValues(initialValues);
    setCheckboxFilters([]);
  };

  const handleSubmit = (values: FormInputValues) => {
    setInputValues(values);
    handleCloseList();

    if (values.epiName || values.epiCode) {
      episodes.getEpisode();
      setListViewing("epi");
    }
    if (values.locName || values.locType || values.dimension) {
      location.getLocation();
      setListViewing("loc");
    }
    if (values.charName || values.status || values.charType || values.species || values.gender) {
      filtredChars.getFilterdData();
      setListViewing("char");
    }
  };

  return (
    <>
      <FilterBox>
        <FilterBtn type="button" onClick={handleRemoveFilter}>
          {isFilterOpen ? "Remove filter" : "Filter"}
        </FilterBtn>
        <Formik
          initialValues={initialValues}
          // validationSchema={ContactSchema}
          onSubmit={(values, actions) => {
            handleSubmit(values);
            setIsFilterApplied(true);
            actions.resetForm();
          }}
        >
          {isFilterOpen && (
            <FormikForm>
              <SelectBtn type="button" onClick={handleCloseList}>
                Select Item <Icon name="v-icon" width={14} height={14} />
              </SelectBtn>
              {isFilterListOpen && (
                <CheckboxList filters={checkboxFilters} setFilters={setCheckboxFilters} />
              )}
              <Title>Add key words to find</Title>
              {isFilterListOpen && <InputList filters={checkboxFilters} />}
              <SubmitBtn type="submit">Find</SubmitBtn>
            </FormikForm>
          )}
        </Formik>
      </FilterBox>
      <Backdrop sx={{ zIndex: 1 }} open={isFilterListOpen} onClick={handleCloseList} />
    </>
  );
};