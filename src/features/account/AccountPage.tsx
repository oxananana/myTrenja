import React from "react";
import styled from "styled-components";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import { Button } from "../../components/Button";
import { PageTitle } from "../../components/PageTitle";
import { Loader } from "../../components/Loader";
import { useDispatch } from "react-redux";
import { login, logout } from "../../app/authSlice";
import { User } from "../../entities/user";
import { Nullable } from "../../commonTypes";

type Props = {
  user: Nullable<User>;
  isFetching: boolean;
};

export const AccountPage: React.FC<Props> = (props) => {
  useDocumentTitle("Аккаунт");
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(login({ email: "test@gmail.com", password: "123456" }));
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <AccountContainer>
      <PageTitle>Аккаунт</PageTitle>
      {props.isFetching && <Loader />}
      <div>Пользователь {props.user?.email}</div>

      {props.user ? (
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
