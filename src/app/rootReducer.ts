import { combineReducers } from "redux";
import { workoutsReducer } from "../features/workouts/workoutsSlice";
import { exersizesReducer } from "../features/exersizes/exersizesSlice";

export const rootReducer = combineReducers({
  workouts: workoutsReducer,
  exersizes: exersizesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
