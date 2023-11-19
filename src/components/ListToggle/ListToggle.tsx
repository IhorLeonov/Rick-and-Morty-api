import { FC } from "react";
import { ListToggler } from "./ListToggle.styled";
import { ListToggleProps } from "../../constants/types";
import { useAppSelector } from "../../redux/store";
import {
  selectFilteredCharData,
  selectLocationsData,
  selectEpisodesData,
} from "../../redux/selectors";
import { Button } from "../Button/Button";

export const ListToggle: FC<ListToggleProps> = ({ listViewing, setListViewing }) => {
  const filtredCharData = useAppSelector(selectFilteredCharData);
  const locationsData = useAppSelector(selectLocationsData);
  const episodesData = useAppSelector(selectEpisodesData);

  const conditionChar = locationsData.length > 0 || episodesData.length > 0;
  const conditionLoc = filtredCharData.length > 0 || episodesData.length > 0;
  const conditionEpi = locationsData.length > 0 || filtredCharData.length > 0;

  const buttonList = [
    { name: "Characters", data: filtredCharData, condition: conditionChar, spec: "char" },
    { name: "Locations", data: locationsData, condition: conditionLoc, spec: "loc" },
    { name: "Episodes", data: episodesData, condition: conditionEpi, spec: "epi" },
  ];

  const checkIsActive = (list: string) => {
    if (listViewing === list) return "#FF9800";
    return "#272B33";
  };

  return (
    <ListToggler>
      {buttonList.map(({ data, condition, name, spec }) => {
        return (
          <div key={name}>
            {data.length > 0 && condition && (
              <Button
                styles={{
                  color: checkIsActive(spec),
                  height: 42,
                  minWidth: 126,
                  fontWeight: 500,
                  textTransform: "none",
                }}
                type={"button"}
                onClick={() => setListViewing(spec)}
                text={name}
              ></Button>
            )}
          </div>
        );
      })}
    </ListToggler>
  );
};
