import { RootState } from "./store";

export const selectData = (state: RootState) => state.main.data;
export const selectError = (state: RootState) => state.main.error;
export const selectListView = (state: RootState) => state.main.listView;
export const selectIsLoading = (state: RootState) => state.main.isLoading;
export const selectInputValues = (state: RootState) => state.main.inputValues;
export const selectCharacterData = (state: RootState) => state.main.data.characterData;

export const selectIsDrawerOpen = (state: RootState) => state.history.isDrawerOpen;
export const selectHistoryData = (state: RootState) => state.history.historyData;

export const selectCharactersData = (state: RootState) => state.main.data.charactersData;
export const selectCharactersPage = (state: RootState) => state.main.data.charactersPage;
export const selectCharactersPages = (state: RootState) => state.main.data.charactersPages;

export const selectFilteredCharData = (state: RootState) => state.main.data.filteredCharData;
export const selectFilteredCharPage = (state: RootState) => state.main.data.filteredCharPage;
export const selectFilteredCharPages = (state: RootState) => state.main.data.filteredCharPages;

export const selectLocationsData = (state: RootState) => state.main.data.locationsData;
export const selectLocationsPage = (state: RootState) => state.main.data.locationsPage;
export const selectLocationsPages = (state: RootState) => state.main.data.locationsPages;

export const selectEpisodesData = (state: RootState) => state.main.data.episodesData;
export const selectEpisodesPage = (state: RootState) => state.main.data.episodesPage;
export const selectEpisodesPages = (state: RootState) => state.main.data.episodesPages;
