import { FC } from "react";
import { CharacterItem } from "../CharacterItem/CharacterItem";
import { CharacterList } from "./CardList.styled";

export interface Character {
  id?: string;
  name: string;
  image: string;
  status: string;
  species: string;
  info?: string;
  location: { name: string };
  episode: [{ name: string }];
}

interface CardListProps {
  characters: Character[];
}

export const CardList: FC<CardListProps> = ({ characters }) => {
  return (
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
  );
};
