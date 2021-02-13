import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import { RoutineWorkoutCard } from "./RoutineWorkoutCard";
import { AddButtonHeader } from "../../components/AddButtonHeader";
import { getRoutineWorkouts } from "../../selectors/selectors";
import { Workout } from "../../entities/workout";

type Props = {};

export const RoutinePage: React.FC<Props> = (props) => {
  useDocumentTitle("Расписание");
  const routine = useSelector(getRoutineWorkouts);

  const orderedWorkouts = Object.entries(routine).sort(
    (
      [, current]: [id: string, workout: Workout],
      [, next]: [id: string, workout: Workout]
    ) => {
      let currentDate: Date | null = new Date(current.date);
      let nextDate: Date | null = new Date(next.date);
      const diff = +nextDate - +currentDate;
      currentDate = nextDate = null;
      return diff;
    }
  );

  return (
    <RoutineContainer>
      <AddButtonHeader title="Расписание" link="/routine/add-routine-workout" />
      {orderedWorkouts.map(([id, workout]: [id: string, workout: Workout]) => {
        return (
          <RoutineWorkoutCard
            key={id}
            id={id}
            date={workout.date}
            title={workout.title}
            exersizesIds={Object.keys(workout.exersizes)}
          />
        );
      })}
    </RoutineContainer>
  );
};

const RoutineContainer = styled.div``;
