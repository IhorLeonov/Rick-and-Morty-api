import { FC, useEffect, useState } from "react";
import { HomePage } from "./Home.styled";
import { CharacterList } from "../../components/CharacterList/CharacterList";
import { ListToggle } from "../../components/ListToggle/ListToggle";
import { LocationList } from "../../components/LocationList/LocationList";
import { EpisodeList } from "../../components/EpisodeList/EpisodeList";
import { Filter } from "../../components/Filter/Filter";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { selectData, selectError, selectIsLoading, selectInputValues } from "../../redux/selectors";
import {
  getAllCharacters,
  getEpisodes,
  getFilteredChars,
  getLocations,
} from "../../redux/operations";
import {
  setCharactersPage,
  setFilteredCharPage,
  setLocationsPage,
  setEpisodesPage,
} from "../../redux/mainSlice";
import { FAB } from "../../components/Fab/Fab";

const Home: FC = () => {
  const [listViewing, setListViewing] = useState<string>("all");
  const [isFilterApplied, setIsFilterApplied] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(selectIsLoading);
  const error = useAppSelector(selectError);
  const inputValues = useAppSelector(selectInputValues);
  const data = useAppSelector(selectData);

  // getting all characters
  useEffect(() => {
    if (!isFilterApplied) {
      dispatch(getAllCharacters(data.charactersPage));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFilterApplied, data.charactersPage]);

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
      setListViewing("epi");
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
      setListViewing("loc");
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
      setListViewing("char");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFilterApplied, data.filteredCharPage, inputValues]);

  useEffect(() => {
    window.scroll({
      top: 400,
    });
  }, [data.charactersPage, data.filteredCharPage, data.locationsPage, data.episodesPage]);

  if (error) return <p>{error}</p>;
  return (
    <HomePage>
      <Filter setListViewing={setListViewing} setIsFilterApplied={setIsFilterApplied} />
      {listViewing !== "all" && (
        <ListToggle listViewing={listViewing} setListViewing={setListViewing} />
      )}
      {listViewing === "all" && !isLoading && (
        <CharacterList
          charData={data.charactersData}
          page={data.charactersPage}
          pages={data.charactersPages}
          setPage={setCharactersPage}
        /> // all characters
      )}
      {listViewing === "char" && !isLoading && (
        <CharacterList
          charData={data.filteredCharData}
          page={data.filteredCharPage}
          pages={data.filteredCharPages}
          setPage={setFilteredCharPage}
        /> // filtred characters
      )}
      {listViewing === "loc" && !isLoading && (
        <LocationList
          locData={data.locationsData}
          page={data.locationsPage}
          pages={data.locationsPages}
          setPage={setLocationsPage}
        /> // filtred locations
      )}
      {listViewing === "epi" && !isLoading && (
        <EpisodeList
          epiData={data.episodesData}
          page={data.episodesPage}
          pages={data.episodesPages}
          setPage={setEpisodesPage}
        /> // filtred episodes
      )}
      <FAB />
    </HomePage>
  );
};

export default Home;
