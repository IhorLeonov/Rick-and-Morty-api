import { Dispatch, SetStateAction } from "react";
// import { LazyQueryHookExecOptions, OperationVariables } from "@apollo/client";

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

export interface CardListProps {
  characters: Character[];
}

export interface CheckboxListProps {
  filters: string[];
  setFilters: Dispatch<SetStateAction<string[]>>;
}

export interface InputListProps {
  // filters: Partial<LazyQueryHookExecOptions<any, OperationVariables>>[];
  filters: string[];
}

export interface PagePaginationProps {
  pageQuantity: number;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
}
