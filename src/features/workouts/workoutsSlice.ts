import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { AppThunk } from "./../../app/store";
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
  isFetching: true,
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
    updateWorkouts(
      state,
      action: PayloadAction<{ workout: Workout; id: string }>
    ) {
      const { workout, id } = action.payload;
      state.catalog[id] = workout;
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

export const createWorkout = (workout: Workout, id: string): AppThunk => async (
  dispatch
) => {
  try {
    dispatch(updateWorkouts({ workout, id }));
    const response = await workoutsAPI.createWorkout(workout, id);
  } catch (error) {
    console.log(error);
  }
};

export const updateWorkout = (workout: Workout, id: string): AppThunk => async (
  dispatch
) => {
  try {
    dispatch(updateWorkouts({ workout, id }));
    const response = await workoutsAPI.updateWorkout(workout, id);
  } catch (error) {
    console.log(error);
  }
};

export const { updateWorkouts, deleteWorkout } = workoutsSlice.actions;

export const workoutsReducer = workoutsSlice.reducer;
