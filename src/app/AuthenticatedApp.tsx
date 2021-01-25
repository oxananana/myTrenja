import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import {
  getRoutineIsFetching,
  getRoutine,
  getWorkoutsIsFetching,
  getWorkoutSlugs,
  getExersizesIsFetching,
} from "../selectors/selectors";
import { fetchRoutine } from "../features/routine/routineSlice";
import { fetchWorkouts } from "../features/workouts/workoutsSlice";
import { fetchExersizes } from "../features/exersizes/exersizesSlice";
import { Loader } from "../components/Loader";
import { RoutinePage } from "../features/routine/RoutinePage";
import { RoutineDayPage } from "../features/routine/RoutineDayPage";
import { WorkoutsPage } from "../features/workouts/workoutsPage/WorkoutsPage";
import { WorkoutPage } from "../features/workouts/workoutPage/WorkoutPage";
import { AddEditWorkoutPage } from "../features/workouts/addEditWorkout/AddEditWorkoutPage";
import { ExersizesPage } from "../features/exersizes/ExersizesPage";
import { AnalyticPage } from "../features/analytic/AnalyticPage";
import { AccountPage } from "../features/account/AccountPage";
import { Navbar } from "../components/navbar/Navbar";
import { AddRoutineDayPage } from "../features/routine/addEditRoutineDay/AddRoutineDayPage";
import { CheckSlugContainer } from "../components/CheckSlugContainer";
import { PageNotFound } from "../features/PageNotFound";

type Props = {};

export const AuthenticatedApp: React.FC<Props> = (props) => {
  const routineIsFetching = useSelector(getRoutineIsFetching);
  const workoutsIsFetching = useSelector(getWorkoutsIsFetching);
  const exersizesIsFetching = useSelector(getExersizesIsFetching);

  const [dataIsFetching, setDataIsFetching] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRoutine());
    dispatch(fetchWorkouts());
    dispatch(fetchExersizes());
  }, [dispatch]);

  useEffect(() => {
    setDataIsFetching(
      routineIsFetching || workoutsIsFetching || exersizesIsFetching
    );
  }, [routineIsFetching, workoutsIsFetching, exersizesIsFetching]);

  if (dataIsFetching) {
    return <Loader fullpage />;
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
        <Route path="/routine/add-routine-day" exact>
          <AddRoutineDayPage />
        </Route>
        <Route path="/routine/:dayId">
          <CheckSlugContainer stateSelector={getRoutine} slug="dayId">
            <RoutineDayPage />
          </CheckSlugContainer>
        </Route>
        <Route path="/routine">
          <RoutinePage />
        </Route>
        <Route path="/workouts/add-workout" exact>
          <AddEditWorkoutPage />
        </Route>
        <Route path="/workouts/:workoutSlug">
          <CheckSlugContainer
            stateSelector={getWorkoutSlugs}
            slug="workoutSlug"
          >
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
