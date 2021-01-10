import React, { FC } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { WorkoutCard } from "./WorkoutCard";
import { AddButtonHeader } from "../../../components/AddButtonHeader";
import { RootState } from "../../../app/rootReducer";

type Props = {};

export const WorkoutsPage: FC<Props> = (props) => {
  const workouts = useSelector((state: RootState) => state.workouts);

  return (
    <Workouts>
      <AddButtonHeader title="Тренировки" link="/workouts/add-workout" />

      <WorkoutsList>
        {Object.values(workouts).map((workout) => {
          return <WorkoutCard key={workout.id} workout={workout} />;
        })}
      </WorkoutsList>
    </Workouts>
  );
};

const Workouts = styled.div``;
const WorkoutsList = styled.div``;
