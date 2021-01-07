import { combineReducers } from "redux";
import workoutsReducer from "./workoutsReducer";

const rootReducer = combineReducers({
  workouts: workoutsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
