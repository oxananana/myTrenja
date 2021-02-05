import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { Workout as WorkoutType } from "../../../entities/workout";
import { ActionsButton } from "../../../components/ActionsButton";
import { NavLink } from "react-router-dom";
import { deleteWorkout } from "../workoutsSlice";
import { getExersizes } from "../../../selectors/selectors";

type Props = {
  workout: WorkoutType;
};

export const WorkoutCard: React.FC<Props> = (props) => {
  const exersizeBase = useSelector(getExersizes);

  const dispatch = useDispatch();

  const { id, title, exersizes, slug } = props.workout;

  const handleDeleteWorkout = (e: any) => {
    e.preventDefault();
    dispatch(deleteWorkout({ id }));
  };

  return (
    <WorkoutNavLink to={`/workouts/${slug}`}>
      <Header>
        <Title>{title}</Title>
        {/* <ActionsButton onClick={() => {}} /> */}
      </Header>
      <ExersizesList>
        {Object.values(exersizes).map((exersize) => {
          return (
            <ExersizesListItem key={exersize.id}>
              {exersizeBase[exersize.id].title}
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
  padding-left: 16px;
  list-style-type: inherit;
  color: ${({ theme }) => theme.text.grey};
`;

const ExersizesListItem = styled.li`
  & + & {
    margin-top: 4px;
  }
`;
