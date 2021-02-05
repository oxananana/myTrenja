import React, { useState } from "react";
import styled from "styled-components";
import { Field } from "../../../components/form/Field";

type Props = {
  value: string;
  unit: string;
  name: string;
  isForm: boolean;
};

export const SetParam: React.FC<Props> = (props) => {
  return (
    <SetParamContainer>
      {props.isForm ? (
        <Field name={props.name} min="0" type="number" pattern="\d+\.?\d+" />
      ) : (
        <ParamValue>{props.value}</ParamValue>
      )}

      <ParamUnit>{props.unit}</ParamUnit>
    </SetParamContainer>
  );
};

const SetParamContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ParamValue = styled.div`
  /* background-color: ${({ theme }) => theme.bg.baseGrey}; */
  /* width: 56px; */
  /* height: 28px; */
  /* line-height: 28px; */
  /* padding: 0 4px; */
  /* text-align: center; */
  font-size: 16px;
`;

const ParamUnit = styled.span`
  margin-left: 8px;
  color: ${({ theme }) => theme.text.grey};
`;
