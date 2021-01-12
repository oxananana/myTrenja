import React from "react";
import styled from "styled-components";
import { Exersizes } from "../../../entities/exersize";
import { WorkoutExersizes as WorkoutExersizesType } from "../../../entities/workout";
import { ExersizesParams } from "../../../entities/routine";
import { WorkoutExersize } from "./WorkoutExersize";

type Props = {
  exersizes: WorkoutExersizesType;
  exersizeBase: Exersizes;
  exersizesParams?: ExersizesParams;
};

export const WorkoutExersizes: React.FC<Props> = (props) => {
  const { exersizes, exersizeBase, exersizesParams } = props;

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
