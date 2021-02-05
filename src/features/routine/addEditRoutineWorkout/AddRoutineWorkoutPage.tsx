import React from "react";
import { useDispatch } from "react-redux";
import { useDocumentTitle } from "../../../hooks/useDocumentTitle";
import { PageTitle } from "../../../components/PageTitle";
import { AddEditRoutineWorkoutForm } from "./AddEditRoutineWorkoutForm";
import { Button } from "../../../components/Button";
import { workoutsAPI } from "../../../api/workoutsAPI";
import { createWorkout } from "../../workouts/workoutsSlice";
import { Workout } from "../../../entities/workout";
import { useHistory } from "react-router-dom";

type Props = {};

export const AddRoutineWorkoutPage: React.FC<Props> = (props) => {
  useDocumentTitle("Новый тренировочный день");
  let history = useHistory();
  const dispatch = useDispatch();

  const handleSubmit = async (values: Workout) => {
    const newId = await workoutsAPI.fetchNewKey();
    dispatch(createWorkout(values, newId));
    history.push(`/routine/${newId}`);
  };

  return (
    <>
      <PageTitle>Новый тренировочный день</PageTitle>
      <AddEditRoutineWorkoutForm
        date={getTodayDate()}
        formAction="add"
        onSubmit={handleSubmit}
        buttons={
          <>
            <Button invert={true} to="/routine">
              Отмена
            </Button>
            <Button type="submit">Добавить</Button>
          </>
        }
      />
    </>
  );
};

const getTodayDate = () => {
  const addZero = (number: number) => {
    if (number < 10) {
      return "0" + number;
    }
    return number;
  };

  const today = new Date();

  return `${today.getFullYear()}-${addZero(today.getMonth() + 1)}-${addZero(
    today.getDate()
  )}`;
};
