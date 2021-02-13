import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { formatToReadableDate } from "../../utils/formatToReadableDate";
import { ActionsButton } from "../../components/ActionsButton";
import { NavLink } from "react-router-dom";
import { getExersizes } from "../../selectors/selectors";

type Props = {
  id: string;
  date?: string;
  title: string;
  exersizesIds: string[];
};

export const RoutineWorkoutCard: React.FC<Props> = (props) => {
  const { id, date = "", title, exersizesIds } = props;

  const exersizeBase = useSelector(getExersizes);

  return (
    <RoutineWorkoutNavLink to={`/routine/${id}`}>
      <Header>
        <WorkoutDate>{formatToReadableDate(date)}</WorkoutDate>

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
    </RoutineWorkoutNavLink>
  );
};

const RoutineWorkoutNavLink = styled(NavLink)`
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

const WorkoutDate = styled.div``;

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
