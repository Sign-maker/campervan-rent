import { createSlice } from "@reduxjs/toolkit";
import { PAGE_LIMIT, fetchCars } from "./carsOperations";

const initState = {
  campers: [],
  totalPages: null,
  favorites: [],
  error: null,
  isLoading: false,
};

export const calcTotalPages = (totalPages) =>
  Math.ceil(totalPages / PAGE_LIMIT);

export const carSlice = createSlice({
  name: "cars",
  initialState: initState,
  reducers: {
    resetCars: (state) => {
      state.campers = initState.campers;
      state.totalPages = initState.totalPages;
      state.error = initState.error;
      state.isLoading = initState.isLoading;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchCars.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchCars.fulfilled, (state, { payload }) => {
      state.campers = [...state.campers, ...payload.campers];
      state.totalPages = calcTotalPages(payload.totalCount);
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(fetchCars.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    });
  },
});
