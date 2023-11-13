import { FC, useEffect, useState } from "react";
import { FilterBox, FormikForm, FilterBtn, SelectBtn, SubmitBtn, HomePage } from "./Home.styled";
import { Icon } from "../../helpers/IconSelector";
import { CheckboxList } from "../../components/CheckboxList/CheckboxList";
import { InputList } from "../../components/InputList/InputList";
import { Backdrop } from "@mui/material";
import { Formik } from "formik";
import { CardList } from "../../components/CardList/CardList";
import { useAllCharacters } from "../../hooks/useGetAllCharacters";
import { PagePagination } from "../../components/PagePagination/PagePagination";
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
  const [page, setPage] = useState<number>(1);
  const [pageAmount, setPageAmount] = useState<number>(0);
  const [pageLocAmount, setPageLocAmount] = useState<number>(0);
  const [pageEpiAmount, setPageEpiAmount] = useState<number>(0);
  const [charData, setCharData] = useState<Character[]>([]);
  const [locationData, setLocationData] = useState<Location[]>([]);
  const [episodeData, setEpisodeData] = useState<Episode[]>([]);

  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  //filter slice
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

  const characters = useAllCharacters(page);
  const filtredCharacters = useGetFilteredData(page, charName, status, charType, species, gender);
  const location = useGetLocation(1, locationName, locationType, dimension);
  const episodes = useGetEpisode(1, episodeName, episodeCode);

  useEffect(() => {
    if (characters.data && !isFilterApplied) {
      const { data, error, loading } = characters;
      if (error) return setError(error?.message);
      setPageAmount(data.characters.info?.pages);
      setCharData(data.characters?.results);
      setIsLoading(loading);
    }
    if (filtredCharacters.data && isFilterApplied) {
      const { data, error, loading } = filtredCharacters;
      if (error) return setError(error?.message);
      setPageAmount(data.characters.info?.pages);
      setCharData(data.characters?.results);
      setIsLoading(loading);
    }
    if (location.data && isFilterApplied) {
      const { data, error, loading } = location;
      if (error) return setError(error?.message);
      setPageLocAmount(data.locations.info?.pages);
      setLocationData(data.locations?.results);
      setIsLoading(loading);
    }
    if (episodes.data && isFilterApplied) {
      const { data, error, loading } = episodes;
      if (error) return setError(error?.message);
      setPageEpiAmount(data.episodes.info?.pages);
      setEpisodeData(data.episodes?.results);
      setIsLoading(loading);
    }
    if (page > 1) {
      window.scroll({
        top: 400,
        left: 0,
        behavior: "smooth",
      });
    }
  }, [characters, filtredCharacters, location, episodes, isFilterApplied, page]);

  const handleRemoveFilter = () => {
    setIsFilterOpen(!isFilterOpen);
    setIsFilterApplied(false);
    setPage(1);
    setLocationData([]);
    setEpisodeData([]);
  };

  const handleCloseList = () => {
    setIsFilterListOpen(!isFilterListOpen);
    setCheckboxFilters([]);
  };

  const handleSubmit = (values: FormInitialValues) => {
    setCharName(values.charName);
    setStatus(values.status);
    setCharType(values.charType);
    setSpecies(values.species);
    setGender(values.gender);
    setDimension(values.dimension);
    setLocationName(values.locationName);
    setLocationType(values.locationType);
    setEpisodeName(values.episodeName);
    setEpisodeCode(values.episode);
    filtredCharacters.getFilterdData();
    location.getLocation();
    episodes.getEpisode();
    console.log(values);
    console.log(pageLocAmount);
    console.log(pageEpiAmount);
  };

  if (error) return <p>Something wrong</p>;
  const condition = locationData.length > 0 || episodeData.length > 0;
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
      {isLoading && <p>Loading...</p>}
      {condition && <ListToggle setListViewing={setListViewing} />}
      {!isLoading && locationData.length > 0 && listViewing === "loc" && (
        <LocationList data={locationData} />
      )}
      {!isLoading && episodeData.length > 0 && listViewing === "epi" && (
        <EpisodeList data={episodeData} />
      )}
      {!isLoading && charData.length > 0 && listViewing === "char" && (
        <CardList characters={charData} />
      )}
      <PagePagination pageQuantity={pageAmount} page={page} setPage={setPage} />
      <Backdrop sx={{ zIndex: 1 }} open={isFilterListOpen} onClick={handleCloseList} />
    </HomePage>
  );
};

export default Home;
