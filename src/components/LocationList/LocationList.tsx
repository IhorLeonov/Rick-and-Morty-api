import { FC } from "react";
import { CardListProps } from "../../constants/types";
import { PagePagination } from "../PagePagination/PagePagination";

// export interface LocationListProps {
//   data: Location[];
// }

export const LocationList: FC<CardListProps> = ({ locData, pages, page, setPage }) => {
  return (
    <>
      {locData?.map(({ id, name, type, dimension }) => (
        <div key={id} style={{ display: "flex" }}>
          <p style={{ color: "yellowgreen" }}> {name}</p>
          <p style={{ color: "blue" }}>{type}</p>
          <p style={{ color: "violet" }}>{dimension}</p>
        </div>
      ))}
      <PagePagination pageQuantity={pages} page={page} setPage={setPage} />
    </>
  );
};
