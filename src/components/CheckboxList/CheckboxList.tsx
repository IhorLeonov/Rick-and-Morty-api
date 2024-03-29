import { Checkbox, FormControlLabel } from "@mui/material";
import { FilterList, FilterItem } from "./CheckboxList.styled";
import { ChangeEvent } from "react";
import { CheckboxListProps } from "../../constants/types";

export const CheckboxList = ({ filters, setFilters }: CheckboxListProps) => {
  const filterList = ["Character", "Location", "Episodes"];

  const handleFilterChange = (event: ChangeEvent<HTMLInputElement>) => {
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
          <FilterItem key={filter}>
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
          </FilterItem>
        );
      })}
    </FilterList>
  );
};
