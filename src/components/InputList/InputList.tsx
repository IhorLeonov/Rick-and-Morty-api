import { FC } from "react";
import { Input, List } from "./InputList.styled";

interface InputListProps {
  filters: string[];
}

export const InputList: FC<InputListProps> = ({ filters }) => {
  const character = filters.includes("Character");
  const location = filters.includes("Location");
  const episodes = filters.includes("Episodes");

  const condition = character || location || episodes;
  const typeCondition = character || location;

  return (
    <List>
      {!condition && (
        <li>
          <Input type="text" placeholder="Add key words to find" />
        </li>
      )}
      {condition && (
        <li>
          <Input type="text" placeholder="Add Name" />
        </li>
      )}
      {typeCondition && (
        <li>
          <Input type="text" placeholder="Add Type" />
        </li>
      )}
      {character && (
        <li>
          <Input type="text" placeholder="Add Status" />
        </li>
      )}
      {character && (
        <li>
          <Input type="text" placeholder="Add Species" />
        </li>
      )}
      {character && (
        <li>
          <Input type="text" placeholder="Add Gender" />
        </li>
      )}
      {location && (
        <li>
          <Input type="text" placeholder="Add Dimension" />
        </li>
      )}
      {episodes && (
        <li>
          <Input type="text" placeholder="Add Episodes" />
        </li>
      )}
    </List>
  );
};
