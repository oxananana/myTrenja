import React from "react";
import styled from "styled-components";
import { WorkoutExersizes as WorkoutExersizesType } from "../../../entities/workout";
import { ExersizesParams } from "../../../entities/routine";
import { WorkoutExersize } from "./WorkoutExersize";
import { useSelector } from "react-redux";
import { getExersizes } from "../../../selectors/selectors";

type Props = {
  exersizes: WorkoutExersizesType;
  exersizesParams?: ExersizesParams;
};

export const WorkoutExersizes: React.FC<Props> = (props) => {
  const { exersizes, exersizesParams } = props;

  const exersizeBase = useSelector(getExersizes);

  return (
    <ExersizesList>
      {exersizes.map((exersize, index) => {
        const { id, sets } = exersize;
        const exersizeParams = exersizesParams?.[id];

        const setsParams = exersizeParams?.sets;
        const isComplete = exersizeParams?.isComplete;

        return (
          <WorkoutExersize
            key={id}
            title={exersizeBase[id].title}
            order={index + 1}
            sets={sets}
            setsParams={setsParams}
            isComplete={isComplete}
          />
        );
      })}
    </ExersizesList>
  );
};

const ExersizesList = styled.div``;
