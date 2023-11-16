import { FC } from "react";
import { CardListProps } from "../../constants/types";
import { PagePagination } from "../PagePagination/PagePagination";
import {
  Image,
  Wrapper,
  Name,
  Caption,
  CardItem,
  Label,
} from "../CharacterItem/CharacterItem.styled";
import { List } from "../CharacterList/CharacterList.styled";
import image from "../../assets/images/location-img.jpeg";

export const LocationList: FC<CardListProps> = ({ locData, pages, page, setPage }) => {
  return (
    <>
      <List>
        {locData?.map(({ id, name, type, dimension }) => (
          <CardItem key={id}>
            <Image src={image} alt="Rick and Morty in portal" />
            <Wrapper>
              <Name style={{ color: "#FF9800" }}>{name}</Name>
              <Label>Type</Label>
              <Caption>{type}</Caption>
              <Label>Dimension</Label>
              <Caption>{dimension}</Caption>
            </Wrapper>
          </CardItem>
        ))}
      </List>
      <PagePagination pageQuantity={pages} page={page} setPage={setPage} />
    </>
  );
};
