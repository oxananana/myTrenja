import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { workoutsJSON } from "../../data/workoutsJSON";
import { workoutSlugsJSON } from "../../data/workoutSlugsJSON";
import { Workout } from "../../entities/workout";

const workoutsSlice = createSlice({
  name: "workouts",
  initialState: { workouts: workoutsJSON, workoutSlugs: workoutSlugsJSON },
  reducers: {
    addWorkout(state, action: PayloadAction<Workout>) {
      const workout = action.payload;
      state.workouts[workout.id] = workout;
    },
    editWorkout(state, action: PayloadAction<Workout>) {
      const workout = action.payload;
      let prevWorkout = state.workouts[workout.id];
      prevWorkout = { ...prevWorkout, ...workout };
    },
    deleteWorkout(state, action: PayloadAction<{ id: string }>) {
      delete state.workouts[action.payload.id];
    },
  },
});

export const { addWorkout, editWorkout, deleteWorkout } = workoutsSlice.actions;

export const workoutsReducer = workoutsSlice.reducer;
