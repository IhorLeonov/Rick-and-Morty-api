import { PayloadAction, isAnyOf, createSlice } from "@reduxjs/toolkit";
import { initialValues } from "../constants/values";
import { Character, Episode, FormInputValues, Location } from "../constants/types";
import { getAllCharacters, getEpisodes, getFilteredChars, getLocations } from "./operations";

type ListViewing = "all" | "char" | "loc" | "epi";

interface MainState {
  isLoading: boolean;
  error: string | null;
  inputValues: FormInputValues;
  listViewing: ListViewing;
  data: {
    charactersData: Character[];
    charactersPage: number;
    charactersPages: number;
    filteredCharData: Character[];
    filteredCharPage: number;
    filteredCharPages: number;
    locationsData: Location[];
    locationsPage: number;
    locationsPages: number;
    episodesData: Episode[];
    episodesPage: number;
    episodesPages: number;
  };
}

const handleSameFulfilled = (state: MainState) => {
  state.isLoading = false;
  state.error = null;
};

const initialState = {
  isLoading: false,
  error: null,
  inputValues: initialValues,
  listViewing: "all",
  data: {
    charactersData: [],
    charactersPage: 1,
    charactersPages: 0,
    //
    filteredCharData: [],
    filteredCharPage: 1,
    filteredCharPages: 0,
    //
    locationsData: [],
    locationsPage: 1,
    locationsPages: 0,
    //
    episodesData: [],
    episodesPage: 1,
    episodesPages: 0,
  },
} as MainState;

const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    setInputValues: (state, action: PayloadAction<FormInputValues>) => {
      state.inputValues = action.payload;
    },
    setListViewing: (state, action: PayloadAction<ListViewing>) => {
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
      .addMatcher(
        isAnyOf(
          getAllCharacters.pending,
          getFilteredChars.pending,
          getLocations.pending,
          getEpisodes.pending
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
          getEpisodes.rejected
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
} = mainSlice.actions;

export const mainReducer = mainSlice.reducer;
