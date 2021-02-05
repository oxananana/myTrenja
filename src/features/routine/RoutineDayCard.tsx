import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { formatToReadableDate } from "../../utils/formatToReadableDate";
import { ActionsButton } from "../../components/ActionsButton";
import { NavLink } from "react-router-dom";
import { getWorkouts, getExersizes } from "../../selectors/selectors";

type Props = { id: string; workoutId: string; exersizesIds: string[] };

export const RoutineDayCard: React.FC<Props> = (props) => {
  const { id, workoutId, exersizesIds } = props;

  const workoutsBase = useSelector(getWorkouts);
  const exersizeBase = useSelector(getExersizes);

  const { title } = workoutsBase[workoutId];

  return (
    <RoutineDayNavLink to={`/routine/${id}`}>
      <Header>
        <DayDate>{formatToReadableDate(id)}</DayDate>
        {/* <ActionsButton onClick={() => {}} /> */}
      </Header>
      <Title>{title}</Title>
      <ExersizesList>
        {exersizesIds.map((exersizeId) => {
          return (
            <ExersizesListItem key={exersizeId}>
              {exersizeBase[exersizeId].title}
            </ExersizesListItem>
          );
        })}
      </ExersizesList>
    </RoutineDayNavLink>
  );
};

const RoutineDayNavLink = styled(NavLink)`
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

const DayDate = styled.div``;

const Title = styled.div`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 8px;
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
