import { connect } from "react-redux";
import { RootState } from "../../reducers/rootReducer";
import Workouts from "./Workouts";
import {
  addWorkout,
  editWorkout,
  deleteWorkout,
} from "../../actions/workoutActions";

const mapStateToProps = (state: RootState) => {
  return {
    workouts: state.workouts,
  };
};
const mapDispatchToProps = {
  addWorkout,
  editWorkout,
  deleteWorkout,
};

const WorkoutsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Workouts);

export default WorkoutsContainer;
