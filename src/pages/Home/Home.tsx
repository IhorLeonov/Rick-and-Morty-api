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

  const [characters, setCharacters] = useState<Character[]>([]);
  const [page, setPage] = useState<number>(1);
  const [pageQuantity, setPageQuantity] = useState<number>(0);

  const { loading, error, data } = useAllCharacters(page);

  useEffect(() => {
    if (data) {
      setPageQuantity(data.characters.info.pages);
      setCharacters(data.characters.results);
    }
  }, [data, page]);

  if (error) return <p>Something wrong</p>;
  // if (data) console.log(data);

  const handleCloseFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const handleCloseList = () => {
    setIsFilterListOpen(!isFilterListOpen);
  };

  const handleSubmit = (values: FormInitialValues) => {
    console.log(values);
  };

  return (
    <HomePage>
      <FilterBox>
        <FilterBtn type="button" onClick={handleCloseFilter}>
          {isFilterOpen ? "Remove filter" : "Filter"}
        </FilterBtn>
        <Formik
          initialValues={initialValues}
          // validationSchema={ContactSchema}
          onSubmit={(values, actions) => {
            // const { name, number } = values;
            handleSubmit(values);
            actions.resetForm();
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
      {/* {loading && <p>Loading...</p>} */}
      {!loading && data && <CardList characters={characters} />}
      <PagePagination pageQuantity={pageQuantity} page={page} setPage={setPage} />
    </HomePage>
  );
};

export default Home;
