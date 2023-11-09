import { FC, useState } from "react";
import { FilterBox, FormikForm, FilterBtn, SelectBtn, SubmitBtn } from "./Home.styled";
import { Icon } from "../../helpers/IconSelector";
import { CheckboxList } from "../../components/CheckboxList/CheckboxList";
import { InputList } from "../../components/InputList/InputList";

const Home: FC = () => {
  const [isListOpen, setIsListOpen] = useState<boolean>(false);
  const [checkboxFilters, setCheckboxFilters] = useState<string[]>([]);

  return (
    <>
      <FilterBox>
        <FilterBtn type="button">Filter</FilterBtn>
        {/* <Formik> */}
        <FormikForm action="">
          <SelectBtn type="button" onClick={() => setIsListOpen(!isListOpen)}>
            Select Item <Icon name="v-icon" width={14} />
          </SelectBtn>

          {isListOpen && <CheckboxList filters={checkboxFilters} setFilters={setCheckboxFilters} />}

          {/* <Input type="text" placeholder="Add key words to find" /> */}
          <InputList isListOpen={isListOpen} filters={checkboxFilters} />
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
