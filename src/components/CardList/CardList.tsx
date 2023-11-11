import { FC } from "react";
import { CharacterItem } from "../CharacterItem/CharacterItem";
import { CharacterList } from "./CardList.styled";

export interface CharacterCard {
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
  allCharacters: CharacterCard[];
}

export const CardList: FC<CardListProps> = ({ allCharacters }) => {
  return (
    <CharacterList>
      {allCharacters?.map(({ id, name, image, status, species, location, episode }) => (
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
