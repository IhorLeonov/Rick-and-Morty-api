import { FC } from "react";
import { ListToggler, ToggleButton } from "./ListToggle.styled";

interface ListToggleProps {
  setListViewing: React.Dispatch<React.SetStateAction<string>>;
}

export const ListToggle: FC<ListToggleProps> = ({ setListViewing }) => {
  return (
    <ListToggler>
      <ToggleButton type="button" onClick={() => setListViewing("char")}>
        Characters
      </ToggleButton>
      <ToggleButton type="button" onClick={() => setListViewing("loc")}>
        Locations
      </ToggleButton>
      <ToggleButton type="button" onClick={() => setListViewing("epi")}>
        Episodes
      </ToggleButton>
    </ListToggler>
  );
};
