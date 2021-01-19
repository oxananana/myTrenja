import React from "react";
import styled from "styled-components";
import { authAPI } from "../../api/authAPI";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import { Button } from "../../components/Button";
import { PageTitle } from "../../components/PageTitle";

type Props = {
  user: any;
};

export const AccountPage: React.FC<Props> = (props) => {
  useDocumentTitle("Аккаунт");

  const login = () => {
    authAPI.login("test@gmail.com", "123456");
  };

  const logout = () => {
    authAPI.logout();
  };

  return (
    <AccountContainer>
      <PageTitle>Аккаунт</PageTitle>
      <div>Пользователь {props.user?.email}</div>

      {props.user ? (
        <Button onClick={logout} invert>
          Выйти
        </Button>
      ) : (
        <Button onClick={login}>Войти</Button>
      )}
    </AccountContainer>
  );
};

const AccountContainer = styled.div``;
