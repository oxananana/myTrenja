import React from "react";
import styled from "styled-components";
import { Sets as SetsType } from "../../../entities/workout";
import { Set } from "./Set";
import { SetsParams } from "../../../entities/routine";
import { Checkbox } from "../../../components/form/Checkbox";

type Props = {
  title: string;
  order: number;
  sets: SetsType;
  setsParams?: SetsParams;
  isComplete?: boolean;
};

export const WorkoutExersize: React.FC<Props> = (props) => {
  const { title, order, sets, setsParams, isComplete } = props;

  return (
    <ExersizeContainer>
      <Header>
        <Title>
          {order}. {title}
        </Title>
        {isComplete !== undefined && (
          <IsCompleteCheckbox checked={isComplete} />
        )}
      </Header>
      <Sets>
        {Object.values(sets).map((set, index) => {
          const id = set.id;
          const setParams = setsParams?.[id];
          const isComplete = setParams?.isComplete;

          const weight = setParams?.weight ?? set.weight;
          const reps = setParams?.reps ?? set.reps;

          return (
            <Set
              id={id}
              key={id}
              weight={weight}
              reps={reps}
              isComplete={isComplete}
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
