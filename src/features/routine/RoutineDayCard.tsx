import React from "react";
import styled from "styled-components";
import { formattingDate } from "../../utils/formattingDate";
import { RoutineDay } from "../../entities/routine";
import { Workouts as WorkoutsType } from "../../entities/workout";
import { Exersizes as ExersizesType } from "../../entities/exersize";
import { ActionsButton } from "../../components/ActionsButton";
import { NavLink } from "react-router-dom";

type Props = RoutineDay & {
  workouts: WorkoutsType;
  exersizeBase: ExersizesType;
};

export const RoutineDayCard: React.FC<Props> = (props) => {
  const { id, workoutId } = props;

  const { title, exersizes } = props.workouts[workoutId];

  return (
    <RoutineDayNavLink to={`/routine/${id}`}>
      <Header>
        <DayDate>{formattingDate(id)}</DayDate>
        <ActionsButton onClick={() => {}} />
      </Header>
      <Title>{title}</Title>
      <ExersizesList>
        {exersizes.map((item) => {
          return (
            <ExersizesListItem key={item.id}>
              {props.exersizeBase[item.id].title}
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