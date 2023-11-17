import { FC } from "react";
import { CharacterItem } from "../CharacterItem/CharacterItem";
import { List } from "./CharacterList.styled";
import { CardListProps } from "../../constants/types";
import { PagePagination } from "../PagePagination/PagePagination";
import { useAppSelector } from "../../redux/store";
import {
  selectCharactersData,
  selectCharactersPages,
  selectCharactersPage,
} from "../../redux/selectors";
import { setCharactersPage } from "../../redux/mainSlice";

const CharacterList: FC<CardListProps> = () => {
  const charactersData = useAppSelector(selectCharactersData);
  const charactersPages = useAppSelector(selectCharactersPages);
  const charactersPage = useAppSelector(selectCharactersPage);
  // console.log("page", charactersPage);

  return (
    <>
      <List>
        {charactersData?.map(({ id, name, image, status, species, location, episode }) => (
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
      <PagePagination
        pageQuantity={charactersPages}
        page={charactersPage}
        setPage={setCharactersPage}
      />
    </>
  );
};

export { CharacterList };
