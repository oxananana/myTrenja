import React from 'react';
import './App.css';
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme";
import GlobalStyle from "./theme/GlobalStyle";
import Workouts from './components/Workouts';
import { workouts } from "./data/workouts";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>

      <Workouts workouts={workouts}/>
    </ThemeProvider>
  );
}

export default App;
