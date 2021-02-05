import React, { useContext, useRef, useEffect } from "react";
import { WorkoutExersizes } from "../../workouts/workoutPage/WorkoutExersizes";
import {
  Sets,
  Workout,
  WorkoutExersize,
  WorkoutExersizes as WorkoutExersizesType,
  Workouts,
} from "../../../entities/workout";
import { FormContext, FormContextType } from "../../../components/form/Form";
import { Set } from "../../../entities/workout";

type Props = {
  workouts: Workouts;
};

export const FormWorkoutExersizes: React.FC<Props> = ({ workouts }) => {
  const {
    initialValues,
    values: { workoutId, exersizes },
    setValues,
  } = useContext<FormContextType<Workout>>(FormContext);

  const isFirstUpdate = useRef(true);

  useEffect(() => {
    if (isFirstUpdate.current) {
      isFirstUpdate.current = false;
      return;
    }
    let newExersizes: WorkoutExersizesType = {};
    if (workoutId) {
      Object.entries(workouts[workoutId].exersizes).forEach(
        ([id, exersize]: [id: string, exersize: WorkoutExersize]) => {
          let sets: Sets = {};

          Object.entries(exersize.sets).forEach(
            ([id, set]: [id: string, set: Set]) => {
              sets[id] = {
                ...set,
                isComplete: false,
              };
            }
          );
          newExersizes[id] = { ...exersize, isComplete: false, sets };
        }
      );
    }

    setValues((prevValues: Workout) => {
      return {
        ...prevValues,
        exersizes: newExersizes,
      };
    });
  }, [workoutId, setValues, initialValues]);

  return <WorkoutExersizes isForm={true} exersizes={exersizes} />;
};
