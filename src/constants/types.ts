import { Dispatch, SetStateAction } from "react";
import { ApolloError, LazyQueryExecFunction, OperationVariables } from "@apollo/client";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";

export interface Character {
  id: string;
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
  pages?: number;
  page?: number;
  setPage?: Dispatch<SetStateAction<number>>;
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
  // setPage: Dispatch<SetStateAction<number>>;
  setPage: ActionCreatorWithPayload<number, "main/setCharactersPage">;
}

type ListViewing = "all" | "char" | "loc" | "epi";

export interface ListToggleProps {
  listViewing: ListViewing;
  setListViewing: Dispatch<SetStateAction<ListViewing>>;
  filtredCharData: Character[];
  locationData: Location[];
  episodesData: Episode[];
}

export interface FormInputValues {
  [k: string]: string;
}

type LazyQueryFunc = LazyQueryExecFunction<unknown, OperationVariables>;

interface LazyQueryData {
  loading: boolean;
  error: ApolloError | undefined;
  data: unknown;
  called: boolean;
}

interface FilteredLazyQueryData {
  getFilterdData: LazyQueryFunc;
  data: LazyQueryData;
}

interface LocationLazyQueryData {
  getLocation: LazyQueryFunc;
  data: LazyQueryData;
}

interface EpisodesLazyQueryData {
  getEpisode: LazyQueryFunc;
  data: LazyQueryData;
}

export interface FilterProps {
  filtredChars: FilteredLazyQueryData;
  location: LocationLazyQueryData;
  episodes: EpisodesLazyQueryData;
  setIsFilterApplied: Dispatch<SetStateAction<boolean>>;
  setListViewing: Dispatch<SetStateAction<ListViewing>>;
  setInputValues: Dispatch<SetStateAction<FormInputValues>>;
  // setCharactersPage: Dispatch<SetStateAction<number>>;
  setFiltredCharPage: Dispatch<SetStateAction<number>>;
  setLocationPage: Dispatch<SetStateAction<number>>;
  setEpisodesPage: Dispatch<SetStateAction<number>>;
  setFiltredCharData: Dispatch<SetStateAction<Character[]>>;
  setLocationData: Dispatch<SetStateAction<Location[]>>;
  setEpisodesData: Dispatch<SetStateAction<Episode[]>>;
}
