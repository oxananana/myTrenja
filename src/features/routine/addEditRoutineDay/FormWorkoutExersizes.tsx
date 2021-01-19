import React, { useContext } from "react";
import { WorkoutExersizes } from "../../workouts/workoutPage/WorkoutExersizes";
import { ExersizesParams } from "../../../entities/routine";
import { FormContext } from "../../../components/form/Form";
import { useSelector } from "react-redux";
import { getWorkouts } from "../../../selectors/selectors";

type Props = {
  dayId: string;
  exersizesParams?: ExersizesParams;
};

export const FormWorkoutExersizes: React.FC<Props> = (props) => {
  const workouts = useSelector(getWorkouts);
  const formContext = useContext(FormContext);

  const workoutId = formContext.values.workoutId;
  const exersizes = workoutId ? workouts[workoutId].exersizes : [];

  return (
    <WorkoutExersizes
      exersizes={exersizes}
      exersizesParams={props.exersizesParams}
    />
  );
};
