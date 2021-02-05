import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import { RoutineDayCard } from "./RoutineDayCard";
import { AddButtonHeader } from "../../components/AddButtonHeader";
import { getRoutine } from "../../selectors/selectors";

type Props = {};

export const RoutinePage: React.FC<Props> = (props) => {
  useDocumentTitle("Расписание");
  const routine = useSelector(getRoutine);

  return (
    <RoutineContainer>
      <AddButtonHeader title="Расписание" link="/routine/add-routine-day" />
      {Object.values(routine).map((routineDay) => {
        return (
          <RoutineDayCard
            id={routineDay.id}
            key={routineDay.id}
            workoutId={routineDay.workoutId}
            exersizesIds={Object.keys(routineDay.exersizes)}
          />
        );
      })}
    </RoutineContainer>
  );
};

const RoutineContainer = styled.div``;
