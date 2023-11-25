import { FC } from "react";
import { ListToggler } from "./ListToggle.styled";
import { ListToggleProps, ButtonListType } from "../../constants/types";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import {
  selectFilteredCharData,
  selectLocationsData,
  selectEpisodesData,
} from "../../redux/selectors";
import { Button } from "../Button/Button";
import { setListView } from "../../redux/mainSlice";

export const ListToggle: FC<ListToggleProps> = ({ listViewing }) => {
  const filtredCharData = useAppSelector(selectFilteredCharData);
  const locationsData = useAppSelector(selectLocationsData);
  const episodesData = useAppSelector(selectEpisodesData);
  const dispatch = useAppDispatch();

  const conditionChar = locationsData.length > 0 || episodesData.length > 0;
  const conditionLoc = filtredCharData.length > 0 || episodesData.length > 0;
  const conditionEpi = locationsData.length > 0 || filtredCharData.length > 0;

  const buttonList: ButtonListType[] = [
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
                style={{
                  color: checkIsActive(spec),
                  height: 42,
                  minWidth: 126,
                  fontWeight: 500,
                  textTransform: "none",
                }}
                type="button"
                onClick={() => dispatch(setListView(spec))}
              >
                {name}
              </Button>
            )}
          </div>
        );
      })}
    </ListToggler>
  );
};
