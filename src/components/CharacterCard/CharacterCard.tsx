import {
  CardItem,
  Image,
  Wrapper,
  Name,
  Status,
  Label,
  Caption,
  // Indicator,
} from "./CharacterCard.styled";
import { FC } from "react";
import { Card } from "../CardList/CardList";

export const CharacterCard: FC<Card> = ({ name, image, status, species, location, episode }) => {
  return (
    <CardItem>
      <Image src={image} alt="Character picture" />
      <Wrapper>
        <Name>{name}</Name>
        <Status>
          {/* <Indicator /> */}
          <span>{status}</span>&nbsp;-&nbsp;<span>{species}</span>
        </Status>
        <Label style={{ fontSize: 15 }}>Last known location:</Label>
        <Caption>{location.name}</Caption>
        <Label>First seen in:</Label>
        <Caption>{episode[0].name}</Caption>
      </Wrapper>
    </CardItem>
  );
};
