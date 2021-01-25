import React, { useContext } from "react";
import styled from "styled-components";
import { iconForBg } from "../Icon";
import { Control } from "./Control";
import { FormContext } from "./Form";
import { Validators } from "../../utils/validators";

type Props = {
  fieldType: string;
  type?: string;
  label: string;
  name: string;
  error?: string;
  autoFocus?: boolean;
  validators?: Validators;
  children?: React.ReactChild;
};

export const FormField: React.FC<Props> = (props) => {
  const { label, children, ...rest } = props;
  const formContext = useContext(FormContext);
  const error = formContext.errors[props.name];

  return (
    <Field>
      {label && <Label htmlFor={props.name}>{label}</Label>}
      <Control {...rest} className={error && "error"}>
        {children}
      </Control>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Field>
  );
};

const Field = styled.div`
  & + &,
  & + button {
    margin-top: 16px;
  }

  input[type="text"],
  input[type="password"],
  textarea,
  select {
    background-color: ${({ theme }) => theme.bg.base};
    border-radius: 4px;
    width: 100%;
    color: inherit;
    border: 1px solid transparent;

    &:hover {
      border-color: ${({ theme }) => theme.border.inputHover};
    }

    &:focus {
      border-color: ${({ theme }) => theme.border.inputFocus};
      outline: 0;
    }

    &.error {
      border-color: ${({ theme }) => theme.border.error};
    }
  }

  input[type="text"],
  input[type="password"],
  select {
    height: 40px;
    padding: 0 16px;
  }

  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    background-image: ${iconForBg("chevron_bottom")};
    background-repeat: no-repeat;
    background-position: calc(100% - 10px) center;
    background-size: 16px;
  }

  textarea {
    padding: 12px 16px;
    min-height: 150px;
    resize: vertical;
  }
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.text.grey};
`;

const ErrorMessage = styled.div`
  color: ${({ theme }) => theme.text.error};
  margin-top: 4px;
  font-size: 14px;
`;
