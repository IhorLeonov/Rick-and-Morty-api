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
import image from "../../assets/images/episode-img.png";

export const EpisodeList = ({ epiData, pages, page, setPage }: CardListProps) => {
  return (
    <>
      <List>
        {epiData?.map(({ id, name, episode, air_date }) => (
          <CardItem key={id} style={{ display: "flex" }}>
            <Image src={image} alt="Rick and Morty in portal" />
            <Wrapper>
              <Name style={{ color: "#FF9800" }}>{name}</Name>
              <Label>Episode</Label>
              <Caption>{episode}</Caption>
              <Label>Air date</Label>
              <Caption>{air_date}</Caption>
            </Wrapper>
          </CardItem>
        ))}
      </List>
      <PagePagination pageQuantity={pages} page={page} setPage={setPage} />
    </>
  );
};
