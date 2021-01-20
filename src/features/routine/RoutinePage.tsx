import React, { FC, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import { RootState } from "../../app/rootReducer";
import { fetchRoutine } from "./routineSlice";
import { RoutineDayCard } from "./RoutineDayCard";
import { AddButtonHeader } from "../../components/AddButtonHeader";
import { Loader } from "../../components/Loader";

type Props = {};

export const RoutinePage: FC<Props> = (props) => {
  const routine = useSelector((state: RootState) => state.routine);
  const workouts = useSelector((state: RootState) => state.workouts.workouts);
  const exersizeBase = useSelector(
    (state: RootState) => state.exersizes.exersizes
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRoutine());
  }, [dispatch]);

  useDocumentTitle("Расписание");

  return (
    <RoutineContainer>
      <AddButtonHeader title="Расписание" link="/routine/add-routine-day" />
      {routine.isFetching ? (
        <Loader />
      ) : (
        Object.values(routine.data).map((routineDay) => {
          return (
            <RoutineDayCard
              {...routineDay}
              key={routineDay.id}
              workouts={workouts}
              exersizeBase={exersizeBase}
            />
          );
        })
      )}
    </RoutineContainer>
  );
};

const RoutineContainer = styled.div``;
