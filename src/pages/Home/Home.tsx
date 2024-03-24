import { useEffect, useState } from "react";
import { ListToggle } from "../../components/ListToggle/ListToggle";
import { Filter } from "../../components/Filter/Filter";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { selectData, selectInputValues, selectListView } from "../../redux/selectors";
import {
  getAllCharacters,
  getEpisodes,
  getFilteredChars,
  getLocations,
} from "../../redux/operations";
import { DataLists } from "../../components/DataLists/DataLists";
import { setListView } from "../../redux/mainSlice";

const Home = () => {
  const [isFilterApplied, setIsFilterApplied] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const inputValues = useAppSelector(selectInputValues);
  const data = useAppSelector(selectData);
  const listView = useAppSelector(selectListView);

  console.log("inputValues in Home", inputValues);

  // getting all characters
  useEffect(() => {
    if (!isFilterApplied) {
      dispatch(getAllCharacters(data.charactersPage));
    }
  }, [isFilterApplied, data.charactersPage, dispatch]);

  // getting filtered episodes
  useEffect(() => {
    const { epiName, epiCode } = inputValues;
    const condition = epiName || epiCode;
    if (isFilterApplied && condition) {
      dispatch(
        getEpisodes({
          page: data.episodesPage,
          name: inputValues.epiName,
          episode: inputValues.epiCode,
        })
      );
      dispatch(setListView("epi"));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFilterApplied, data.episodesPage]);

  // getting filtered locations
  useEffect(() => {
    const { locName, locType, dimension } = inputValues;
    const condition = locName || locType || dimension;
    if (isFilterApplied && condition) {
      dispatch(
        getLocations({
          page: data.locationsPage,
          name: inputValues.locName,
          type: inputValues.locType,
          dimension: inputValues.dimension,
        })
      );
      dispatch(setListView("loc"));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFilterApplied, data.locationsPage]);

  // getting filtered characters
  useEffect(() => {
    const { charName, status, charType, species, gender } = inputValues;
    const condition = charName || status || charType || species || gender;

    if (isFilterApplied && condition) {
      dispatch(
        getFilteredChars({
          page: data.filteredCharPage,
          name: inputValues.charName,
          status: inputValues.status,
          type: inputValues.charType,
          species: inputValues.species,
          gender: inputValues.gender,
        })
      );
      dispatch(setListView("char"));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFilterApplied, data.filteredCharPage]);

  useEffect(() => {
    window.scroll({
      top: 400,
    });
  }, [data.charactersPage, data.filteredCharPage, data.locationsPage, data.episodesPage]);

  return (
    <>
      <Filter setIsFilterApplied={setIsFilterApplied} />
      {listView !== "all" && <ListToggle listViewing={listView} />}
      <DataLists data={data} listViewing={listView} />
    </>
  );
};

export default Home;
