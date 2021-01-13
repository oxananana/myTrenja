import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useDocumentTitle } from "../../../hooks/useDocumentTitle";
import { ActionsButton } from "../../../components/ActionsButton";
import { WorkoutExersizes } from "./WorkoutExersizes";
import {
  getExersizes,
  getWorkoutSlugs,
  getWorkouts,
} from "../../../selectors/selectors";

type Props = {};

export const WorkoutPage: React.FC<Props> = (props) => {
  const workouts = useSelector(getWorkouts);
  const workoutSlugs = useSelector(getWorkoutSlugs);
  const exersizeBase = useSelector(getExersizes);

  const { workoutSlug } = useParams<{ workoutSlug: string }>();
  const workout = workouts[workoutSlugs[workoutSlug].id];
  const { title, exersizes } = workout;

  useDocumentTitle(title);

  return (
    <WorkoutContainer>
      <Header>
        <Title>{title}</Title>
        <ActionsButton onClick={() => {}} />
      </Header>
      <WorkoutExersizes exersizeBase={exersizeBase} exersizes={exersizes} />
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
