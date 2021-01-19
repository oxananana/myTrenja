import React from "react";
import { useDocumentTitle } from "../../../hooks/useDocumentTitle";
import { PageTitle } from "../../../components/PageTitle";
import { AddEditRoutineDayForm } from "./AddEditRoutineDayForm";
import { Button } from "../../../components/Button";
import { ExersizesParams } from "../../../entities/routine";

type Props = {
  toggleEditMode: () => void;
  dayId: string;
  workoutId: string;
  exersizesParams: ExersizesParams;
};

export const EditRoutineDay: React.FC<Props> = (props) => {
  useDocumentTitle("Редактирование тренировочного дня");

  return (
    <>
      <PageTitle>Редактирование</PageTitle>
      <AddEditRoutineDayForm
        dayId={props.dayId}
        workoutId={props.workoutId}
        exersizesParams={props.exersizesParams}
        formAction="edit"
        buttons={
          <>
            <Button invert={true} onClick={props.toggleEditMode}>
              Отмена
            </Button>
            <Button type="submit">Сохранить</Button>
          </>
        }
      />
    </>
  );
};
