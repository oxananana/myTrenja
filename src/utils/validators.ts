type Validator = (value: string | boolean) => string | undefined;
export type Validators = Validator[];

export const validate = (value: string | boolean, fnArr: Validators) => {
  for (const fn of fnArr) {
    const result = fn(value);
    if (result) {
      return result;
    }
  }
  return;
};

export const required = (value: string | boolean) => {
  if (typeof value === "boolean") {
    return;
  }
  if (value && value.trim()) {
    return;
  }
  return "Пожалуйста, заполните поле.";
};
