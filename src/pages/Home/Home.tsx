import { FC, useEffect, useState } from "react";
import { HomePage } from "./Home.styled";

import { CharacterList } from "../../components/CharacterList/CharacterList";
import { useAllCharacters } from "../../hooks/useGetAllCharacters";
import { Character, FormInputValues, Location, Episode } from "../../constants/types";
import { useGetFilteredData } from "../../hooks/useGetFilteredData";
import { useGetLocation } from "../../hooks/useGetLocation";
import { useGetEpisode } from "../../hooks/useGetEpisode";
import { ListToggle } from "../../components/ListToggle/ListToggle";
import { LocationList } from "../../components/LocationList/LocationList";
import { EpisodeList } from "../../components/EpisodeList/EpisodeList";
import { Filter } from "../../components/Filter/Filter";
import { initialValues } from "../../constants/values";

const Home: FC = () => {
  const [listViewing, setListViewing] = useState<"all" | "char" | "loc" | "epi">("all");

  //redux state
  const [charactersPage, setCharactersPage] = useState<number>(1);
  const [charactersPages, setCharactersPages] = useState<number>(0);
  const [charData, setCharData] = useState<Character[]>([]);

  const [filtredCharPage, setFiltredCharPage] = useState<number>(1);
  const [filtredCharPages, setFiltredCharPages] = useState<number>(0);
  const [filtredCharData, setFiltredCharData] = useState<Character[]>([]);

  const [locationPage, setLocationPage] = useState<number>(1);
  const [locationPages, setLocationPages] = useState<number>(0);
  const [locationData, setLocationData] = useState<Location[]>([]);

  const [episodesPage, setEpisodesPage] = useState<number>(1);
  const [episodesPages, setEpisodesPages] = useState<number>(0);
  const [episodesData, setEpisodesData] = useState<Episode[]>([]);

  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isFilterApplied, setIsFilterApplied] = useState<boolean>(false);
  const [inpValues, setInpValues] = useState<FormInputValues>(initialValues);

  const characters = useAllCharacters(charactersPage);
  const location = useGetLocation(
    locationPage,
    inpValues.locName,
    inpValues.locType,
    inpValues.dimension
  );
  const episodes = useGetEpisode(episodesPage, inpValues.epiName, inpValues.epiCode);
  const filtredChars = useGetFilteredData(
    filtredCharPage,
    inpValues.charName,
    inpValues.status,
    inpValues.charType,
    inpValues.species,
    inpValues.gender
  );

  useEffect(() => {
    if (characters.data && !isFilterApplied) {
      const { data, error, loading } = characters;
      if (error) return setError(error?.message);
      setCharactersPages(data.characters.info?.pages);
      setCharData(data.characters?.results);
      setIsLoading(loading);
    }
  }, [characters, isFilterApplied, charactersPage]);

  useEffect(() => {
    if (filtredChars.data && isFilterApplied) {
      const { data, error, loading } = filtredChars;
      if (error) return setError(error?.message);
      setFiltredCharPages(data.characters.info?.pages);
      setFiltredCharData(data.characters?.results);
      setIsLoading(loading);
    }
  }, [filtredChars, isFilterApplied, filtredCharPage]);

  useEffect(() => {
    if (location.data && isFilterApplied) {
      const { data, error, loading } = location;
      if (error) return setError(error?.message);
      setLocationPages(data.locations.info?.pages);
      setLocationData(data.locations?.results);
      setIsLoading(loading);
    }
  }, [location, isFilterApplied, locationPage]);

  useEffect(() => {
    if (episodes.data && isFilterApplied) {
      const { data, error, loading } = episodes;
      if (error) return setError(error?.message);
      setEpisodesPages(data.episodes.info?.pages);
      setEpisodesData(data.episodes?.results);
      setIsLoading(loading);
    }
  }, [episodes, isFilterApplied, episodesPage]);

  useEffect(() => {
    window.scroll({
      top: 400,
    });
  }, [charactersPage, filtredCharPage, locationPage, episodesPage]);

  if (error) return <p>Something wrong</p>;
  return (
    <HomePage>
      <Filter
        setInpValues={setInpValues}
        filtredChars={filtredChars}
        setListViewing={setListViewing}
        location={location}
        episodes={episodes}
        setIsFilterApplied={setIsFilterApplied}
        setCharactersPage={setCharactersPage}
        setFiltredCharPage={setFiltredCharPage}
        setLocationPage={setLocationPage}
        setEpisodesPage={setEpisodesPage}
        setFiltredCharData={setFiltredCharData}
        setLocationData={setLocationData}
        setEpisodesData={setEpisodesData}
      />
      <ListToggle
        listViewing={listViewing}
        setListViewing={setListViewing}
        filtredCharData={filtredCharData}
        locationData={locationData}
        episodesData={episodesData}
      />
      {listViewing === "all" && !isLoading && (
        <CharacterList
          charData={charData}
          pages={charactersPages}
          page={charactersPage}
          setPage={setCharactersPage}
        /> // all characters
      )}
      {listViewing === "char" && !isLoading && (
        <CharacterList
          charData={filtredCharData}
          pages={filtredCharPages}
          page={filtredCharPage}
          setPage={setFiltredCharPage}
        /> // filtred characters
      )}
      {listViewing === "loc" && !isLoading && (
        <LocationList
          locData={locationData}
          pages={locationPages}
          page={locationPage}
          setPage={setLocationPage}
        /> // filtred locations
      )}
      {listViewing === "epi" && !isLoading && (
        <EpisodeList
          epiData={episodesData}
          pages={episodesPages}
          page={episodesPage}
          setPage={setEpisodesPage}
        /> // filtred episodes
      )}
    </HomePage>
  );
};

export default Home;
