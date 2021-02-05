import React from "react";
import { useDispatch } from "react-redux";
import { useDocumentTitle } from "../../../hooks/useDocumentTitle";
import { PageTitle } from "../../../components/PageTitle";
import { AddEditRoutineWorkoutForm } from "./AddEditRoutineWorkoutForm";
import { Button } from "../../../components/Button";
import { Workout, WorkoutExersizes } from "../../../entities/workout";
import { updateWorkout } from "../../workouts/workoutsSlice";

type Props = {
  id: string;
  date: string;
  title: string;
  workoutId: string;
  exersizes: WorkoutExersizes;
  toggleEditMode: () => void;
};

export const EditRoutineWorkout: React.FC<Props> = (props) => {
  useDocumentTitle("Редактирование тренировочного дня");
  const { id, workoutId, date, title, exersizes, toggleEditMode } = props;
  const dispatch = useDispatch();

  const handleSubmit = (values: Workout) => {
    dispatch(updateWorkout(values, id));
    toggleEditMode();
  };

  return (
    <>
      <PageTitle>Редактирование</PageTitle>
      <AddEditRoutineWorkoutForm
        date={date}
        workoutId={workoutId}
        title={title}
        exersizes={exersizes}
        formAction="edit"
        onSubmit={handleSubmit}
        buttons={
          <>
            <Button invert={true} onClick={toggleEditMode}>
              Отмена
            </Button>
            <Button type="submit">Сохранить</Button>
          </>
        }
      />
    </>
  );
};
