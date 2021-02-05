import React, { FC } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useDocumentTitle } from "../../../hooks/useDocumentTitle";
import { WorkoutCard } from "./WorkoutCard";
import { AddButtonHeader } from "../../../components/AddButtonHeader";
import { getWorkouts } from "../../../selectors/selectors";

type Props = {};

export const WorkoutsPage: FC<Props> = (props) => {
  const workouts = useSelector(getWorkouts);
  useDocumentTitle("Тренировки");

  return (
    <Workouts>
      <AddButtonHeader title="Тренировки" link="/workouts/add-workout" />

      <WorkoutsList>
        {Object.entries(workouts).map(([id, workout]) => {
          return <WorkoutCard key={id} id={id} workout={workout} />;
        })}
      </WorkoutsList>
    </Workouts>
  );
};

const Workouts = styled.div``;
const WorkoutsList = styled.div``;
