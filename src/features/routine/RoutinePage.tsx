import React, { FC } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { RootState } from "../../app/rootReducer";
import { RoutineDayCard } from "./RoutineDayCard";
import { AddButtonHeader } from "../../components/AddButtonHeader";

type Props = {};

export const RoutinePage: FC<Props> = (props) => {
  const routine = useSelector((state: RootState) => state.routine);
  const workouts = useSelector((state: RootState) => state.workouts.workouts);
  const exersizeBase = useSelector(
    (state: RootState) => state.exersizes.exersizes
  );

  return (
    <RoutineContainer>
      <AddButtonHeader title="Расписание" link="/routine/new-workout-day" />

      {Object.values(routine).map((routineDay) => {
        return (
          <RoutineDayCard
            {...routineDay}
            key={routineDay.id}
            workouts={workouts}
            exersizeBase={exersizeBase}
          />
        );
      })}
    </RoutineContainer>
  );
};

const RoutineContainer = styled.div``;
