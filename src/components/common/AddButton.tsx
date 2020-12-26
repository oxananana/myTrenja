import React from "react";
import styled from "styled-components";
import { Icon } from "./Icon";

type Props = {
  onClick: () => void;
};

const AddButton: React.FC<Props> = (props) => {
  return (
    <ButtonContainer onClick={props.onClick}>
      <Icon name="plus" />
    </ButtonContainer>
  );
};

const ButtonContainer = styled.button`
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

export default AddButton;
