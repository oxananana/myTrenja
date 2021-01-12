export type Sets = Record<string, Set>;

export type Set = {
  weight: number;
  reps: number;
  id: string;
};

export type WorkoutExersize = {
  id: string;
  order: number;
  sets: Sets;
};

export type WorkoutExersizes = WorkoutExersize[];

export type Workout = {
  id: string;
  title: string;
  slug: string;
  exersizes: WorkoutExersizes;
};

export type WorkoutSlug = {
  id: string;
};

export type Workouts = Record<string, Workout>;
export type WorkoutSlugs = Record<string, WorkoutSlug>;
