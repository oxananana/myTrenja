import React, { useContext, useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import {
  Form,
  FormProps,
  FormContext,
  FormContextType,
} from "../../../components/form/Form";
import { Field } from "../../../components/form/Field";
import { Workout, WorkoutExersizes } from "../../../entities/workout";
import { getWorkouts } from "../../../selectors/selectors";
import { required } from "../../../utils/validators";
import { returnNextDays, Day } from "../../../utils/returnNextDays";
import { FormWorkoutExersizes } from "./FormWorkoutExersizes";

type Props = {
  formAction: "add" | "edit";
  buttons: React.ReactElement;
  date?: string;
  title?: string;
  workoutId?: string;
  exersizes?: WorkoutExersizes;
  onSubmit: (values: Workout) => void;
};

export const AddEditRoutineWorkoutForm: React.FC<Props & FormProps<Workout>> = (
  props
) => {
  const workouts = useSelector(getWorkouts);

  const nextDays = returnNextDays();

  const initialValues: Workout = {
    date: props.date || nextDays[0].dateString,
    title: props.title || "",
    workoutId: props.workoutId || "",
    exersizes: props.exersizes || {},
    isDefault: false,
  };

  const handleSubmit = (values: Workout) => {
    props.onSubmit({ ...values, title: workouts[values.workoutId].title });
  };

  return (
    <Form onSubmit={handleSubmit} initialValues={initialValues}>
      <Fields>
        <Field
          label="Дата"
          name="date"
          component="select"
          validators={[required]}
        >
          <>
            {nextDays.map((day: Day) => {
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
            {Object.entries(workouts).map(
              ([id, workout]: [id: string, workout: Workout]) => {
                return (
                  <option value={id} key={id}>
                    {workout.title}
                  </option>
                );
              }
            )}
          </>
        </Field>
        {/* <TitleField /> */}
      </Fields>
      <FormWorkoutExersizes workouts={workouts} />
      <ButtonContainer>{props.buttons}</ButtonContainer>
    </Form>
  );
};

const TitleField = () => {
  const {
    values: { title, workoutId },
    setFieldValue,
  } = useContext<FormContextType<Workout>>(FormContext);
  const workouts = useSelector(getWorkouts);

  useEffect(() => {
    setFieldValue("title", workoutId ? workouts[workoutId].title : "");
  }, [workoutId, setFieldValue]);

  return <Field name="title" label="Другое название" validators={[required]} />;
};

const Fields = styled.div`
  margin-bottom: 16px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
`;
