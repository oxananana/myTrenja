export type Sets = Record<string, Set>;

export type Set = {
  weight: number;
  reps: number;
};

type WorkoutExersize = {
  id: string;
  order: number;
  sets: Sets;
};

export type Workout = {
  id: string;
  title: string;
  slug: string;
  exersizes: WorkoutExersize[];
};

export type WorkoutSlug = {
  id: string;
};

export type Workouts = Record<string, Workout>;
export type WorkoutSlugs = Record<string, WorkoutSlug>;
