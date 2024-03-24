import { CharacterItem } from "../CharacterItem/CharacterItem";
import { List } from "./CharacterList.styled";
import { CardListProps } from "../../constants/types";
import { PagePagination } from "../PagePagination/PagePagination";

const CharacterList = ({ charData, page, pages, setPage }: CardListProps) => {
  return (
    <>
      <List>
        {charData?.map(({ ...props }) => (
          <CharacterItem key={props.id} {...props} />
        ))}
      </List>
      <PagePagination pageQuantity={pages} page={page} setPage={setPage} />
    </>
  );
};

export { CharacterList };
