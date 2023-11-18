import { FC, useEffect, useState } from "react";
import { HomePage } from "./Home.styled";
import { CharacterList } from "../../components/CharacterList/CharacterList";
import { ListToggle } from "../../components/ListToggle/ListToggle";
import { LocationList } from "../../components/LocationList/LocationList";
import { EpisodeList } from "../../components/EpisodeList/EpisodeList";
import { Filter } from "../../components/Filter/Filter";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { ListViewing } from "../../constants/types";
import {
  getAllCharacters,
  getEpisodes,
  getFilteredChars,
  getLocations,
} from "../../redux/operations";
import {
  selectCharactersPage,
  selectFilteredCharPage,
  selectLocationsPage,
  selectEpisodesPage,
  selectInputValues,
  selectError,
  selectIsLoading,
  selectCharactersData,
  selectCharactersPages,
  selectFilteredCharData,
  selectFilteredCharPages,
  selectLocationsData,
  selectLocationsPages,
  selectEpisodesData,
  selectEpisodesPages,
} from "../../redux/selectors";
import {
  setCharactersPage,
  setFilteredCharPage,
  setLocationsPage,
  setEpisodesPage,
} from "../../redux/mainSlice";

const Home: FC = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(selectIsLoading);
  const error = useAppSelector(selectError);
  const inputValues = useAppSelector(selectInputValues);

  const charactersData = useAppSelector(selectCharactersData);
  const charactersPage = useAppSelector(selectCharactersPage);
  const charactersPages = useAppSelector(selectCharactersPages);

  const filteredCharData = useAppSelector(selectFilteredCharData);
  const filteredCharPage = useAppSelector(selectFilteredCharPage);
  const filteredCharPages = useAppSelector(selectFilteredCharPages);

  const locationsData = useAppSelector(selectLocationsData);
  const locationsPage = useAppSelector(selectLocationsPage);
  const locationsPages = useAppSelector(selectLocationsPages);

  const episodesData = useAppSelector(selectEpisodesData);
  const episodesPage = useAppSelector(selectEpisodesPage);
  const episodesPages = useAppSelector(selectEpisodesPages);

  const [listViewing, setListViewing] = useState<ListViewing>("all");
  const [isFilterApplied, setIsFilterApplied] = useState<boolean>(false);

  // getting all characters
  useEffect(() => {
    if (!isFilterApplied) {
      dispatch(getAllCharacters(charactersPage));
      console.log("я хук getAllCharacters");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFilterApplied, charactersPage]);

  // getting filtered characters
  useEffect(() => {
    const { charName, status, charType, species, gender } = inputValues;
    const condition = charName || status || charType || species || gender;

    if (isFilterApplied && condition) {
      dispatch(
        getFilteredChars({
          page: filteredCharPage,
          name: inputValues.charName,
          status: inputValues.status,
          type: inputValues.charType,
          species: inputValues.species,
          gender: inputValues.gender,
        })
      );
      console.log("я хук getFilteredChars");
      setListViewing("char");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFilterApplied, filteredCharPage, inputValues]);

  // getting filtered locations
  useEffect(() => {
    const { locName, locType, dimension } = inputValues;
    const condition = locName || locType || dimension;
    if (isFilterApplied && condition) {
      dispatch(
        getLocations({
          page: locationsPage,
          name: inputValues.locName,
          type: inputValues.locType,
          dimension: inputValues.dimension,
        })
      );
      setListViewing("loc"); ///
      console.log("я хук getLocations");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFilterApplied, locationsPage]);

  useEffect(() => {
    const { epiName, epiCode } = inputValues;
    const condition = epiName || epiCode;
    if (isFilterApplied && condition) {
      dispatch(
        getEpisodes({
          page: episodesPage,
          name: inputValues.epiName,
          episode: inputValues.epiCode,
        })
      );
      console.log("я хук getEpisodes");
      setListViewing("epi"); ///
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFilterApplied, episodesPage]);

  useEffect(() => {
    window.scroll({
      top: 400,
    });
  }, [charactersPage, filteredCharPage, locationsPage, episodesPage]);

  if (error) return <p>{error}</p>;
  return (
    <HomePage>
      <Filter setListViewing={setListViewing} setIsFilterApplied={setIsFilterApplied} />
      <ListToggle listViewing={listViewing} setListViewing={setListViewing} />
      {listViewing === "all" && !isLoading && (
        <CharacterList
          charData={charactersData}
          page={charactersPage}
          pages={charactersPages}
          setPage={setCharactersPage}
        /> // all characters
      )}
      {listViewing === "char" && !isLoading && (
        <CharacterList
          charData={filteredCharData}
          page={filteredCharPage}
          pages={filteredCharPages}
          setPage={setFilteredCharPage}
        /> // filtred characters
      )}
      {listViewing === "loc" && !isLoading && (
        <LocationList
          locData={locationsData}
          page={locationsPage}
          pages={locationsPages}
          setPage={setLocationsPage}
        /> // filtred locations
      )}
      {listViewing === "epi" && !isLoading && (
        <EpisodeList
          epiData={episodesData}
          page={episodesPage}
          pages={episodesPages}
          setPage={setEpisodesPage}
        /> // filtred episodes
      )}
    </HomePage>
  );
};

export default Home;
