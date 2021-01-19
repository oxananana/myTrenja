import { weekDaysNames } from "../constants";

export const formatToReadableDate = (date: string) => {
  const day = new Date(date);
  const today = new Date();
  const weekDayName = weekDaysNames[day.getDay()];

  const formattedDate = new Date(date).toLocaleString("ru", {
    month: "long",
    day: "numeric",
  });

  if (day.toDateString() === today.toDateString()) {
    return `${formattedDate} — ${weekDayName} (Сегодня)`;
  }

  return `${formattedDate} — ${weekDayName}`;
};
