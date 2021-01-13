import React from "react";
import styled from "styled-components";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";

type Props = {};

export const AccountPage: React.FC<Props> = (props) => {
  useDocumentTitle("Аккаунт");

  return <AccountContainer>Аккаунт</AccountContainer>;
};

const AccountContainer = styled.div``;
