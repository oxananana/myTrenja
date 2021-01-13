import { useEffect } from "react";

type Hook = (title: string) => void;

export const useDocumentTitle: Hook = (
  title = "Моя треня — ежедневник тренировок"
) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
};
