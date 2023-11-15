import { FC } from "react";
import { ListToggler, ToggleButton } from "./ListToggle.styled";
import { Episode, Location } from "../../constants/types";

interface ListToggleProps {
  setListViewing: React.Dispatch<React.SetStateAction<string>>;
  locationData: Location[];
  episodeData: Episode[];
}

export const ListToggle: FC<ListToggleProps> = ({ setListViewing, locationData, episodeData }) => {
  const condition = locationData.length > 0 || episodeData.length > 0;

  return (
    <ListToggler>
      {condition && (
        <ToggleButton type="button" onClick={() => setListViewing("char")}>
          Characters
        </ToggleButton>
      )}
      {locationData.length > 0 && (
        <ToggleButton type="button" onClick={() => setListViewing("loc")}>
          Locations
        </ToggleButton>
      )}
      {episodeData.length > 0 && (
        <ToggleButton type="button" onClick={() => setListViewing("epi")}>
          Episodes
        </ToggleButton>
      )}
    </ListToggler>
  );
};
