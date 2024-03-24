import { Input, List } from "./InputList.styled";
import { InputListProps } from "../../constants/types";

export const InputList = ({ filters }: InputListProps) => {
  const character = filters.includes("Character");
  const location = filters.includes("Location");
  const episodes = filters.includes("Episodes");

  return (
    <List>
      {character && <Input name="charName" type="text" placeholder="Add character name" />}
      {character && <Input name="charType" type="text" placeholder="Add character type" />}
      {character && <Input name="status" type="text" placeholder="Add character status" />}
      {character && <Input name="species" type="text" placeholder="Add character species" />}
      {character && <Input name="gender" type="text" placeholder="Add character gender" />}
      {location && <Input name="locName" type="text" placeholder="Add location name" />}
      {location && <Input name="locType" type="text" placeholder="Add location type" />}
      {location && <Input name="dimension" type="text" placeholder="Add location dimension" />}
      {episodes && <Input name="epiName" type="text" placeholder="Add episode name" />}
      {episodes && <Input name="epiCode" type="text" placeholder="Add episode code" />}
    </List>
  );
};
