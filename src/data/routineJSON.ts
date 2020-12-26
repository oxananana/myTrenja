import { Routine } from "../entities/routine";

export const routineJSON: Routine = {
  "2020-12-23": {
    id: "2020-12-23",
    date: "2020-12-23",
    workoutId: "id1",
    complete: false,
    exersizesSets: {
      exersize1: {
        set1: {
          weight: 45,
          reps: 12,
          complete: false,
        },
        set2: {
          weight: 45,
          reps: 12,
          complete: false,
        },
      },
    },
  },
};
