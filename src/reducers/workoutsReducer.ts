import {
  ADD_WORKOUT,
  EDIT_WORKOUT,
  DELETE_WORKOUT,
} from "../constants/ActionTypes";
import { WorkoutActionsTypes } from "../actions/workoutActions";
import { workoutsJSON } from "../data/workoutsJSON";

const initialState = workoutsJSON;

const workoutsReducer = (state = initialState, action: WorkoutActionsTypes) => {
  switch (action.type) {
    case ADD_WORKOUT:
      return state;
    case EDIT_WORKOUT:
      return state;
    case DELETE_WORKOUT:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default workoutsReducer;
