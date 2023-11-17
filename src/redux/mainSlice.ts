import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { initialValues } from "../constants/values";
import { Character, FormInputValues } from "../constants/types";
import { getAllCharacters } from "./operations";

interface MainState {
  isLoading: boolean;
  error: string | null;
  inputValues: FormInputValues;
  charactersData: Character[];
  charactersPage: number;
  charactersPages: number;
}

const initialState = {
  isLoading: false,
  error: null,
  inputValues: initialValues,
  charactersData: [],
  charactersPage: 1,
  charactersPages: 0,
} as MainState;

const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    setCharactersPage: (state, action: PayloadAction<number>) => {
      state.charactersPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllCharacters.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.charactersData = action.payload.data.characters.results;
        state.charactersPages = action.payload.data.characters.info.pages;
      })
      .addCase(getAllCharacters.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllCharacters.rejected, (state, action) => {
        state.isLoading = false;
        console.log("Error from extraReducers", action.payload);
        if (typeof action.payload === "string") state.error = action.payload;
      });
  },
});

export const mainReducer = mainSlice.reducer;
export const { setCharactersPage } = mainSlice.actions;
