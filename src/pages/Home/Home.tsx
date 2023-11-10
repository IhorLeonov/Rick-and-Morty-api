import { FC, useState } from "react";
import { FilterBox, FormikForm, FilterBtn, SelectBtn, SubmitBtn } from "./Home.styled";
import { Icon } from "../../helpers/IconSelector";
import { CheckboxList } from "../../components/CheckboxList/CheckboxList";
import { InputList } from "../../components/InputList/InputList";
import { Backdrop } from "@mui/material";
import { Formik } from "formik";

interface InitialValues {
  [k: string]: string;
}

const initialValues = {
  keywords: "",
  name: "",
  type: "",
  status: "",
  species: "",
  gender: "",
  dimension: "",
  episod: "",
};

const Home: FC = () => {
  const [openFilter, setOpenFilter] = useState<boolean>(false);
  const [isListOpen, setIsListOpen] = useState<boolean>(false);
  const [checkboxFilters, setCheckboxFilters] = useState<string[]>([]);

  const handleCloseFilter = () => {
    setOpenFilter(!openFilter);
  };

  const handleCloseList = () => {
    setIsListOpen(!isListOpen);
  };

  const handleSubmit = (values: InitialValues) => {
    console.log(values);
  };

  return (
    <>
      <FilterBox>
        <FilterBtn type="button" onClick={handleCloseFilter}>
          {openFilter ? "Remove filter" : "Filter"}
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
          {openFilter && (
            <FormikForm action="">
              <SelectBtn type="button" onClick={handleCloseList}>
                Select Item <Icon name="v-icon" width={14} />
              </SelectBtn>
              {isListOpen && (
                <CheckboxList filters={checkboxFilters} setFilters={setCheckboxFilters} />
              )}
              <InputList filters={checkboxFilters} />
              <SubmitBtn type="submit">Find</SubmitBtn>
            </FormikForm>
          )}
        </Formik>
        <Backdrop sx={{ zIndex: 1 }} open={isListOpen} onClick={handleCloseList}></Backdrop>
      </FilterBox>

      {/* <div>Cards</div>
      <div>Pagination</div> */}
    </>
  );
};

export default Home;
