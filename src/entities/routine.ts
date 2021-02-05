import { Set } from "./workout";

export type SetParams = Set & { isComplete: boolean };

export type SetsParams = Record<string, SetParams>;

export type RoutineExersize = {
  isComplete: boolean;
  id: string;
  sets: SetsParams;
};

export type RoutineExersizes = Record<string, RoutineExersize>;

export type RoutineDay = {
  id: string;
  workoutId: string;
  exersizes: RoutineExersizes;
};

export type Routine = Record<string, RoutineDay>;
