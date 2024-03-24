import axios from "axios";
import type { AxiosError } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  GET_ALL_CHARACTERS,
  GET_CHARACTER,
  GET_FILTERED_CHARS,
  GET_LOCATIONS,
  GET_EPISODES,
} from "../helpers/queries";

const BASE_URL = import.meta.env.VITE_API_URL;

export const getAllCharacters = createAsyncThunk(
  "main/getAllCharacters",
  async (page: number, thunkAPI) => {
    try {
      const res = await axios.post(BASE_URL, {
        query: GET_ALL_CHARACTERS,
        variables: { page },
      });
      return res.data;
    } catch (err) {
      const error = err as AxiosError<string>;
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getCharacter = createAsyncThunk("main/getCharacter", async (id: string, thunkAPI) => {
  try {
    const res = await axios.post(BASE_URL, {
      query: GET_CHARACTER,
      variables: { id },
    });
    return res.data;
  } catch (err) {
    const error = err as AxiosError<string>;
    return thunkAPI.rejectWithValue(error.message);
  }
});

interface GetFilteredCharsType {
  page: number;
  name: string;
  status: string;
  type: string;
  species: string;
  gender: string;
}

export const getFilteredChars = createAsyncThunk(
  "main/getFilteredChars",
  async ({ page, name, status, type, species, gender }: GetFilteredCharsType, thunkAPI) => {
    try {
      const res = await axios.post(BASE_URL, {
        query: GET_FILTERED_CHARS,
        variables: { page, name, status, type, species, gender },
      });
      return res.data;
    } catch (err) {
      const error = err as AxiosError<string>;
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

interface GetLocationType {
  page: number;
  name: string;
  type: string;
  dimension: string;
}

export const getLocations = createAsyncThunk(
  "main/getLocations",
  async ({ page, name, type, dimension }: GetLocationType, thunkAPI) => {
    try {
      const res = await axios.post(BASE_URL, {
        query: GET_LOCATIONS,
        variables: { page, name, type, dimension },
      });
      return res.data;
    } catch (err) {
      const error = err as AxiosError<string>;
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

interface GetEpisodesType {
  page: number;
  name: string;
  episode: string;
}

export const getEpisodes = createAsyncThunk(
  "main/getEpisodes",
  async ({ page, name, episode }: GetEpisodesType, thunkAPI) => {
    try {
      const res = await axios.post(BASE_URL, {
        query: GET_EPISODES,
        variables: { page, name, episode: episode },
      });
      console.log(res.data);

      return res.data;
    } catch (err) {
      const error = err as AxiosError<string>;
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
