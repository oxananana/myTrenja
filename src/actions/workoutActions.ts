import { Workout } from "./../entities/workout";
import {
  ADD_WORKOUT,
  EDIT_WORKOUT,
  DELETE_WORKOUT,
} from "../constants/ActionTypes";

type AddWorkout = {
  type: typeof ADD_WORKOUT;
  workout: Workout;
};

type EditWorkout = {
  type: typeof EDIT_WORKOUT;
  workout: Workout;
};

type DeleteWorkout = {
  type: typeof DELETE_WORKOUT;
  workoutId: string;
};

export type WorkoutActionsTypes = AddWorkout | EditWorkout | DeleteWorkout;

export const addWorkout = (workout: Workout): AddWorkout => {
  return {
    type: ADD_WORKOUT,
    workout,
  };
};

export const editWorkout = (workout: Workout): EditWorkout => {
  return {
    type: EDIT_WORKOUT,
    workout,
  };
};

export const deleteWorkout = (workoutId: string): DeleteWorkout => {
  return {
    type: DELETE_WORKOUT,
    workoutId,
  };
};
