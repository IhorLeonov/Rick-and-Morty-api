import { Character } from "../../constants/types";
import { checkStatus } from "../../helpers/helpers";
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

import { useLocation } from "react-router";

export const CharacterItem = ({
  id,
  name,
  image,
  status,
  species,
  location,
  episode,
}: Character) => {
  const routLocation = useLocation();

  return (
    <CardItem>
      <Image src={image} loading="lazy" alt="Character picture" />
      <Wrapper>
        <Link to={`/char/${id}`} state={{ from: routLocation }}>
          <Name>{name}</Name>
        </Link>
        <Status>
          <Indicator style={{ backgroundColor: checkStatus(status) }} />
          {status} - {species}
        </Status>
        <Label>Last known location:</Label>
        <Caption>{location.name}</Caption>
        <Label>First seen in:</Label>
        <Caption>{episode[0].name}</Caption>
      </Wrapper>
    </CardItem>
  );
};
