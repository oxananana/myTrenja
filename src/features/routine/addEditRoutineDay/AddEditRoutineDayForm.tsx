import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Form, FormValues } from "../../../components/form/Form";
import { Field } from "../../../components/form/Field";
import { Workout } from "../../../entities/workout";
import { RoutineExersizes } from "../../../entities/routine";
import { getWorkouts } from "../../../selectors/selectors";
import { required } from "../../../utils/validators";
import { returnNextDays, Day } from "../../../utils/returnNextDays";
import { FormWorkoutExersizes } from "./FormWorkoutExersizes";

type Props = {
  formAction: "add" | "edit";
  buttons: React.ReactElement;
  dayId: string;
  workoutId?: string;
  exersizes?: RoutineExersizes;
};

export const AddEditRoutineDayForm: React.FC<Props> = (props) => {
  const { dayId, workoutId, exersizes } = props;

  const initialValues = {
    dayId: dayId,
    workoutId: workoutId || "",
    exersizes: exersizes || {},
  };
  const workouts = useSelector(getWorkouts);

  const handleSubmit = (values: FormValues) => {
    console.log(values);
  };

  return (
    <FormContainer onSubmit={handleSubmit} initialValues={initialValues}>
      <Fields>
        <Field
          label="Дата"
          name="dayId"
          component="select"
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
        </Field>
        <Field
          label="Выбор тренировки"
          name="workoutId"
          component="select"
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
        </Field>
      </Fields>
      <FormWorkoutExersizes />
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
