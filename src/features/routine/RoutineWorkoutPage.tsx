import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import { ActionsButton } from "../../components/ActionsButton";
import { EditRoutineWorkout } from "./addEditRoutineWorkout/EditRoutineWorkout";
import { WorkoutExersizes } from "../workouts/workoutPage/WorkoutExersizes";
import { formatToReadableDate } from "../../utils/formatToReadableDate";
import { getRoutineWorkouts } from "../../selectors/selectors";
import { Dropdown } from "../../components/Dropdown";

type Props = {};

export const RoutineWorkoutPage: React.FC<Props> = () => {
  const id = useParams<{ routineWorkoutId: string }>().routineWorkoutId;
  const routineWorkouts = useSelector(getRoutineWorkouts);

  const { date = "", workoutId, title, exersizes } = routineWorkouts[id];
  const readableDate = formatToReadableDate(date);
  useDocumentTitle(`Расписание — ${readableDate}`);

  const [editMode, setEditMode] = useState<boolean>(false);
  const [dropdownIsOpen, setDropdownIsOpen] = useState<boolean>(false);

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  const toggleDropdown = () => {
    setDropdownIsOpen(!dropdownIsOpen);
  };

  const removeRoutineDay = () => {};

  if (editMode) {
    return (
      <EditRoutineWorkout
        id={id}
        date={date}
        title={title}
        workoutId={workoutId}
        exersizes={exersizes}
        toggleEditMode={toggleEditMode}
      />
    );
  }

  return (
    <RoutineWorkout>
      <Header>
        <Date>{readableDate}</Date>
        <Dropdown
          onClose={toggleDropdown}
          isOpen={dropdownIsOpen}
          actions={[
            { title: "Редактировать", onClick: toggleEditMode },
            { title: "Удалить", onClick: removeRoutineDay },
          ]}
        >
          <ActionsButton onClick={toggleDropdown} />
        </Dropdown>
      </Header>
      <Title>{title}</Title>
      <WorkoutExersizes isForm={false} exersizes={exersizes} />
    </RoutineWorkout>
  );
};

const RoutineWorkout = styled.div``;

const Date = styled.div``;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 20px;
`;
