import React from "react";
import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme";
import GlobalStyle from "./theme/GlobalStyle";
import Routine from "./components/routine/Routine";
import Workouts from "./components/workouts/Workouts";
import Exersizes from "./components/exersizes/Exersizes";
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
        <Routine
          routine={routineJSON}
          workouts={workoutsJSON}
          exersizeBase={exersizesJSON}
        />
        <Workouts workouts={workoutsJSON} exersizeBase={exersizesJSON} />
        <Exersizes
          exersizeBase={exersizesJSON}
          exersizeCategories={exersizeCategoriesJSON}
        />
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
