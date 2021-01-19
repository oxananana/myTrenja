import { formatToReadableDate } from "./formatToReadableDate";

export type Day = {
  date: number;
  dateString: string;
  readableDate: string;
};
export const returnNextDays = () => {
  const today = new Date();
  let nextDays = [];

  const addZero = (number: number) => {
    if (number < 10) {
      return "0" + number;
    }
    return number;
  };

  for (let i = 0; i < 7; i++) {
    let newDayDate = new Date();
    newDayDate.setDate(today.getDate() + i);

    const newDayMonth = newDayDate.getMonth() + 1;
    const dateString = `${newDayDate.getFullYear()}-${addZero(
      newDayMonth
    )}-${addZero(newDayDate.getDate())}`;

    const newDay: Day = {
      date: newDayDate.getDate(),
      readableDate: formatToReadableDate(dateString),
      dateString,
      // weekDayName: weekDaysNames[newDayDate.getDay()],
      // isWeekend: newDayDate.getDay() === 0 || newDayDate.getDay() === 6,
    };

    nextDays.push(newDay);
  }

  return nextDays;
};
