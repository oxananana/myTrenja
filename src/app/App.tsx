import React from "react";
import "./App.css";
import { ThemeProvider } from "styled-components";
import { theme } from "../theme/theme";
import GlobalStyle from "../theme/GlobalStyle";
import { useAuthState } from "../hooks/useAuthState";
import { Loader } from "../components/Loader";
import { AuthenticatedApp } from "./AuthenticatedApp";

const App: React.FC = () => {
  const auth = useAuthState();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {auth.isFetching ? (
        <Loader fullpage />
      ) : (
        auth.user && <AuthenticatedApp />
      )}
    </ThemeProvider>
  );
};

export default App;
