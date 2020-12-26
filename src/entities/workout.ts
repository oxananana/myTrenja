export type Sets = Record<string, Set>;

export type Set = {
  weight: number;
  reps: number;
  complete: boolean;
};

type WorkoutExersize = {
  id: string;
  order: number;
  sets: Sets;
};

export type Workout = {
  id: string;
  title: string;
  exersizes: WorkoutExersize[];
};

export type Workouts = Record<string, Workout>;
