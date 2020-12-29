import React from "react";
import styled from "styled-components";
import { Workout as WorkoutType } from "../../entities/workout";
import { Exersizes as ExersizesType } from "../../entities/exersize";
import ActionsButton from "../common/ActionsButton";
import { NavLink } from "react-router-dom";

type Props = {
  workout: WorkoutType;
  exersizeBase: ExersizesType;
};

const WorkoutCard: React.FC<Props> = (props) => {
  const { title, exersizes, slug } = props.workout;

  return (
    <WorkoutNavLink to={`/workouts/${slug}`}>
      <Header>
        <Title>{title}</Title>
        <ActionsButton onClick={() => {}} />
      </Header>
      <ExersizesList>
        {exersizes.map((exersize) => {
          return (
            <ExersizesListItem key={exersize.id}>
              {props.exersizeBase[exersize.id].title}
            </ExersizesListItem>
          );
        })}
      </ExersizesList>
    </WorkoutNavLink>
  );
};

const WorkoutNavLink = styled(NavLink)`
  display: block;
  box-shadow: ${({ theme }) => theme.shadow.base};
  border-radius: ${({ theme }) => theme.borderRadius.base};
  background-color: ${({ theme }) => theme.bg.base};
  padding: 16px;

  &:hover {
    cursor: pointer;
    box-shadow: ${({ theme }) => theme.shadow.baseHover};
  }

  & + & {
    margin-top: 16px;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

const Title = styled.div`
  font-size: 16px;
  font-weight: 500;
`;

const ExersizesList = styled.ul`
  list-style: none;
  color: ${({ theme }) => theme.text.grey};
`;

const ExersizesListItem = styled.li``;

export default WorkoutCard;
