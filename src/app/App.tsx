import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "../theme/theme";
import GlobalStyle from "../theme/GlobalStyle";
import { RoutinePage } from "../features/routine/RoutinePage";
import { RoutineDayPage } from "../features/routine/RoutineDayPage";
import { WorkoutsPage } from "../features/workouts/workoutsPage/WorkoutsPage";
import { WorkoutPage } from "../features/workouts/workoutPage/WorkoutPage";
import { AddEditWorkoutForm } from "../features/workouts/AddEditWorkoutForm/AddEditWorkoutForm";
import { ExersizesPage } from "../features/exersizes/ExersizesPage";
import { AnalyticPage } from "../features/analytic/AnalyticPage";
import { AccountPage } from "../features/account/AccountPage";
import { Navbar } from "../components/navbar/Navbar";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <PageContainer>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Redirect to="/routine" />
          </Route>
          <Route path="/routine/:id">
            <RoutineDayPage />
          </Route>
          <Route path="/routine">
            <RoutinePage />
          </Route>
          <Route path="/workouts/add-workout" exact>
            <AddEditWorkoutForm />
          </Route>
          <Route path="/workouts/:workoutSlug">
            <WorkoutPage />
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
          <Route path="/account">
            <AccountPage />
          </Route>
        </Switch>
      </PageContainer>
    </ThemeProvider>
  );
};

const PageContainer = styled.div`
  margin: 0 auto;
  max-width: 420px;
  padding: 24px;
  position: relative;
`;

export default App;
