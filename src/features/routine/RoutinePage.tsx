import React, { FC } from "react";
import styled from "styled-components";
import { WorkoutDay } from "./WorkoutDay";
import { AddButtonHeader } from "../../components/AddButtonHeader";
import { Routine as RoutineType } from "../../entities/routine";
import { Workouts as WorkoutsType } from "../../entities/workout";
import { Exersizes as ExersizesType } from "../../entities/exersize";

type Props = {
  routine: RoutineType;
  workouts: WorkoutsType;
  exersizeBase: ExersizesType;
};

export const RoutinePage: FC<Props> = (props) => {
  const { routine, workouts, exersizeBase } = props;

  return (
    <RoutineContainer>
      <AddButtonHeader title="Расписание" link="/routine/new-workout-day" />

      {Object.values(routine).map((workoutDay) => {
        return (
          <WorkoutDay
            {...workoutDay}
            key={workoutDay.id}
            workouts={workouts}
            exersizeBase={exersizeBase}
          />
        );
      })}
    </RoutineContainer>
  );
};

const RoutineContainer = styled.div``;
