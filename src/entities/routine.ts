import { Sets } from "./workout";

export type WorkoutDay = {
  id: string;
  workoutId: string;
  date: string;
  complete: boolean;
  exersizesSets: Record<string, Sets>;
};

export type Routine = Record<string, WorkoutDay>;
