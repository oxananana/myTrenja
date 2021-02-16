import React from "react";
import styled from "styled-components";
import { Set as SetType } from "../../../entities/workout";
import { SetParam } from "./SetParam";
import { Checkbox } from "../../../components/form/Checkbox";
import { Field } from "../../../components/form/Field";
import { Icon } from "../../../components/Icon";

type Props = SetType & {
  isForm: boolean;
  isComplete?: boolean;
  fieldName: string;
};

export const Set: React.FC<Props> = (props) => {
  const { isForm, fieldName, weight, reps, isComplete } = props;

  return (
    <SetContainer>
      <Reps>
        <SetParam
          isForm={isForm}
          name={`${fieldName}.weight`}
          value={weight.toString()}
          unit="ед."
        />
        <IconContainer>
          <Icon name="multiple" />
        </IconContainer>
        <SetParam
          isForm={isForm}
          name={`${fieldName}.reps`}
          value={reps.toString()}
          unit="повт."
        />
      </Reps>
      {isComplete !== undefined &&
        (isForm ? (
          <Field
            name={`${fieldName}.isComplete`}
            type="checkbox"
            component={Checkbox}
          />
        ) : (
          isComplete && <Icon name="check" size={16} />
        ))}
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
