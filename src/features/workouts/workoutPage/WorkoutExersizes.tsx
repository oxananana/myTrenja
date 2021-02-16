import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import {
  WorkoutExersize as WorkoutExersizeType,
  WorkoutExersizes as WorkoutExersizesType,
} from "../../../entities/workout";
import { WorkoutExersize } from "./WorkoutExersize";
import { getExersizes } from "../../../selectors/selectors";

type Props = {
  isForm: boolean;
  exersizes: WorkoutExersizesType;
};

export const WorkoutExersizes: React.FC<Props> = (props) => {
  const { isForm, exersizes } = props;

  const exersizeBase = useSelector(getExersizes);

  const orderedExersizes = Object.entries(exersizes)
    .map(([id, exersize]: [id: string, exersize: WorkoutExersizeType]) => {
      return { ...exersize, id };
    })
    .sort((current, next) => {
      return current.order - next.order;
    });

  return (
    <ExersizesList>
      {orderedExersizes.map(
        (exersize: WorkoutExersizeType & { id: string }) => {
          const isComplete = exersize.isComplete
            ? exersize.isComplete
            : undefined;

          return (
            <WorkoutExersize
              key={exersize.id}
              isForm={isForm}
              exersizeId={exersize.id}
              title={exersizeBase[exersize.id].title}
              order={exersize.order}
              sets={exersize.sets}
              isComplete={isComplete}
            />
          );
        }
      )}
    </ExersizesList>
  );
};

const ExersizesList = styled.div``;
