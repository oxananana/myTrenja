export const setIn = (
  obj: Record<string, any>,
  path: string | string[],
  value: string | boolean
): any => {
  let keys = path;

  if (typeof path === "string") {
    keys = path.split(".");
  }

  const key = keys[0];

  if (keys.length === 1) {
    return { ...obj, [key]: value };
  } else {
    return {
      ...obj,
      [key]: setIn(obj[key], keys.slice(1), value),
    };
  }
};
