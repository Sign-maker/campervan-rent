import { configureStore } from "@reduxjs/toolkit";
import { carSlice } from "./cars/carsSlice";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: carSlice.name,
  storage,
  whitelist: ["favorites"],
};

const persistedCarReducer = persistReducer(persistConfig, carSlice.reducer);

export const store = configureStore({
  reducer: { [carSlice.name]: persistedCarReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
