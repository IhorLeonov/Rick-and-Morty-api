import { FC, useEffect, useState } from "react";
import { FilterBox, FormikForm, FilterBtn, SelectBtn, SubmitBtn, HomePage } from "./Home.styled";
import { Icon } from "../../helpers/IconSelector";
import { CheckboxList } from "../../components/CheckboxList/CheckboxList";
import { InputList } from "../../components/InputList/InputList";
import { Backdrop } from "@mui/material";
import { Formik } from "formik";
import { CharacterList } from "../../components/CharacterList/CharacterList";
import { useAllCharacters } from "../../hooks/useGetAllCharacters";
import { Character, FormInitialValues, Location, Episode } from "../../constants/types";
import { useGetFilteredData } from "../../hooks/useGetFilteredData";
import { useGetLocation } from "../../hooks/useGetLocation";
import { useGetEpisode } from "../../hooks/useGetEpisode";
import { ListToggle } from "../../components/ListToggle/ListToggle";
import { LocationList } from "../../components/LocationList/LocationList";
import { EpisodeList } from "../../components/EpisodeList/EpisodeList";

const initialValues = {
  keywords: "",
  charName: "",
  locationName: "",
  episodeName: "",
  charType: "",
  locationType: "",
  status: "",
  species: "",
  gender: "",
  dimension: "",
  episode: "",
};

const Home: FC = () => {
  const [checkboxFilters, setCheckboxFilters] = useState<string[]>([]);
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);
  const [isFilterListOpen, setIsFilterListOpen] = useState<boolean>(false);
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

  const [charName, setCharName] = useState<string>("");
  const [charType, setCharType] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [species, setSpecies] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [locationName, setLocationName] = useState<string>("");
  const [locationType, setLocationType] = useState<string>("");
  const [dimension, setDimension] = useState<string>("");
  const [episodeName, setEpisodeName] = useState<string>("");
  const [episodeCode, setEpisodeCode] = useState<string>("");

  const characters = useAllCharacters(charactersPage);

  const filtredChars = useGetFilteredData(
    filtredCharPage,
    charName,
    status,
    charType,
    species,
    gender
  );

  const location = useGetLocation(locationPage, locationName, locationType, dimension);
  const episodes = useGetEpisode(episodesPage, episodeName, episodeCode);

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

  const handleRemoveFilter = () => {
    setIsFilterOpen(!isFilterOpen);
    setIsFilterApplied(false);
    setCharactersPage(1);
    setFiltredCharPage(1);
    setLocationPage(1);
    setEpisodesPage(1);
    setFiltredCharData([]);
    setLocationData([]);
    setEpisodesData([]);
    setListViewing("all");
  };

  const handleCloseList = () => {
    setIsFilterListOpen(!isFilterListOpen);
    setCheckboxFilters([]);
  };

  const handleSubmit = (values: FormInitialValues) => {
    const {
      charName,
      status,
      charType,
      species,
      gender,
      dimension,
      locationName,
      locationType,
      episodeName,
      episode,
    } = values;
    setCharName(charName);
    setStatus(status);
    setCharType(charType);
    setSpecies(species);
    setGender(gender);
    setDimension(dimension);
    setLocationName(locationName);
    setLocationType(locationType);
    setEpisodeName(episodeName);
    setEpisodeCode(episode);

    if (charName || status || charType || species || gender) {
      filtredChars.getFilterdData();
      setListViewing("char");
    }
    if (locationName || locationType || dimension) {
      location.getLocation();
      setListViewing("loc");
    }
    if (episodeName || episode) {
      episodes.getEpisode();
      setListViewing("epi");
    }
  };

  if (error) return <p>Something wrong</p>;
  return (
    <HomePage>
      <FilterBox>
        <FilterBtn type="button" onClick={handleRemoveFilter}>
          {isFilterOpen ? "Remove filter" : "Filter"}
        </FilterBtn>
        <Formik
          initialValues={initialValues}
          // validationSchema={ContactSchema}
          onSubmit={(values, actions) => {
            // const { name, number } = values;
            handleSubmit(values);
            actions.resetForm();
            handleCloseList();
            setIsFilterApplied(true);
          }}
        >
          {isFilterOpen && (
            <FormikForm action="">
              <SelectBtn type="button" onClick={handleCloseList}>
                Select Item <Icon name="v-icon" width={14} height={14} />
              </SelectBtn>
              {isFilterListOpen && (
                <CheckboxList filters={checkboxFilters} setFilters={setCheckboxFilters} />
              )}
              <InputList filters={checkboxFilters} />
              <SubmitBtn type="submit">Find</SubmitBtn>
            </FormikForm>
          )}
        </Formik>
      </FilterBox>
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
      <Backdrop sx={{ zIndex: 1 }} open={isFilterListOpen} onClick={handleCloseList} />
    </HomePage>
  );
};

export default Home;
