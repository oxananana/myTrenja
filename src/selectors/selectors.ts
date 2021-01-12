import { RootState } from "../app/rootReducer";

export const getRoutine = (state: RootState) => {
  return state.routine;
};

export const getWorkouts = (state: RootState) => {
  return state.workouts.workouts;
};

export const getWorkoutSlugs = (state: RootState) => {
  return state.workouts.workoutSlugs;
};

export const getExersizes = (state: RootState) => {
  return state.exersizes.exersizes;
};
