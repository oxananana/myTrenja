import React from "react";
import styled from "styled-components";
import { Sets as SetsType } from "../../../entities/workout";
import { Set } from "./Set";
import { Checkbox } from "../../../components/form/Checkbox";

type Props = {
  isForm: boolean;
  exersizeId: string;
  title: string;
  order: number;
  sets: SetsType;
  isComplete?: boolean;
};

export const WorkoutExersize: React.FC<Props> = (props) => {
  const { isForm, exersizeId, title, order, sets, isComplete } = props;

  return (
    <ExersizeContainer>
      <Header>
        <Title>
          {order}. {title}
        </Title>
        {/* {isComplete !== undefined && (
          <IsCompleteCheckbox checked={isComplete} />
        )} */}
      </Header>
      <Sets>
        {Object.entries(sets).map(([id, set]) => {
          return (
            <Set
              fieldName={`exersizes.${exersizeId}.sets.${id}`}
              isForm={isForm}
              key={id}
              weight={set.weight}
              reps={set.reps}
              isComplete={set.isComplete}
            />
          );
        })}
      </Sets>
    </ExersizeContainer>
  );
};

const ExersizeContainer = styled.div`
  box-shadow: ${({ theme }) => theme.shadow.base};
  border-radius: ${({ theme }) => theme.borderRadius.base};
  background-color: ${({ theme }) => theme.bg.base};
  padding: 16px;

  & + & {
    margin-top: 16px;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const Title = styled.div`
  font-size: 16px;
  font-weight: 500;
`;

const IsCompleteCheckbox = styled(Checkbox)``;

const Sets = styled.div``;
