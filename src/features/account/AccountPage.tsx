import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import { Button } from "../../components/Button";
import { PageTitle } from "../../components/PageTitle";
import { login, logout } from "../../app/authSlice";
import { RootState } from "../../app/rootReducer";

type Props = {};

export const AccountPage: React.FC<Props> = (props) => {
  useDocumentTitle("Аккаунт");
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);

  const handleLogin = () => {
    dispatch(login({ email: "test@gmail.com", password: "123456" }));
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <AccountContainer>
      <PageTitle>Аккаунт</PageTitle>
      <div>Пользователь {user?.email}</div>

      {user ? (
        <Button onClick={handleLogout} invert>
          Выйти
        </Button>
      ) : (
        <Button onClick={handleLogin}>Войти</Button>
      )}
    </AccountContainer>
  );
};

const AccountContainer = styled.div``;
