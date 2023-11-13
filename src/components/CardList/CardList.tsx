import { FC } from "react";
import { CharacterItem } from "../CharacterItem/CharacterItem";
import { CharacterList } from "./CardList.styled";
import { CardListProps } from "../../constants/types";

export const CardList: FC<CardListProps> = ({ characters }) => {
  return (
    <>
      <CharacterList>
        {characters?.map(({ id, name, image, status, species, location, episode }) => (
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
      </CharacterList>
    </>
  );
};
