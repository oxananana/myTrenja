import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Form } from "../../../components/form/Form";
import { FormField } from "../../../components/form/FormField";
import { Workout } from "../../../entities/workout";
import { ExersizesParams } from "../../../entities/routine";
import { getWorkouts } from "../../../selectors/selectors";
import { required } from "../../../utils/validators";
import { returnNextDays, Day } from "../../../utils/returnNextDays";
import { FormWorkoutExersizes } from "./FormWorkoutExersizes";

type Props = {
  formAction: "add" | "edit";
  buttons: React.ReactElement;
  dayId: string;
  workoutId?: string;
  exersizesParams?: ExersizesParams;
};

export const AddEditRoutineDayForm: React.FC<Props> = (props) => {
  const { dayId, workoutId, exersizesParams } = props;

  const initialValues = {
    dayId: dayId,
    workoutId: workoutId || "",
    exersizesParams: exersizesParams,
  };
  const workouts = useSelector(getWorkouts);

  const handleSubmit = () => {};

  return (
    <FormContainer onSubmit={handleSubmit} initialValues={initialValues}>
      <Fields>
        <FormField
          label="Дата"
          name="dayId"
          fieldType="select"
          validators={[required]}
        >
          <>
            {returnNextDays().map((day: Day) => {
              return (
                <option value={day.dateString} key={day.dateString}>
                  {day.readableDate}
                </option>
              );
            })}
          </>
        </FormField>
        <FormField
          label="Выбор тренировки"
          name="workoutId"
          fieldType="select"
          validators={[required]}
        >
          <>
            <option value="">Выбрать тренировку</option>
            {Object.values(workouts).map((workout: Workout) => {
              return (
                <option value={workout.id} key={workout.id}>
                  {workout.title}
                </option>
              );
            })}
          </>
        </FormField>
      </Fields>
      <FormWorkoutExersizes dayId={dayId} />

      <ButtonContainer>{props.buttons}</ButtonContainer>
    </FormContainer>
  );
};

const FormContainer = styled(Form)``;

const Fields = styled.div`
  margin-bottom: 16px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
`;
