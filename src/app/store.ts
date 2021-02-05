import { configureStore, Action } from "@reduxjs/toolkit";
import { rootReducer, RootState } from "./rootReducer";
import { ThunkAction } from "redux-thunk";

export const store = configureStore({
  reducer: rootReducer,
});

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;
