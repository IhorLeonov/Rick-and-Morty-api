import { Dispatch, SetStateAction } from "react";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";

export interface Character {
  id?: string;
  name: string;
  image: string;
  status: string;
  species: string;
  location: { name: string };
  episode: [{ name: string }];
}

export interface Location {
  id: number;
  name: string;
  type: string;
  dimension: string;
}

export interface Episode {
  id: number;
  name: string;
  episode: string;
  air_date: string;
}

export interface CharData {
  page: number;
  pages: number;
  data: Character[];
}

export interface CardListProps {
  charData?: Character[];
  locData?: Location[];
  epiData?: Episode[];
  pages: number;
  page: number;
  setPage:
    | ActionCreatorWithPayload<number, "main/setCharactersPage">
    | ActionCreatorWithPayload<number, "main/setFilteredCharPage">
    | ActionCreatorWithPayload<number, "main/setLocationsPage">
    | ActionCreatorWithPayload<number, "main/setEpisodesPage">;
}

export interface CheckboxListProps {
  filters: string[];
  setFilters: Dispatch<SetStateAction<string[]>>;
}

export interface InputListProps {
  filters: string[];
}

export interface PagePaginationProps {
  pageQuantity: number;
  page: number;
  setPage:
    | ActionCreatorWithPayload<number, "main/setCharactersPage">
    | ActionCreatorWithPayload<number, "main/setFilteredCharPage">
    | ActionCreatorWithPayload<number, "main/setLocationsPage">
    | ActionCreatorWithPayload<number, "main/setEpisodesPage">;
}

export interface ListToggleProps {
  listViewing: string;
  setListViewing: Dispatch<SetStateAction<string>>;
}

export interface FormInputValues {
  [k: string]: string;
}

export interface FilterProps {
  setIsFilterApplied: Dispatch<SetStateAction<boolean>>;
}

export interface MainState {
  isLoading: boolean;
  error: string | null;
  inputValues: FormInputValues;
  listViewing: string;
  isDrawerOpen: boolean;
  historyData: string[];
  data: {
    charactersData: Character[];
    characterData: Character | null;
    filteredCharData: Character[];
    locationsData: Location[];
    episodesData: Episode[];
    charactersPage: number;
    filteredCharPage: number;
    locationsPage: number;
    episodesPage: number;
    charactersPages: number;
    filteredCharPages: number;
    locationsPages: number;
    episodesPages: number;
  };
}
