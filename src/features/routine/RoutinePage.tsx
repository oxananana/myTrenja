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

  return (
    <RoutineContainer>
      <AddButtonHeader title="Расписание" link="/routine/add-routine-workout" />
      {Object.entries(routine).map(
        ([id, workout]: [id: string, workout: Workout]) => {
          return (
            <RoutineWorkoutCard
              key={id}
              id={id}
              date={workout.date}
              title={workout.title}
              exersizesIds={Object.keys(workout.exersizes)}
            />
          );
        }
      )}
    </RoutineContainer>
  );
};

const RoutineContainer = styled.div``;
