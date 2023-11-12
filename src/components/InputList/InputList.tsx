import { FC } from "react";
import { Input, InputBox } from "./InputList.styled";
import { InputListProps } from "../../constants/types";

export const InputList: FC<InputListProps> = ({ filters }) => {
  const character = filters.includes("Character");
  const location = filters.includes("Location");
  const episodes = filters.includes("Episodes");

  const condition = character || location || episodes;
  const typeCondition = character || location;

  return (
    <InputBox>
      {!condition && <Input name="keywords" type="text" placeholder="Add key words to find" />}
      {condition && <Input name="name" type="text" placeholder="Add Name" />}
      {typeCondition && <Input name="type" type="text" placeholder="Add Type" />}
      {character && <Input name="status" type="text" placeholder="Add Status" />}
      {character && <Input name="species" type="text" placeholder="Add Species" />}
      {character && <Input name="gender" type="text" placeholder="Add Gender" />}
      {location && <Input name="dimension" type="text" placeholder="Add Dimension" />}
      {episodes && <Input name="episode" type="text" placeholder="Add Episodes" />}
    </InputBox>
  );
};
