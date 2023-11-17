import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { AxiosError } from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;

const query = `
  query GetAllCharacters($page: Int) {
    characters(page: $page) {
      info {
        count
        pages
      }
      results {
        id
        name
        image
        status
        species
        location {
          name
        }
        episode {
          name
        }
      }
    }
  }
`;

export const getAllCharacters = createAsyncThunk(
  "main/getAllCharacters",
  async (page: number, thunkAPI) => {
    try {
      const res = await axios.post(BASE_URL, {
        query,
        variables: { page },
      });
      return res.data;
    } catch (err) {
      const error = err as AxiosError<string>;
      console.log("Error getAllCharacters operations", error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
