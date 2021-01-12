import { Set } from "./workout";

export type SetParams = Set & { isComplete: boolean };

export type SetsParams = Record<string, SetParams>;

type ExersizeParams = { isComplete: boolean; sets: SetsParams };

export type ExersizesParams = Record<string, ExersizeParams>;

export type RoutineDay = {
  id: string;
  workoutId: string;
  exersizesParams: ExersizesParams;
};

export type Routine = Record<string, RoutineDay>;
