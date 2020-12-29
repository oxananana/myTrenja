import React from "react";
import styled from "styled-components";
import { Sets as SetsType } from "../../entities/workout";
import Set from "./Set";

type Props = {
  title: string;
  order: number;
  sets: SetsType;
};

const WorkoutExersize: React.FC<Props> = (props) => {
  const { title, order, sets } = props;

  return (
    <ExersizeContainer>
      <Title>
        {order}. {title}
      </Title>
      <Sets>
        {Object.values(sets).map((set, index) => {
          return <Set weight={set.weight} reps={set.reps} key={index} />;
        })}
      </Sets>
    </ExersizeContainer>
  );
};

const ExersizeContainer = styled.div`
  box-shadow: ${({ theme }) => theme.shadow.base};
  border-radius: ${({ theme }) => theme.borderRadius.base};
  background-color: ${({ theme }) => theme.bg.base};
  padding: 16px;

  & + & {
    margin-top: 16px;
  }
`;

const Title = styled.div`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 16px;
`;

const Sets = styled.div``;

export default WorkoutExersize;
