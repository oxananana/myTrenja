import React from "react";
import styled from "styled-components";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";

type Props = {};

export const AnalyticPage: React.FC<Props> = (props) => {
  useDocumentTitle("Аналитика");

  return <Analytic>Аналитика</Analytic>;
};

const Analytic = styled.div``;
