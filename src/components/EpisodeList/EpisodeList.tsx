import { FC } from "react";
import { CardListProps } from "../../constants/types";
import { PagePagination } from "../PagePagination/PagePagination";

export const EpisodeList: FC<CardListProps> = ({ epiData, pages, page, setPage }) => {
  return (
    <>
      {epiData?.map(({ id, name, episode, air_date }) => (
        <div key={id} style={{ display: "flex" }}>
          <p style={{ color: "tomato" }}>{name}</p>
          <p style={{ color: "orange" }}> {episode}</p>
          <p style={{ color: "purple" }}>{air_date}</p>
        </div>
      ))}
      <PagePagination pageQuantity={pages} page={page} setPage={setPage} />
    </>
  );
};
