import { FC } from "react";
import { Input, InputBox } from "./InputList.styled";
import { InputListProps } from "../../constants/types";

export const InputList: FC<InputListProps> = ({ filters }) => {
  const character = filters.includes("Character");
  const location = filters.includes("Location");
  const episodes = filters.includes("Episodes");

  const condition = character || location || episodes;
  // const typeCondition = character || location;

  return (
    <InputBox>
      {!condition && <Input name="keywords" type="text" placeholder="Add key words to find" />}
      {character && <Input name="charName" type="text" placeholder="Add Character Name" />}
      {character && <Input name="charType" type="text" placeholder="Add Character Type" />}
      {character && <Input name="status" type="text" placeholder="Add Status" />}
      {character && <Input name="species" type="text" placeholder="Add Species" />}
      {character && <Input name="gender" type="text" placeholder="Add Gender" />}
      {location && <Input name="locationName" type="text" placeholder="Add Location Name" />}
      {location && <Input name="locationType" type="text" placeholder="Add Location Type" />}
      {location && <Input name="dimension" type="text" placeholder="Add Dimension" />}
      {episodes && <Input name="episodeName" type="text" placeholder="Add Episode Name" />}
      {episodes && <Input name="episode" type="text" placeholder="Add Episodes" />}
    </InputBox>
  );
};
