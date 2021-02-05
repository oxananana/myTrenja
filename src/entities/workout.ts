export type Sets = Record<string, Set>;

export type Set = {
  weight: number;
  reps: number;
  isComplete?: boolean;
};

export type WorkoutExersize = {
  order: number;
  sets: Sets;
  isComplete?: boolean;
};

export type WorkoutExersizes = Record<string, WorkoutExersize>;

export type Workout = {
  workoutId: string;
  title: string;
  slug?: string;
  date?: string;
  exersizes: WorkoutExersizes;
  isDefault: boolean;
};

export type WorkoutSlug = {
  id: string;
};

export type Workouts = Record<string, Workout>;
export type WorkoutSlugs = Record<string, WorkoutSlug>;
