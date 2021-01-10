import React from "react";
import styled from "styled-components";
import { AddButton } from "./AddButton";
import { PageTitle } from "./PageTitle";

type Props = {
  title: string;
  link: string;
};

export const AddButtonHeader: React.FC<Props> = (props) => {
  return (
    <Header>
      <PageTitle withButton={true}>{props.title}</PageTitle>
      <AddButton link={props.link} />
    </Header>
  );
};

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;
