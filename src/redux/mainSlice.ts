import { PayloadAction, isAnyOf, createSlice } from "@reduxjs/toolkit";
import { initialValues, initialDataState } from "../constants/values";
import { MainState, FormInputValues } from "../constants/types";
import {
  getAllCharacters,
  getCharacter,
  getEpisodes,
  getFilteredChars,
  getLocations,
} from "./operations";

const handleSameFulfilled = (state: MainState) => {
  state.isLoading = false;
  state.error = null;
};

const initialState = {
  isLoading: false,
  error: null,
  listViewing: "all",
  isDrawerOpen: false,
  inputValues: initialValues,
  data: initialDataState,
} as MainState;

const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    setInputValues: (state, action: PayloadAction<FormInputValues>) => {
      state.inputValues = action.payload;
    },
    setListViewing: (state, action: PayloadAction<string>) => {
      state.listViewing = action.payload;
    },
    setCharactersPage: (state, action: PayloadAction<number>) => {
      state.data.charactersPage = action.payload;
    },
    setFilteredCharPage: (state, action: PayloadAction<number>) => {
      state.data.filteredCharPage = action.payload;
    },
    setLocationsPage: (state, action: PayloadAction<number>) => {
      state.data.locationsPage = action.payload;
    },
    setEpisodesPage: (state, action: PayloadAction<number>) => {
      state.data.episodesPage = action.payload;
    },
    resetFilteredCharData: (state) => {
      state.data.filteredCharData = [];
    },
    resetLocationData: (state) => {
      state.data.locationsData = [];
    },
    resetEpisodesData: (state) => {
      state.data.episodesData = [];
    },
    toggleDrawer: (state, action: PayloadAction<boolean>) => {
      state.isDrawerOpen = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllCharacters.fulfilled, (state, action) => {
        const { characters } = action.payload.data;
        handleSameFulfilled(state);
        state.data.charactersData = characters.results;
        state.data.charactersPages = characters.info.pages;
      })
      .addCase(getFilteredChars.fulfilled, (state, action) => {
        const { characters } = action.payload.data;
        handleSameFulfilled(state);
        state.data.filteredCharData = characters.results;
        state.data.filteredCharPages = characters.info.pages;
      })
      .addCase(getLocations.fulfilled, (state, action) => {
        const { locations } = action.payload.data;
        handleSameFulfilled(state);
        state.data.locationsData = locations.results;
        state.data.locationsPages = locations.info.pages;
      })
      .addCase(getEpisodes.fulfilled, (state, action) => {
        const { episodes } = action.payload.data;
        handleSameFulfilled(state);
        state.data.episodesData = episodes.results;
        state.data.episodesPages = episodes.info.pages;
      })
      .addCase(getCharacter.fulfilled, (state, action) => {
        const { character } = action.payload.data;
        handleSameFulfilled(state);
        state.data.characterData = character;
      })
      .addMatcher(
        isAnyOf(
          getAllCharacters.pending,
          getFilteredChars.pending,
          getLocations.pending,
          getEpisodes.pending,
          getCharacter.pending
        ),
        (state) => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          getAllCharacters.rejected,
          getFilteredChars.rejected,
          getLocations.rejected,
          getEpisodes.rejected,
          getCharacter.rejected
        ),
        (state, action) => {
          state.isLoading = false;
          console.log("Error from extraReducers", action.payload);
          if (typeof action.payload === "string") state.error = action.payload;
        }
      );
  },
});

export const {
  setInputValues,
  setListViewing,
  setCharactersPage,
  setFilteredCharPage,
  setLocationsPage,
  setEpisodesPage,
  resetFilteredCharData,
  resetLocationData,
  resetEpisodesData,
  toggleDrawer,
} = mainSlice.actions;

export const mainReducer = mainSlice.reducer;
