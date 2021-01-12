import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { routineJSON } from "../../data/routineJSON";
import { RoutineDay } from "../../entities/routine";

export const routineSlice = createSlice({
  name: "routine",
  initialState: routineJSON,
  reducers: {
    addRoutineDay(state, action: PayloadAction<RoutineDay>) {
      const day = action.payload;
      state[day.id] = day;
    },
  },
});

export const { addRoutineDay } = routineSlice.actions;

export const routineReducer = routineSlice.reducer;
