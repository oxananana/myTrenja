import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import {
  getRoutineWorkouts,
  getWorkoutsIsFetching,
  getWorkouts,
  getExersizesIsFetching,
} from "../selectors/selectors";
import { fetchWorkouts } from "../features/workouts/workoutsSlice";
import { fetchExersizes } from "../features/exersizes/exersizesSlice";
import { Loader } from "../components/Loader";
import { RoutinePage } from "../features/routine/RoutinePage";
import { RoutineWorkoutPage } from "../features/routine/RoutineWorkoutPage";
import { WorkoutsPage } from "../features/workouts/workoutsPage/WorkoutsPage";
import { WorkoutPage } from "../features/workouts/workoutPage/WorkoutPage";
import { AddEditWorkoutPage } from "../features/workouts/addEditWorkout/AddEditWorkoutPage";
import { ExersizesPage } from "../features/exersizes/ExersizesPage";
import { AnalyticPage } from "../features/analytic/AnalyticPage";
import { AccountPage } from "../features/account/AccountPage";
import { Navbar } from "../components/navbar/Navbar";
import { AddRoutineWorkoutPage } from "../features/routine/addEditRoutineWorkout/AddRoutineWorkoutPage";
import { CheckSlugContainer } from "../components/CheckSlugContainer";
import { PageNotFound } from "../features/PageNotFound";

type Props = {};

export const AuthenticatedApp: React.FC<Props> = (props) => {
  const workoutsIsFetching = useSelector(getWorkoutsIsFetching);
  const exersizesIsFetching = useSelector(getExersizesIsFetching);

  const [dataIsFetching, setDataIsFetching] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWorkouts());
    dispatch(fetchExersizes());
  }, [dispatch]);

  useEffect(() => {
    setDataIsFetching(workoutsIsFetching || exersizesIsFetching);
  }, [workoutsIsFetching, exersizesIsFetching]);

  if (dataIsFetching) {
    return <Loader />;
  }

  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/routine" />
        </Route>
        <Route path="/account">
          <AccountPage />
        </Route>
        <Route path="/routine/add-routine-workout" exact>
          <AddRoutineWorkoutPage />
        </Route>
        <Route path="/routine/:routineWorkoutId">
          <CheckSlugContainer
            stateSelector={getRoutineWorkouts}
            slug="routineWorkoutId"
          >
            <RoutineWorkoutPage />
          </CheckSlugContainer>
        </Route>
        <Route path="/routine">
          <RoutinePage />
        </Route>
        <Route path="/workouts/add-workout" exact>
          <AddEditWorkoutPage />
        </Route>
        <Route path="/workouts/:workoutId">
          <CheckSlugContainer stateSelector={getWorkouts} slug="workoutId">
            <WorkoutPage />
          </CheckSlugContainer>
        </Route>
        <Route path="/workouts">
          <WorkoutsPage />
        </Route>
        <Route path="/analytic">
          <AnalyticPage />
        </Route>
        <Route path="/exersizes" exact>
          <Redirect to="/exersizes/legs" />
        </Route>
        <Route path="/exersizes/:categoryId">
          <ExersizesPage />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </>
  );
};
