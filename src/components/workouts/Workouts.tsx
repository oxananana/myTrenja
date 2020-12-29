import React, { FC } from "react";
import styled from "styled-components";
import WorkoutCard from "./WorkoutCard";
import AddButtonHeader from "../common/AddButtonHeader";
import { Workouts as WorkoutsType } from "../../entities/workout";
import { Exersizes as ExersizesType } from "../../entities/exersize";

type Props = {
  workouts: WorkoutsType;
  exersizeBase: ExersizesType;
};

const Workouts: FC<Props> = (props) => {
  const { workouts, exersizeBase } = props;

  return (
    <WorkoutsContainer>
      <AddButtonHeader title="Тренировки" onClick={() => {}} />

      <WorkoutsList>
        {Object.values(workouts).map((workout) => {
          return (
            <WorkoutCard
              key={workout.id}
              workout={workout}
              exersizeBase={exersizeBase}
            />
          );
        })}
      </WorkoutsList>
    </WorkoutsContainer>
  );
};

const WorkoutsContainer = styled.div``;
const WorkoutsList = styled.div``;

export default Workouts;
