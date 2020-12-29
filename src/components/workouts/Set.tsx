import React from "react";
import styled from "styled-components";
import { Set as SetType } from "../../entities/workout";
import InputMini from "../common/form/InputMini";
import { Icon } from "../common/Icon";

type Props = SetType;

const Set: React.FC<Props> = (props) => {
  const { weight, reps } = props;

  return (
    <SetContainer>
      <InputMini value={weight.toString()} unit="ед." />
      <IconContainer>
        <Icon name="multiple" />
      </IconContainer>
      <InputMini value={reps.toString()} unit="повт." />
    </SetContainer>
  );
};

const SetContainer = styled.div`
  display: flex;
  align-items: center;

  & + & {
    margin-top: 12px;
  }
`;

const IconContainer = styled.div`
  margin: 0 16px;

  svg {
    width: 10px;
    height: 10px;
  }
`;

export default Set;
