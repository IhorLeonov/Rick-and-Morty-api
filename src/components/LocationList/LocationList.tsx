import { FC } from "react";
import { CardListProps } from "../../constants/types";
import { PagePagination } from "../PagePagination/PagePagination";
import { List } from "./DataList.styled";

export const LocationList: FC<CardListProps> = ({ locData, pages, page, setPage }) => {
  return (
    <>
      <List>
        {locData?.map(({ id, name, type, dimension }) => (
          <li key={id} style={{ display: "flex" }}>
            <p style={{ color: "yellowgreen" }}> {name}</p>
            <p style={{ color: "blue" }}>{type}</p>
            <p style={{ color: "violet" }}>{dimension}</p>
          </li>
        ))}
      </List>
      <PagePagination pageQuantity={pages} page={page} setPage={setPage} />
    </>
  );
};
