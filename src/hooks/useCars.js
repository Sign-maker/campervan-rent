import { useDispatch, useSelector } from "react-redux";
import * as operations from "../redux-store/cars/carsOperations";
import { useCallback } from "react";
import {
  selectCars,
  selectIsLoading,
  selectTotalPages,
} from "../redux-store/cars/carsSelectors";
import { carSlice } from "../redux-store/cars/carsSlice";

export const useCars = () => {
  const dispatch = useDispatch();
  const totalPages = useSelector(selectTotalPages);
  const cars = useSelector(selectCars);
  const isLoading = useSelector(selectIsLoading);

  const resetCars = useCallback(
    () => dispatch(carSlice.actions.resetCars()),
    [dispatch]
  );

  const fetchCars = useCallback(
    (args) => dispatch(operations.fetchCars(args)).unwrap(),
    [dispatch]
  );

  return {
    cars,
    totalPages,
    isLoading,
    fetchCars,
    resetCars,
  };
};
