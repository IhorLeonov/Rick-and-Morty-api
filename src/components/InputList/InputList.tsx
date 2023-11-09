import { FC } from "react";
import { Input, List } from "./InputList.styled";

interface InputListProps {
  isListOpen: boolean;
  filters: string[];
}

export const InputList: FC<InputListProps> = ({ isListOpen, filters }) => {
  const character = filters.includes("Character");
  const location = filters.includes("Location");
  const episodes = filters.includes("Episodes");

  return (
    <List>
      {!isListOpen && (
        <li>
          <Input type="text" placeholder="Add key words to find" />
        </li>
      )}
      {isListOpen && (
        <li>
          <Input type="text" placeholder="Add Name" />
        </li>
      )}
      {character && (
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
