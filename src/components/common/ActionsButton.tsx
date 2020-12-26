import React from "react";
import styled from "styled-components";
import { Icon } from "./Icon";

type Props = {
  onClick: () => void;
};

const ActionsButton: React.FC<Props> = (props) => {
  return (
    <ButtonContainer onClick={props.onClick}>
      <Icon name="dots" />
    </ButtonContainer>
  );
};

const ButtonContainer = styled.button`
  height: 20px;
  width: 20px;
  color: ${({ theme }) => theme.iconBtn.base};

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.iconBtn.baseHover};
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;

export default ActionsButton;
