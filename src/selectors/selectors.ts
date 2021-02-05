import { RootState } from "../app/rootReducer";
import { Workouts } from "../entities/workout";

export const getAllWorkouts = (state: RootState) => {
  return state.workouts.catalog;
};

export const getWorkouts = (state: RootState) => {
  const allWorkouts = getAllWorkouts(state);
  let workouts: Workouts = {};
  for (let id in allWorkouts) {
    if (allWorkouts[id].isDefault) {
      workouts[id] = allWorkouts[id];
    }
  }
  return workouts;
};

export const getRoutineWorkouts = (state: RootState) => {
  const allWorkouts = getAllWorkouts(state);
  let routineWorkouts: Workouts = {};
  for (let id in allWorkouts) {
    if (!allWorkouts[id].isDefault) {
      routineWorkouts[id] = allWorkouts[id];
    }
  }
  return routineWorkouts;
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
