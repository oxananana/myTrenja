export const formattingDate = (date: string) => {
  const day = new Date(date);
  const today = new Date();

  const formattedDay = new Date(date).toLocaleString("ru", {
    month: "long",
    day: "numeric",
  });

  if (day.toDateString() === today.toDateString()) {
    return formattedDay + " — Сегодня";
  }

  return formattedDay;
};
