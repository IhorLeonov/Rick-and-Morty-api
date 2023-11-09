import { Checkbox, FormControlLabel } from "@mui/material";
import { FilterList } from "./CheckboxList.styled";
import { FC, Dispatch, SetStateAction } from "react";

interface CheckboxListProps {
  filters: string[];
  setFilters: Dispatch<SetStateAction<string[]>>;
}

export const CheckboxList: FC<CheckboxListProps> = ({ filters, setFilters }) => {
  const filterList = ["Character", "Location", "Episodes"];

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const index = filters.indexOf(event.target.value);
    if (index === -1) {
      setFilters([...filters, event.target.value]);
    } else {
      setFilters(filters.filter((filter) => filter !== event.target.value));
    }
  };

  return (
    <FilterList>
      {filterList.map((filter) => {
        return (
          <li key={filter}>
            <FormControlLabel
              control={
                <Checkbox
                  value={filter}
                  checked={filters.includes(filter)}
                  onChange={handleFilterChange}
                />
              }
              label={filter}
              labelPlacement="start"
              sx={{
                color: "#272B33",
                width: 213,
                height: 57,
                margin: 0,
                display: "flex",
                justifyContent: "space-between",
                padding: "8px 16px",
              }}
            />
          </li>
        );
      })}
    </FilterList>
  );
};
