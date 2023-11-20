import { FC } from "react";
import { CharacterList } from "../CharacterList/CharacterList";
import { LocationList } from "../LocationList/LocationList";
import { EpisodeList } from "../EpisodeList/EpisodeList";
import {
  setCharactersPage,
  setFilteredCharPage,
  setLocationsPage,
  setEpisodesPage,
} from "../../redux/mainSlice";
import { useAppSelector } from "../../redux/store";
import { selectIsLoading } from "../../redux/selectors";
import { DataListsProps } from "../../constants/types";
import { Wrapper } from "./DataLists.styled.tsx";
import { FAB } from "../Fab/Fab.js";

export const DataLists: FC<DataListsProps> = ({ data, listViewing }) => {
  const isLoading = useAppSelector(selectIsLoading);

  return (
    <Wrapper>
      <FAB listViewing={listViewing} />
      {listViewing === "all" && !isLoading && (
        <CharacterList
          charData={data.charactersData}
          page={data.charactersPage}
          pages={data.charactersPages}
          setPage={setCharactersPage}
        />
      )}
      {listViewing === "char" && !isLoading && (
        <CharacterList
          charData={data.filteredCharData}
          page={data.filteredCharPage}
          pages={data.filteredCharPages}
          setPage={setFilteredCharPage}
        />
      )}
      {listViewing === "loc" && !isLoading && (
        <LocationList
          locData={data.locationsData}
          page={data.locationsPage}
          pages={data.locationsPages}
          setPage={setLocationsPage}
        />
      )}
      {listViewing === "epi" && !isLoading && (
        <EpisodeList
          epiData={data.episodesData}
          page={data.episodesPage}
          pages={data.episodesPages}
          setPage={setEpisodesPage}
        />
      )}
    </Wrapper>
  );
};
