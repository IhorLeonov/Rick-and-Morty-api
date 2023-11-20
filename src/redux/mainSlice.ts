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
    resetError: (state) => {
      state.error = "";
    },

    resetData: (state) => {
      state.inputValues = initialValues;
      state.data.charactersPage = 1;
      state.data.filteredCharPage = 1;
      state.data.locationsPage = 1;
      state.data.episodesPage = 1;
      state.data.filteredCharData = [];
      state.data.locationsData = [];
      state.data.episodesData = [];
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
        if (characters.info.pages < 1) {
          state.error = "No data for your characters request";
        }
      })
      .addCase(getLocations.fulfilled, (state, action) => {
        const { locations } = action.payload.data;
        handleSameFulfilled(state);
        state.data.locationsData = locations.results;
        state.data.locationsPages = locations.info.pages;
        if (locations.info.pages < 1) {
          state.error = "No data for your locations request";
        }
      })
      .addCase(getEpisodes.fulfilled, (state, action) => {
        const { episodes } = action.payload.data;
        handleSameFulfilled(state);
        state.data.episodesData = episodes.results;
        state.data.episodesPages = episodes.info.pages;
        if (episodes.info.pages < 1) {
          state.error = "No data for your episodes request";
        }
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
          if (typeof action.payload === "string") state.error = action.payload;
        }
      );
  },
});

export const {
  setInputValues,
  setCharactersPage,
  setFilteredCharPage,
  setLocationsPage,
  setEpisodesPage,
  resetError,
  resetData,
} = mainSlice.actions;

export const mainReducer = mainSlice.reducer;
