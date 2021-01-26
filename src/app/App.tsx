import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "../theme/theme";
import GlobalStyle from "../theme/GlobalStyle";
import { useAuthState } from "../hooks/useAuthState";
import { Loader } from "../components/Loader";
import { AuthenticatedApp } from "./AuthenticatedApp";
import { LoginPage } from "../features/login/LoginPage";
import { ErrorBoundary } from "../components/ErrorBoundary";

const App: React.FC = () => {
  const auth = useAuthState();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <PageContainer>
        <ErrorBoundary>
          {auth.isFetching ? (
            <Loader />
          ) : (
            <>
              <Route path="/login">
                <LoginPage />
              </Route>
              {auth.user && <AuthenticatedApp />}
            </>
          )}
        </ErrorBoundary>
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
