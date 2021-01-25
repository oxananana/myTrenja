import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import { Button } from "../../components/Button";
import { PageTitle } from "../../components/PageTitle";
import { logout } from "../../app/authSlice";
import { RootState } from "../../app/rootReducer";

type Props = {};

export const AccountPage: React.FC<Props> = (props) => {
  useDocumentTitle("Аккаунт");
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <AccountContainer>
      <PageTitle>Аккаунт</PageTitle>
      <UserLogin>Пользователь: {user?.email}</UserLogin>

      {user && (
        <Button onClick={handleLogout} invert>
          Выйти
        </Button>
      )}
    </AccountContainer>
  );
};

const AccountContainer = styled.div``;
const UserLogin = styled.div`
  margin-bottom: 20px;
`;
