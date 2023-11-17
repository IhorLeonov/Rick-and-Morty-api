import { RootState } from "./store";

export const selectIsLoading = (state: RootState) => state.main.isLoading;
export const selectError = (state: RootState) => state.main.error;
export const selectInputValues = (state: RootState) => state.main.inputValues;
export const selectCharactersData = (state: RootState) => state.main.charactersData;
export const selectCharactersPages = (state: RootState) => state.main.charactersPages;
export const selectCharactersPage = (state: RootState) => state.main.charactersPage;
