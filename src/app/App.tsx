import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "../theme/theme";
import GlobalStyle from "../theme/GlobalStyle";
import { useAuthState } from "react-firebase-hooks/auth";
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
import { getRoutine, getWorkoutSlugs } from "../selectors/selectors";
import { PageNotFound } from "../features/PageNotFound";
import { authAPI } from "../api/authAPI";

const App: React.FC = () => {
  const [user, loading, error] = useAuthState(authAPI.getAuth());

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <PageContainer>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Redirect to="/routine" />
          </Route>
          <Route path="/account">
            <AccountPage user={user} />
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
      </PageContainer>
    </ThemeProvider>
  );
};

const PageContainer = styled.div`
  margin: 0 auto;
  max-width: 420px;
  padding: 24px 24px 56px;
  position: relative;
`;

export default App;
