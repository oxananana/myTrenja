export type Exersize = {
  id: string;
  categoryId: string;
  title: string;
};

export type Exersizes = Record<string, Exersize>;

export type ExersizeCategory = {
  id: string;
  title: string;
  priority: number;
};

export type ExersizeCategories = Record<string, ExersizeCategory>;
