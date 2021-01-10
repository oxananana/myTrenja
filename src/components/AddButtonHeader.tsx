import React from "react";
import styled from "styled-components";
import { AddButton } from "./AddButton";

type Props = {
  title: string;
  link: string;
};

export const AddButtonHeader: React.FC<Props> = (props) => {
  return (
    <Header>
      <Title>{props.title}</Title>
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

const Title = styled.div`
  font-size: 20px;
  font-weight: 500;
`;
