import { FC } from "react";
import { CharacterItem } from "../CharacterItem/CharacterItem";
import { List } from "./CharacterList.styled";
import { CardListProps } from "../../constants/types";
import { PagePagination } from "../PagePagination/PagePagination";

const CharacterList: FC<CardListProps> = ({ charData, page, pages, setPage }) => {
  return (
    <>
      <List>
        {charData?.map(({ id, name, image, status, species, location, episode }) => (
          <CharacterItem
            key={id}
            id={id}
            name={name}
            image={image}
            status={status}
            species={species}
            location={location}
            episode={episode}
          />
        ))}
      </List>
      <PagePagination pageQuantity={pages} page={page} setPage={setPage} />
    </>
  );
};

export { CharacterList };
