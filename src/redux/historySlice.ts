import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { HistoryData, HistoryState } from "../constants/types";

const initialState = {
  historyData: { characters: [], locations: [], episodes: [], actions: [] },
  isDrawerOpen: false,
} as HistoryState;

const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {
    setHistoryData: (state, action: PayloadAction<HistoryData>) => {
      state.historyData = {
        characters: [...state.historyData.characters, ...action.payload.characters],
        locations: [...state.historyData.locations, ...action.payload.locations],
        episodes: [...state.historyData.episodes, ...action.payload.episodes],
        actions: [...state.historyData.actions, ...action.payload.actions],
      };
    },
    toggleDrawer: (state, action: PayloadAction<boolean>) => {
      state.isDrawerOpen = action.payload;
    },
  },
});

export const { setHistoryData, toggleDrawer } = historySlice.actions;

export const historyReducer = historySlice.reducer;
