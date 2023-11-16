import { FC } from "react";
import { ListToggler, ToggleButton } from "./ListToggle.styled";
import { ListToggleProps } from "../../constants/types";

export const ListToggle: FC<ListToggleProps> = ({
  listViewing,
  setListViewing,
  filtredCharData,
  locationData,
  episodesData,
}) => {
  const conditionChar = locationData.length > 0 || episodesData.length > 0;
  const conditionLoc = filtredCharData.length > 0 || episodesData.length > 0;
  const conditionEpi = locationData.length > 0 || filtredCharData.length > 0;

  const checkIsActive = (list: string) => {
    if (listViewing === list) return "#FF9800";
    return "#272B33";
  };

  return (
    <ListToggler>
      {filtredCharData.length > 0 && conditionChar && (
        <ToggleButton
          style={{ color: checkIsActive("char") }}
          type="button"
          onClick={() => setListViewing("char")}
        >
          Characters
        </ToggleButton>
      )}
      {locationData.length > 0 && conditionLoc && (
        <ToggleButton
          style={{ color: checkIsActive("loc") }}
          type="button"
          onClick={() => setListViewing("loc")}
        >
          Locations
        </ToggleButton>
      )}
      {episodesData.length > 0 && conditionEpi && (
        <ToggleButton
          style={{ color: checkIsActive("epi") }}
          type="button"
          onClick={() => setListViewing("epi")}
        >
          Episodes
        </ToggleButton>
      )}
    </ListToggler>
  );
};
