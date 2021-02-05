export const getIn = (
  obj: Record<string, any>,
  path: string | string[]
): string => {
  let keys = path;

  if (typeof path === "string") {
    keys = path.split(".");
  }

  const key = keys[0];

  if (keys.length === 1) {
    return obj[key];
  } else {
    return getIn(obj[key], keys.slice(1));
  }
};
