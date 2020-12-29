import { Set } from "./workout";

type RoutineSet = Set & { complete: boolean };

type RoutineSets = Record<string, RoutineSet>;

export type WorkoutDay = {
  id: string;
  workoutId: string;
  date: string;
  complete: boolean;
  exersizesSets: Record<string, RoutineSets>;
};

export type Routine = Record<string, WorkoutDay>;
