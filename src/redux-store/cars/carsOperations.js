import { createAsyncThunk } from "@reduxjs/toolkit";
import axios1 from "axios";

const baseURL = "https://65b4d4eb41db5efd2866fe2d.mockapi.io/api";

const axios = axios1.create({
  baseURL,
});

export const PAGE_LIMIT = 4;

export const fetchCars = createAsyncThunk(
  "cars/fetchCars",
  async (args, thunkAPI) => {
    try {
      const { signal } = args;
      const params = { ...args.params, limit: PAGE_LIMIT };
      const { data } = await axios.get("/advert", { params, signal });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
