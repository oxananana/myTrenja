import React from "react";
import styled from "styled-components";
import { WorkoutDay as WorkoutDayType } from "../../entities/routine";
import { Workouts as WorkoutsType } from "../../entities/workout";
import { Exersizes as ExersizesType } from "../../entities/exersize";
import ActionsButton from "../common/ActionsButton";

type Props = WorkoutDayType & {
  workouts: WorkoutsType;
  exersizeBase: ExersizesType;
};

const WorkoutDay: React.FC<Props> = (props) => {
  const { date, workoutId } = props;

  const { title, exersizes } = props.workouts[workoutId];

  return (
    <WorkoutContainer>
      <Header>
        <DayDate>{date}</DayDate>
        <ActionsButton onClick={() => {}} />
      </Header>
      <Title>{title}</Title>
      <ExersizesList>
        {exersizes.map((item) => {
          return (
            <ExersizesListItem key={item.id}>
              {props.exersizeBase[item.id].title}
            </ExersizesListItem>
          );
        })}
      </ExersizesList>
    </WorkoutContainer>
  );
};

const WorkoutContainer = styled.div`
  box-shadow: ${({ theme }) => theme.shadow.base};
  border-radius: ${({ theme }) => theme.borderRadius.base};
  background-color: ${({ theme }) => theme.bg.base};
  padding: 16px;

  &:hover {
    cursor: pointer;
    box-shadow: ${({ theme }) => theme.shadow.baseHover};
  }

  & + & {
    margin-top: 16px;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

const DayDate = styled.div`
  font-size: 16px;
`;

const Title = styled.div`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 8px;
`;

const ExersizesList = styled.ul`
  list-style: none;
  color: ${({ theme }) => theme.text.grey};
`;

const ExersizesListItem = styled.li``;

export default WorkoutDay;
