import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Routine, RoutineDay } from "../../entities/routine";
import { routineAPI } from "../../api/routineAPI";

type RoutineState = {
  data: Routine;
  isFetching: boolean;
};

const initialState: RoutineState = {
  data: {},
  isFetching: false,
};

export const fetchRoutine = createAsyncThunk(
  "routine/fetchRoutine",
  async () => {
    const response = await routineAPI.fetchRoutine();
    return response || {};
  }
);

const routineSlice = createSlice({
  name: "routine",
  initialState,
  reducers: {
    addRoutineDay(state, action: PayloadAction<RoutineDay>) {
      const day = action.payload;
      state.data[day.id] = day;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRoutine.pending, (state) => {
        state.isFetching = true;
      })
      .addCase(
        fetchRoutine.fulfilled,
        (state, action: PayloadAction<Routine>) => {
          state.data = action.payload;
          state.isFetching = false;
        }
      );
  },
});

export const { addRoutineDay } = routineSlice.actions;

export const routineReducer = routineSlice.reducer;
