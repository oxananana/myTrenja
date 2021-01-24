import React from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import { ThemeProvider } from "styled-components";
import { theme } from "../theme/theme";
import GlobalStyle from "../theme/GlobalStyle";
import { useAuthState } from "../hooks/useAuthState";
import { Loader } from "../components/Loader";
import { AuthenticatedApp } from "./AuthenticatedApp";
import { Button } from "../components/Button";
import { login } from "./authSlice";

const App: React.FC = () => {
  const auth = useAuthState();
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(login({ email: "test@gmail.com", password: "123456" }));
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {!auth.isFetching && !auth.user && (
        <Button onClick={handleLogin}>Войти</Button>
      )}
      {auth.isFetching ? (
        <Loader fullpage />
      ) : (
        auth.user && <AuthenticatedApp />
      )}
    </ThemeProvider>
  );
};

export default App;
