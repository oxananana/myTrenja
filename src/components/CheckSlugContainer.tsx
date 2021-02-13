import React, { ReactElement } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../app/rootReducer";
import { Routine } from "../entities/routine";
import { WorkoutSlugs } from "../entities/workout";
import { PageNotFound } from "../features/PageNotFound";

type Props = {
  stateSelector: (state: RootState) => WorkoutSlugs | Routine;
  slug: "workoutSlug" | "workoutId" | "routineWorkoutId";
  children: ReactElement;
};

type Params = {
  workoutSlug: string;
  routineWorkoutId: string;
  workoutId: string;
};

export const CheckSlugContainer: React.FC<Props> = (props) => {
  const { stateSelector, slug, children } = props;
  const currentSlug = useParams<Params>()[slug];
  const controlList = useSelector(stateSelector);

  if (controlList[currentSlug]) {
    return children;
  }

  return <PageNotFound />;
};
