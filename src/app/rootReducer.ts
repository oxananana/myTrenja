import { combineReducers } from "redux";
import { authReducer } from "./authSlice";
import { routineReducer } from "../features/routine/routineSlice";
import { workoutsReducer } from "../features/workouts/workoutsSlice";
import { exersizesReducer } from "../features/exersizes/exersizesSlice";

export const rootReducer = combineReducers({
  auth: authReducer,
  routine: routineReducer,
  workouts: workoutsReducer,
  exersizes: exersizesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
