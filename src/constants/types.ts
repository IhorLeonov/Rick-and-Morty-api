import { Dispatch, SetStateAction } from "react";

export interface FormInitialValues {
  [k: string]: string;
}

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

export interface CardListProps {
  charData?: Character[];
  locData?: Location[];
  epiData?: Episode[];
  pages: number;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
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
  setPage: Dispatch<SetStateAction<number>>;
}
