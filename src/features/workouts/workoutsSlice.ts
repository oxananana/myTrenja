import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { Workout, Workouts, WorkoutSlugs } from "../../entities/workout";
import { workoutsAPI } from "../../api/workoutsAPI";

type WorkoutsState = {
  catalog: Workouts;
  slugs: WorkoutSlugs;
  isFetching: boolean;
};

const initialState: WorkoutsState = {
  catalog: {},
  slugs: {},
  isFetching: false,
};

export const fetchWorkouts = createAsyncThunk(
  "workouts/fetchWorkouts",
  async () => {
    const response = await workoutsAPI.fetchWorkouts();
    return response;
  }
);

const workoutsSlice = createSlice({
  name: "workouts",
  initialState,
  reducers: {
    addWorkout(state, action: PayloadAction<Workout>) {
      const workout = action.payload;
      state.catalog[workout.id] = workout;
    },
    editWorkout(state, action: PayloadAction<Workout>) {
      const workout = action.payload;
      let prevWorkout = state.catalog[workout.id];
      prevWorkout = { ...prevWorkout, ...workout };
    },
    deleteWorkout(state, action: PayloadAction<{ id: string }>) {
      delete state.catalog[action.payload.id];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWorkouts.pending, (state) => {
        state.isFetching = true;
      })
      .addCase(
        fetchWorkouts.fulfilled,
        (
          state,
          action: PayloadAction<{ catalog: Workouts; slugs: WorkoutSlugs }>
        ) => {
          state.catalog = action.payload.catalog;
          state.slugs = action.payload.slugs;
          state.isFetching = false;
        }
      );
  },
});

export const { addWorkout, editWorkout, deleteWorkout } = workoutsSlice.actions;

export const workoutsReducer = workoutsSlice.reducer;
