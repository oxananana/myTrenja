import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { workoutsJSON } from "../../data/workoutsJSON";
import { Workout } from "../../entities/workout";

const workoutsSlice = createSlice({
  name: "workouts",
  initialState: workoutsJSON,
  reducers: {
    addWorkout(state, action: PayloadAction<Workout>) {
      const workout = action.payload;
      state[workout.id] = workout;
    },
    editWorkout(state, action: PayloadAction<Workout>) {
      const workout = action.payload;
      let prevWorkout = state[workout.id];
      prevWorkout = { ...prevWorkout, ...workout };
    },
    deleteWorkout(state, action: PayloadAction<{ id: string }>) {
      delete state[action.payload.id];
    },
  },
});

export const { addWorkout, editWorkout, deleteWorkout } = workoutsSlice.actions;

export const workoutsReducer = workoutsSlice.reducer;
