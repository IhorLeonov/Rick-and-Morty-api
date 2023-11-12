import { Character } from "../../constants/types";
import {
  CardItem,
  Image,
  Wrapper,
  Link,
  Name,
  Status,
  Label,
  Caption,
  Indicator,
} from "./CharacterItem.styled";
import { FC } from "react";

export const CharacterItem: FC<Character> = ({
  id,
  name,
  image,
  status,
  species,
  location,
  episode,
}) => {
  const checkStatus = () => {
    if (status === "Alive") return "#5C4";
    if (status === "Dead") return "#D63D2E";
  };

  return (
    <CardItem>
      <Image src={image} alt="Character picture" />
      <Wrapper>
        <Link to={`/${id}`}>
          <Name>{name}</Name>
        </Link>
        <Status>
          <Indicator style={{ backgroundColor: checkStatus() }} />
          {status} - {species}
        </Status>
        <Label style={{ fontSize: 15 }}>Last known location:</Label>
        <Caption>{location.name}</Caption>
        <Label>First seen in:</Label>
        <Caption>{episode[0].name}</Caption>
      </Wrapper>
    </CardItem>
  );
};
