import React from "react";
import { useDocumentTitle } from "../../../hooks/useDocumentTitle";
import { PageTitle } from "../../../components/PageTitle";
import { AddEditRoutineDayForm } from "./AddEditRoutineDayForm";
import { Button } from "../../../components/Button";

type Props = {};

export const AddRoutineDayPage: React.FC<Props> = (props) => {
  useDocumentTitle("Новый тренировочный день");

  return (
    <>
      <PageTitle>Новый тренировочный день</PageTitle>
      <AddEditRoutineDayForm
        dayId={getTodayDate()}
        formAction="add"
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
