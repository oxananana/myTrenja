import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useDocumentTitle } from "../../../hooks/useDocumentTitle";

type Props = {};

export const AddEditWorkoutPage: React.FC<Props> = (props) => {
  const dispatch = useDispatch();
  useDocumentTitle("Редактирование тренировки");

  // const handleAddWorkout = () => {
  //   dispatch(
  //     addWorkout()
  //   );
  // };
  return <ExersizeContainer>добавление тренировки</ExersizeContainer>;
};

const ExersizeContainer = styled.div``;
