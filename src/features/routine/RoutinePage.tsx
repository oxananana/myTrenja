import React, { FC, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import { fetchRoutine } from "./routineSlice";
import {
  getExersizes,
  getRoutine,
  getWorkouts,
} from "../../selectors/selectors";
import { RoutineDayCard } from "./RoutineDayCard";
import { AddButtonHeader } from "../../components/AddButtonHeader";
import { Loader } from "../../components/Loader";
import { isObjectEmpty } from "../../utils/isObjectEmpty";
import { fetchWorkouts } from "../workouts/workoutsSlice";

type Props = {};

export const RoutinePage: FC<Props> = (props) => {
  const routine = useSelector(getRoutine);
  const workouts = useSelector(getWorkouts);
  const exersizeBase = useSelector(getExersizes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRoutine());
    dispatch(fetchWorkouts());
  }, [dispatch]);

  useDocumentTitle("Расписание");

  if (isObjectEmpty(routine) || isObjectEmpty(workouts)) {
    return <Loader />;
  }

  return (
    <RoutineContainer>
      <AddButtonHeader title="Расписание" link="/routine/add-routine-day" />
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
