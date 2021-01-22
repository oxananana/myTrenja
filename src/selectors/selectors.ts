import { RootState } from "../app/rootReducer";

export const getRoutine = (state: RootState) => {
  return state.routine.data;
};

export const getRoutineIsFetching = (state: RootState) => {
  return state.routine.isFetching;
};

export const getWorkouts = (state: RootState) => {
  return state.workouts.catalog;
};

export const getWorkoutsIsFetching = (state: RootState) => {
  return state.workouts.isFetching;
};

export const getWorkoutSlugs = (state: RootState) => {
  return state.workouts.slugs;
};

export const getExersizes = (state: RootState) => {
  return state.exersizes.catalog;
};

export const getExersizesIsFetching = (state: RootState) => {
  return state.exersizes.isFetching;
};

export const getExersizeCategories = (state: RootState) => {
  return state.exersizes.categories;
};
