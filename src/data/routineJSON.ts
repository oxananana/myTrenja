import { Routine } from "../entities/routine";

export const routineJSON: Routine = {
  "2021-01-19": {
    id: "2021-01-19",
    workoutId: "id1",
    exersizesParams: {
      exersize1: {
        isComplete: false,
        sets: {
          set1: { id: "set1", weight: 45, reps: 15, isComplete: false },
          set2: { id: "set2", weight: 40, reps: 15, isComplete: false },
          set3: { id: "set3", weight: 35, reps: 15, isComplete: false },
        },
      },
      exersize2: {
        isComplete: false,
        sets: {
          set1: { id: "set1", weight: 75, reps: 15, isComplete: false },
          set2: { id: "set2", weight: 70, reps: 15, isComplete: false },
          set3: { id: "set3", weight: 65, reps: 15, isComplete: false },
        },
      },
      exersize3: {
        isComplete: false,
        sets: {
          set1: { id: "set1", weight: 75, reps: 15, isComplete: false },
          set2: { id: "set2", weight: 70, reps: 15, isComplete: false },
        },
      },
      exersize4: {
        isComplete: false,
        sets: {
          set1: { id: "set1", weight: 75, reps: 15, isComplete: false },
          set2: { id: "set2", weight: 70, reps: 15, isComplete: false },
        },
      },
      exersize5: {
        isComplete: false,
        sets: {
          set1: { id: "set1", weight: 75, reps: 15, isComplete: false },
          set2: { id: "set2", weight: 70, reps: 15, isComplete: false },
        },
      },
    },
  },
};
