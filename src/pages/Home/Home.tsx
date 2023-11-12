import { FC, useEffect, useState } from "react";
import { FilterBox, FormikForm, FilterBtn, SelectBtn, SubmitBtn, HomePage } from "./Home.styled";

import { Icon } from "../../helpers/IconSelector";
import { CheckboxList } from "../../components/CheckboxList/CheckboxList";
import { InputList } from "../../components/InputList/InputList";
import { Backdrop } from "@mui/material";
import { Formik } from "formik";
import { CardList } from "../../components/CardList/CardList";
import { useAllCharacters } from "../../hooks/useGetAllCharacters";
import { PagePagination } from "../../components/PagePagination/PagePagination";
import { Character, FormInitialValues } from "../../constants/types";
import { useGetFilteredData } from "../../hooks/useGetFilteredData";

const initialValues = {
  keywords: "",
  name: "",
  type: "",
  status: "",
  species: "",
  gender: "",
  dimension: "",
  episode: "",
};

const Home: FC = () => {
  const [checkboxFilters, setCheckboxFilters] = useState<string[]>([]);
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);
  const [isFilterListOpen, setIsFilterListOpen] = useState<boolean>(false);
  //redux state
  const [page, setPage] = useState<number>(1);
  const [pageQuantity, setPageQuantity] = useState<number>(0);
  const [dataArray, setDataArray] = useState<Character[]>([]);
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  //filter slice
  const [isFilterApplied, setIsFilterApplied] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [type, setType] = useState<string>("");
  const [species, setSpecies] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  // const [dimension, setDimension] = useState<string>("");
  // const [episodeCode, setEpisodeCode] = useState<string>("");

  const allCharacters = useAllCharacters(page);
  const filtredCharacters = useGetFilteredData(page, name, status, type, species, gender);

  useEffect(() => {
    if (allCharacters.data && !isFilterApplied) {
      const { data, error, loading } = allCharacters;
      if (error) return setError(error?.message);
      setPageQuantity(data.characters.info?.pages);
      setDataArray(data.characters?.results);
      setIsLoading(loading);
    }
    if (filtredCharacters.data && isFilterApplied) {
      const { data, error, loading } = filtredCharacters;
      if (error) return setError(error?.message);
      setPageQuantity(data.characters.info?.pages);
      setDataArray(data.characters?.results);
      setIsLoading(loading);
    }
    if (page > 1) {
      window.scroll({
        top: 400,
        left: 0,
        behavior: "smooth",
      });
    }
  }, [allCharacters, filtredCharacters, isFilterApplied, page]);

  const handleRemoveFilter = () => {
    setIsFilterOpen(!isFilterOpen);
    setIsFilterApplied(false);
    setPage(1);
  };

  const handleCloseList = () => {
    setIsFilterListOpen(!isFilterListOpen);
    setCheckboxFilters([]);
  };

  const handleSubmit = (values: FormInitialValues) => {
    setName(values.name);
    setStatus(values.status);
    setType(values.type);
    setSpecies(values.species);
    setGender(values.gender);
    // setDimension(values.dimension);
    // setEpisodeCode(values.episode);
    filtredCharacters.getFilterdData();
    console.log(values);
  };

  if (error) return <p>Something wrong</p>;
  return (
    <HomePage>
      <FilterBox>
        <FilterBtn type="button" onClick={handleRemoveFilter}>
          {isFilterOpen ? "Remove filter" : "Filter"}
        </FilterBtn>
        <Formik
          initialValues={initialValues}
          // validationSchema={ContactSchema}
          onSubmit={(values, actions) => {
            // const { name, number } = values;
            handleSubmit(values);
            actions.resetForm();
            handleCloseList();
            setIsFilterApplied(true);
          }}
        >
          {isFilterOpen && (
            <FormikForm action="">
              <SelectBtn type="button" onClick={handleCloseList}>
                Select Item <Icon name="v-icon" width={14} />
              </SelectBtn>
              {isFilterListOpen && (
                <CheckboxList filters={checkboxFilters} setFilters={setCheckboxFilters} />
              )}
              <InputList filters={checkboxFilters} />
              <SubmitBtn type="submit">Find</SubmitBtn>
            </FormikForm>
          )}
        </Formik>
        <Backdrop sx={{ zIndex: 1 }} open={isFilterListOpen} onClick={handleCloseList}></Backdrop>
      </FilterBox>
      {isLoading && <p>Loading...</p>}
      {!isLoading && dataArray && <CardList characters={dataArray} />}
      <PagePagination pageQuantity={pageQuantity} page={page} setPage={setPage} />
    </HomePage>
  );
};

export default Home;
