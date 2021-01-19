type Validator = (value: string) => string | undefined;
export type Validators = Validator[];

export const validate = (value: string, fnArr: Validators) => {
  for (const fn of fnArr) {
    const result = fn(value);
    if (result) {
      return result;
    }
  }
  return;
};

export const required = (value: string) => {
  if (value && value.trim()) {
    return;
  }
  return "Пожалуйста, заполните поле.";
};
