import { CharacterCard } from "../CharacterCard/CharacterCard";
import { List } from "./CardList.styled";

const cards = [
  {
    id: 1,
    name: "Aqua Rick",
    status: "unknown",
    species: "Humanoid",
    location: "Citadel of Ricks",
    episod: "Close Rick-counters of the Rick Kind",
  },
  {
    id: 2,
    name: "Aqua Rick",
    status: "unknown",
    species: "Humanoid",
    location: "Citadel of Ricks",
    episod: "Close Rick-counters of the Rick Kind",
  },
  {
    id: 3,
    name: "Aqua Rick",
    status: "unknown",
    species: "Humanoid",
    location: "Citadel of Ricks",
    episod: "Close Rick-counters of the Rick Kind",
  },
  {
    id: 3,
    name: "Aqua Rick",
    status: "unknown",
    species: "Humanoid",
    location: "Citadel of Ricks",
    episod: "Close Rick-counters of the Rick Kind",
  },
];

export const CardList = () => {
  return (
    <List>
      {cards.map((card) => (
        <CharacterCard
          key={card.id}
          name={card.name}
          status={card.status}
          species={card.species}
          location={card.location}
          episod={card.episod}
        />
      ))}
    </List>
  );
};
