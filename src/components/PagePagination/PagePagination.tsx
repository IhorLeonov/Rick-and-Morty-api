import { FC } from "react";
import { Wrapper } from "./PagePagination.styled";
import { Pagination } from "@mui/material";
import { PagePaginationProps } from "../../constants/types";
import { useAppDispatch } from "../../redux/store";

export const PagePagination: FC<PagePaginationProps> = ({ pageQuantity, page, setPage }) => {
  const dispatch = useAppDispatch();
  if (pageQuantity < 1) return <p>No data for your request</p>; // добавить ошибку что ничего не найдено

  return (
    <Wrapper>
      <Pagination
        count={pageQuantity}
        page={page}
        onChange={(_, num) => dispatch(setPage(num))}
        variant="outlined"
        shape="rounded"
        sx={{
          button: {
            backgroundColor: "#3C3E44",
            color: "#F5F5F5",
          },
          ".css-19xm0h7-MuiButtonBase-root-MuiPaginationItem-root.Mui-disabled": {
            backgroundColor: "#9E9E9E",
            color: "#202329",
          },
          ".css-19xm0h7-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected": {
            backgroundColor: "#F5F5F5 !important",
            color: "#202329",
          },
          ".css-2gftvx.Mui-selected": {
            backgroundColor: "#F5F5F5 !important",
            color: "#202329",
          },
          "button:hover": {
            backgroundColor: "#FF9800",
            color: "#202329",
          },
          "li:first-of-type button": {
            backgroundColor: "#F5F5F5",
            color: "#202329",
          },
          "li:last-child button": {
            backgroundColor: "#F5F5F5",
            color: "#202329",
          },
        }}
      />
    </Wrapper>
  );
};
