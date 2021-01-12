import React from "react";
import styled from "styled-components";
import { Set as SetType } from "../../../entities/workout";
import { InputMini } from "../../../components/form/InputMini";
import { Checkbox } from "../../../components/form/Checkbox";
import { Icon } from "../../../components/Icon";

type Props = SetType & { isComplete?: boolean };

export const Set: React.FC<Props> = (props) => {
  const { weight, reps, isComplete } = props;

  return (
    <SetContainer>
      <Reps>
        <InputMini value={weight.toString()} unit="ед." />
        <IconContainer>
          <Icon name="multiple" />
        </IconContainer>
        <InputMini value={reps.toString()} unit="повт." />
      </Reps>
      {isComplete !== undefined && <IsCompleteCheckbox checked={isComplete} />}
    </SetContainer>
  );
};

const SetContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & + & {
    margin-top: 12px;
  }
`;

const Reps = styled.div`
  margin-right: 20px;
  display: flex;
  align-items: center;
`;

const IconContainer = styled.div`
  margin: 0 16px;

  svg {
    width: 10px;
    height: 10px;
  }
`;

const IsCompleteCheckbox = styled(Checkbox)``;
