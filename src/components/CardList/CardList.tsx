import { FC } from "react";
import { CharacterCard } from "../CharacterCard/CharacterCard";
import { CharacterList } from "./CardList.styled";
import { Link } from "react-router-dom";

export interface Card {
  id?: string;
  name: string;
  image: string;
  status: string;
  species: string;
  location: { name: string };
  episode: [{ name: string }];
}

interface CardListProps {
  allCharacters: Card[];
}

export const CardList: FC<CardListProps> = ({ allCharacters }) => {
  return (
    <CharacterList>
      {allCharacters?.map(({ id, name, image, status, species, location, episode }) => (
        <Link to={`/${id}`} key={id}>
          <CharacterCard
            name={name}
            image={image}
            status={status}
            species={species}
            location={location}
            episode={episode}
          />
        </Link>
      ))}
    </CharacterList>
  );
};
