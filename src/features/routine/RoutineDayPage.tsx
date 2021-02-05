import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import { ActionsButton } from "../../components/ActionsButton";
import { EditRoutineDay } from "./addEditRoutineDay/EditRoutineDay";
import { WorkoutExersizes } from "../workouts/workoutPage/WorkoutExersizes";
import { formatToReadableDate } from "../../utils/formatToReadableDate";
import { getRoutine, getWorkouts } from "../../selectors/selectors";
import { Dropdown } from "../../components/Dropdown";
import { Form } from "../../components/form/Form";

type Props = {};

export const RoutineDayPage: React.FC<Props> = () => {
  const { dayId } = useParams<{ dayId: string }>();
  const routine = useSelector(getRoutine);
  const workouts = useSelector(getWorkouts);

  const workoutId = routine[dayId].workoutId;
  const exersizes = routine[dayId].exersizes;
  const { title } = workouts[workoutId];
  const day = formatToReadableDate(dayId);
  useDocumentTitle(`Расписание — ${day}`);

  const initialValues = {
    ...exersizes,
  };

  const [editMode, setEditMode] = useState<boolean>(true);
  const [dropdownIsOpen, setDropdownIsOpen] = useState<boolean>(false);

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  const toggleDropdown = () => {
    setDropdownIsOpen(!dropdownIsOpen);
  };

  const removeRoutineDay = () => {};

  const handleSubmit = () => {};

  if (editMode) {
    return (
      <EditRoutineDay
        dayId={dayId}
        toggleEditMode={toggleEditMode}
        workoutId={workoutId}
        exersizes={exersizes}
      />
    );
  }

  return (
    <RoutineDay>
      <Header>
        <Date>{day}</Date>
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
      <WorkoutExersizes
        workoutId={workoutId}
        isForm={false}
        exersizes={exersizes}
      />
    </RoutineDay>
  );
};

const RoutineDay = styled.div``;

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

const FormContainer = styled(Form)``;
