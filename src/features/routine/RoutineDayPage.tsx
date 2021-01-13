import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import { ActionsButton } from "../../components/ActionsButton";
import { WorkoutExersizes } from "../workouts/workoutPage/WorkoutExersizes";
import { formattingDate } from "../../utils/formattingDate";
import {
  getRoutine,
  getWorkouts,
  getExersizes,
} from "../../selectors/selectors";

type Props = {};

export const RoutineDayPage: React.FC<Props> = () => {
  const { id } = useParams<{ id: string }>();
  const routine = useSelector(getRoutine);
  const workouts = useSelector(getWorkouts);
  const exersizeBase = useSelector(getExersizes);

  const workoutId = routine[id].workoutId;
  const exersizesParams = routine[id].exersizesParams;
  const { title, exersizes } = workouts[workoutId];
  const day = formattingDate(id);

  useDocumentTitle(`Расписание — ${day}`);

  return (
    <RoutineDay>
      <Header>
        <Date>{day}</Date>
        <ActionsButton onClick={() => {}} />
      </Header>
      <Title>{title}</Title>
      <WorkoutExersizes
        exersizeBase={exersizeBase}
        exersizes={exersizes}
        exersizesParams={exersizesParams}
      />
    </RoutineDay>
  );
};

const RoutineDay = styled.div``;

const Date = styled.div``;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 20px;
`;
