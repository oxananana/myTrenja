import { Set, Workout } from "./workout";

export type RoutineExersizeSet = Set & { isComplete: boolean };

export type RoutineExersizeSets = Record<string, RoutineExersizeSet>;

export type RoutineExersize = {
  isComplete: boolean;
  order: number;
  sets: RoutineExersizeSets;
};

export type RoutineExersizes = Record<string, RoutineExersize>;

export type RoutineDay = {
  date: string;
  workoutId: string;
  exersizes: RoutineExersizes;
};

export type Routine = Record<string, Workout>;
