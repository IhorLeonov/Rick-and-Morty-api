import {
  CardItem,
  Image,
  Wrapper,
  Name,
  Status,
  Label,
  Caption,
  Indicator,
} from "./CharacterCard.styled";
import capImage from "../../assets/images/cap.jpg";
import { FC } from "react";

interface CharacterCardProps {
  name: string;
  status: string;
  species: string;
  location: string;
  episod: string;
}

export const CharacterCard: FC<CharacterCardProps> = ({
  name,
  status,
  species,
  location,
  episod,
}) => {
  return (
    <CardItem>
      <Image src={capImage} alt="Character picture" />
      <Wrapper>
        <Name>{name}</Name>
        <Status>
          <Indicator />
          <span>{status}</span>&nbsp;-&nbsp;<span>{species}</span>
        </Status>
        <Label style={{ fontSize: 15 }}>Last known location:</Label>
        <Caption>{location}</Caption>
        <Label>First seen in:</Label>
        <Caption>{episod}</Caption>
      </Wrapper>
    </CardItem>
  );
};
