import { FC } from "react";
import { CharacterCard } from "../CharacterCard/CharacterCard";
import { List } from "./CardList.styled";

// const cards = [
//   {
//     id: 1,
//     name: "Aqua Rick",
//     status: "unknown",
//     species: "Humanoid",
//     location: "Citadel of Ricks",
//     episod: "Close Rick-counters of the Rick Kind",
//   },
//   {
//     id: 2,
//     name: "Aqua Rick",
//     status: "unknown",
//     species: "Humanoid",
//     location: "Citadel of Ricks",
//     episod: "Close Rick-counters of the Rick Kind",
//   },
//   {
//     id: 3,
//     name: "Aqua Rick",
//     status: "unknown",
//     species: "Humanoid",
//     location: "Citadel of Ricks",
//     episod: "Close Rick-counters of the Rick Kind",
//   },
//   {
//     id: 4,
//     name: "Aqua Rick",
//     status: "unknown",
//     species: "Humanoid",
//     location: "Citadel of Ricks",
//     episod: "Close Rick-counters of the Rick Kind",
//   },
// ];

export interface Card {
  id?: string;
  name: string;
  image: string;
  status: string;
  species: string;
  location: { name: string };
  //   episod: string;
}

interface CardListProps {
  allCharacters: Card[];
}

export const CardList: FC<CardListProps> = ({ allCharacters }) => {
  return (
    <List>
      {allCharacters?.map(({ id, name, image, status, species, location }) => (
        <CharacterCard
          key={id}
          name={name}
          image={image}
          status={status}
          species={species}
          location={location}
          //   episod={card.episod}
        />
      ))}
    </List>
  );
};
