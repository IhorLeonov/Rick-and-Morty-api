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
  const [listViewing, setListViewing] = useState<string>("char");

  //redux state
  const [charactersPage, setCharactersPage] = useState<number>(1);
  const [locationPage, setLocationPage] = useState<number>(1);
  const [episodesPage, setEpisodesPage] = useState<number>(1);

  const [charactersPages, setCharactersPages] = useState<number>(0);
  const [locationPages, setLocationPages] = useState<number>(0);
  const [episodesPages, setEpisodesPages] = useState<number>(0);

  const [charData, setCharData] = useState<Character[]>([]);
  const [locationData, setLocationData] = useState<Location[]>([]);
  const [episodeData, setEpisodeData] = useState<Episode[]>([]);

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
  const filtredCharacters = useGetFilteredData(
    charactersPage,
    charName,
    status,
    charType,
    species,
    gender
  );
  const location = useGetLocation(1, locationName, locationType, dimension);
  const episodes = useGetEpisode(1, episodeName, episodeCode);

  useEffect(() => {
    if (characters.data && !isFilterApplied) {
      const { data, error, loading } = characters;
      if (error) return setError(error?.message);
      setCharactersPages(data.characters.info?.pages);
      setCharData(data.characters?.results);
      setIsLoading(loading);
    }
    if (filtredCharacters.data && isFilterApplied) {
      const { data, error, loading } = filtredCharacters;
      if (error) return setError(error?.message);
      setCharactersPages(data.characters.info?.pages);
      setCharData(data.characters?.results);
      setIsLoading(loading);
    }
    if (charactersPage > 1) {
      window.scroll({
        top: 400,
        behavior: "smooth",
      });
    }
  }, [characters, filtredCharacters, isFilterApplied, charactersPage]);

  useEffect(() => {
    if (location.data && isFilterApplied) {
      const { data, error, loading } = location;
      if (error) return setError(error?.message);
      setLocationPages(data.locations.info?.pages);
      setLocationData(data.locations?.results);
      setIsLoading(loading);
    }
  }, [location, isFilterApplied, charactersPage]);

  useEffect(() => {
    if (episodes.data && isFilterApplied) {
      const { data, error, loading } = episodes;
      if (error) return setError(error?.message);
      setEpisodesPages(data.episodes.info?.pages);
      setEpisodeData(data.episodes?.results);
      setIsLoading(loading);
    }
  }, [episodes, isFilterApplied, charactersPage]);

  const handleRemoveFilter = () => {
    setIsFilterOpen(!isFilterOpen);
    setIsFilterApplied(false);
    setCharactersPage(1);
    setLocationPage(1);
    setEpisodesPage(1);
    setLocationData([]);
    setEpisodeData([]);
    setListViewing("char");
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
      filtredCharacters.getFilterdData();
    }
    if (locationName || locationType || dimension) {
      location.getLocation();
    }
    if (episodeName || episode) {
      episodes.getEpisode();
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
                Select Item <Icon name="v-icon" width={14} />
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
        setListViewing={setListViewing}
        locationData={locationData}
        episodeData={episodeData}
      />
      {listViewing === "char" && !isLoading && (
        <CharacterList
          charData={charData}
          pages={charactersPages}
          page={charactersPage}
          setPage={setCharactersPage}
        />
      )}
      {listViewing === "loc" && !isLoading && (
        <LocationList
          locData={locationData}
          pages={locationPages}
          page={locationPage}
          setPage={setLocationPage}
        />
      )}
      {listViewing === "epi" && !isLoading && (
        <EpisodeList
          epiData={episodeData}
          pages={episodesPages}
          page={episodesPage}
          setPage={setEpisodesPages}
        />
      )}
      <Backdrop sx={{ zIndex: 1 }} open={isFilterListOpen} onClick={handleCloseList} />
    </HomePage>
  );
};

export default Home;
