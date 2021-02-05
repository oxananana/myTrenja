import React, { useContext, useEffect } from "react";
import { WorkoutExersizes } from "../../workouts/workoutPage/WorkoutExersizes";
import { RoutineExersizes } from "../../../entities/routine";
import { WorkoutExersizes as WorkoutExersizesType } from "../../../entities/workout";
import { FormContext, FormContextType } from "../../../components/form/Form";
import { useSelector } from "react-redux";
import { getWorkouts } from "../../../selectors/selectors";

type Props = {};

type FormValues = {
  workoutId: string;
  exersizes: RoutineExersizes | WorkoutExersizesType;
};

export const FormWorkoutExersizes: React.FC<Props> = (props) => {
  const workouts = useSelector(getWorkouts);
  const {
    values: { workoutId, exersizes },
    setValues,
  } = useContext<FormContextType<FormValues>>(FormContext);

  useEffect(() => {
    setValues((prevValues: FormValues) => {
      const newExersizes = workoutId ? workouts[workoutId].exersizes : {};
      return { ...prevValues, exersizes: newExersizes };
    });
  }, [workoutId, workouts, setValues]);

  return <WorkoutExersizes isForm={true} exersizes={exersizes} />;
};
