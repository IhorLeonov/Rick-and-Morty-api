import { FC } from "react";
import { FilterBox, FormikForm, FilterBtn, SelectBtn, SubmitBtn, Input } from "./Home.styled";
import { Icon } from "../../helpers/IconSelector";

// import { Formik } from "formik";

// const list = ["Character", "Location", "Episodes"];

const Home: FC = () => {
  return (
    <>
      <FilterBox>
        <FilterBtn type="button">Filter</FilterBtn>
        {/* <Formik> */}
        <FormikForm action="">
          <SelectBtn type="button">
            Select Item <Icon name="v-icon" width={14} />
          </SelectBtn>
          <Input type="text" placeholder="Add key words to find" />
          <SubmitBtn type="submit">Find</SubmitBtn>
        </FormikForm>
        {/* </Formik> */}
      </FilterBox>

      <div>Cards</div>
      <div>Pagination</div>
    </>
  );
};

export default Home;
