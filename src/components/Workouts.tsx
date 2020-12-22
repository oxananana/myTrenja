import React from "react"
import styled from "styled-components";
import Workout from "./Workout";

const Workouts = (props:any) => {
  const {workouts} = props;

  return (
    <WorkoutsContainer>
      <Title>Тренировки</Title>
{Object.values(workouts).map(item => {
          return (
            <Workout />
          )
        })}
    </WorkoutsContainer>
  )
}

const WorkoutsContainer = styled.div`
  color: ${({theme}) => theme.text.base};
  background-color: #fff;

`

const Title = styled.div`

`

export default Workouts;