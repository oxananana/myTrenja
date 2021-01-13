import React from "react";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

type Props = {};

export const PageNotFound: React.FC<Props> = () => {
  useDocumentTitle("Страница не найдена");
  return <div>Страница не найдена.</div>;
};
