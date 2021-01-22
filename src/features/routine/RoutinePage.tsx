import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import { RoutineDayCard } from "./RoutineDayCard";
import { AddButtonHeader } from "../../components/AddButtonHeader";
import {
  getRoutine,
  getWorkouts,
  getExersizes,
} from "../../selectors/selectors";

type Props = {};

export const RoutinePage: React.FC<Props> = (props) => {
  useDocumentTitle("Расписание");
  const routine = useSelector(getRoutine);
  const workoutsBase = useSelector(getWorkouts);
  const exersizeBase = useSelector(getExersizes);

  return (
    <RoutineContainer>
      <AddButtonHeader title="Расписание" link="/routine/add-routine-day" />
      {Object.values(routine).map((routineDay) => {
        return (
          <RoutineDayCard
            {...routineDay}
            key={routineDay.id}
            workoutsBase={workoutsBase}
            exersizeBase={exersizeBase}
          />
        );
      })}
    </RoutineContainer>
  );
};

const RoutineContainer = styled.div``;
