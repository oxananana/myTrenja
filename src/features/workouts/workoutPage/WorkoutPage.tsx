import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { RootState } from "../../../app/rootReducer";
import { ActionsButton } from "../../../components/ActionsButton";
import { WorkoutExersize } from "./WorkoutExersize";

type Props = {};

type Params = {
  workoutSlug: string;
};

export const WorkoutPage: React.FC<Props> = (props) => {
  const workouts = useSelector((state: RootState) => state.workouts.workouts);
  const workoutSlugs = useSelector(
    (state: RootState) => state.workouts.workoutSlugs
  );
  const exersizeBase = useSelector(
    (state: RootState) => state.exersizes.exersizes
  );

  const workout = workouts[workoutSlugs[useParams<Params>()["workoutSlug"]].id];

  const { title, exersizes } = workout;

  return (
    <WorkoutContainer>
      <Header>
        <Title>{title}</Title>
        <ActionsButton onClick={() => {}} />
      </Header>
      <ExersizesList>
        {exersizes.map((exersize, index) => {
          const { id, sets } = exersize;

          return (
            <WorkoutExersize
              key={id}
              title={exersizeBase[id].title}
              order={index + 1}
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
