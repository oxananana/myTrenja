import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useDocumentTitle } from "../../../hooks/useDocumentTitle";
import { addWorkout } from "../workoutsSlice";

type Props = {};

export const AddEditWorkoutForm: React.FC<Props> = (props) => {
  const dispatch = useDispatch();
  useDocumentTitle("Редактирование тренировки");

  const handleAddWorkout = () => {
    dispatch(
      addWorkout({
        id: "id1",
        title: "Трисет-комплекс №1",
        slug: "triset-complex-1",
        exersizes: [
          {
            id: "exersize1",
            order: 1,
            sets: {
              set1: { id: "set1", weight: 45, reps: 12 },
              set2: { id: "set2", weight: 45, reps: 12 },
            },
          },
          {
            id: "exersize2",
            order: 2,
            sets: {
              set1: { id: "set1", weight: 45, reps: 12 },
              set2: { id: "set2", weight: 45, reps: 12 },
            },
          },
          {
            id: "exersize3",
            order: 3,
            sets: {
              set1: { id: "set1", weight: 45, reps: 12 },
              set2: { id: "set2", weight: 45, reps: 12 },
            },
          },
          {
            id: "exersize4",
            order: 4,
            sets: {
              set1: { id: "set1", weight: 45, reps: 12 },
              set2: { id: "set2", weight: 45, reps: 12 },
            },
          },
          {
            id: "exersize5",
            order: 5,
            sets: {
              set1: { id: "set1", weight: 45, reps: 12 },
              set2: { id: "set2", weight: 45, reps: 12 },
            },
          },
        ],
      })
    );
  };
  return <ExersizeContainer>добавление тренировки</ExersizeContainer>;
};

const ExersizeContainer = styled.div``;
