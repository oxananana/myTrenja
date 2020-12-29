import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Workouts, WorkoutSlugs } from "../../entities/workout";
import { Exersizes } from "../../entities/exersize";
import ActionsButton from "../common/ActionsButton";
import WorkoutExersize from "./WorkoutExersize";

type Props = {
  workouts: Workouts;
  workoutSlugs: WorkoutSlugs;
  exersizeBase: Exersizes;
};

type Params = {
  workoutSlug: string;
};

const Workout: React.FC<Props> = (props) => {
  const { workouts, workoutSlugs, exersizeBase } = props;

  const workout = workouts[workoutSlugs[useParams<Params>()["workoutSlug"]].id];

  const { title, exersizes } = workout;

  return (
    <WorkoutContainer>
      <Header>
        <Title>{title}</Title>
        <ActionsButton onClick={() => {}} />
      </Header>
      <ExersizesList>
        {exersizes.map((exersize) => {
          const { id, order, sets } = exersize;

          return (
            <WorkoutExersize
              key={id}
              title={exersizeBase[id].title}
              order={order}
              sets={sets}
            />
          );
        })}
      </ExersizesList>
    </WorkoutContainer>
  );
};

const WorkoutContainer = styled.div``;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 500;
`;

const ExersizesList = styled.div``;

export default Workout;
