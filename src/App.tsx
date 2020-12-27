import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme";
import GlobalStyle from "./theme/GlobalStyle";
import Routine from "./components/routine/Routine";
import Workouts from "./components/workouts/Workouts";
import Exersizes from "./components/exersizes/Exersizes";
import Analytic from "./components/analytic/Analytic";
import Account from "./components/account/Account";
import Navbar from "./components/navbar/Navbar";
import { workoutsJSON } from "./data/workoutsJSON";
import { exersizesJSON } from "./data/exersizesJSON";
import { routineJSON } from "./data/routineJSON";
import { exersizeCategoriesJSON } from "./data/exersizeCategoriesJSON";

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
          <Route path="/routine">
            <Routine
              routine={routineJSON}
              workouts={workoutsJSON}
              exersizeBase={exersizesJSON}
            />
          </Route>
          <Route path="/workouts">
            <Workouts workouts={workoutsJSON} exersizeBase={exersizesJSON} />
          </Route>
          <Route path="/analytic">
            <Analytic />
          </Route>
          <Route path="/exersizes">
            <Exersizes
              exersizeBase={exersizesJSON}
              exersizeCategories={exersizeCategoriesJSON}
            />
          </Route>
          <Route path="/account">
            <Account />
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
