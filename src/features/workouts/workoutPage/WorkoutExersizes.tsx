import React, { useContext } from "react";
import styled from "styled-components";
import {
  WorkoutExersize as WorkoutExersizeType,
  WorkoutExersizes as WorkoutExersizesType,
} from "../../../entities/workout";
import { RoutineExersizes, RoutineExersize } from "../../../entities/routine";
import { WorkoutExersize } from "./WorkoutExersize";
import { useSelector } from "react-redux";
import { getExersizes, getWorkouts } from "../../../selectors/selectors";
import { FormContext, FormContextType } from "../../../components/form/Form";

type Props = {
  isForm: boolean;
  workoutId?: string;
  exersizes: RoutineExersizes | WorkoutExersizesType;
};

export const WorkoutExersizes: React.FC<Props> = (props) => {
  const { isForm, exersizes } = props;

  const exersizeBase = useSelector(getExersizes);

  return (
    <ExersizesList>
      {Object.values(exersizes).map(
        (exersize: RoutineExersize | WorkoutExersizeType, index: number) => {
          const { id, sets } = exersize;

          // const isComplete = exersize.isComplete ? exersize.isComplete : undefined;
          const isComplete = false;

          return (
            <WorkoutExersize
              isForm={isForm}
              key={id}
              exersizeId={id}
              title={exersizeBase[id].title}
              order={index + 1}
              sets={sets}
              isComplete={isComplete}
            />
          );
        }
      )}
    </ExersizesList>
  );
};

const ExersizesList = styled.div``;
