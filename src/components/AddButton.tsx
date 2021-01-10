import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Icon } from "./Icon";

type Props = {
  link: string;
};

export const AddButton: React.FC<Props> = (props) => {
  return (
    <ButtonLink to={props.link}>
      <Icon name="plus" />
    </ButtonLink>
  );
};

const ButtonLink = styled(NavLink)`
  background-color: ${({ theme }) => theme.bg.base};
  box-shadow: ${({ theme }) => theme.shadow.base};
  color: ${({ theme }) => theme.iconBtn.base};
  height: 32px;
  width: 32px;
  border-radius: 50%;
  padding: 8px;
  cursor: pointer;

  &:hover {
    box-shadow: ${({ theme }) => theme.shadow.baseHover};
    color: ${({ theme }) => theme.iconBtn.baseHover};
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;
