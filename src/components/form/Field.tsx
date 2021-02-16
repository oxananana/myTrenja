import React, { useContext } from "react";
import styled from "styled-components";
import { iconForBg } from "../Icon";
import { Control } from "./Control";
import { FormContext } from "./Form";
import { Validators } from "../../utils/validators";

type Props = {
  component?: string | React.ComponentType<any>;
  name: string;
  type?: string;
  label?: string;
  error?: string;
  autoFocus?: boolean;
  validators?: Validators;
  children?: React.ReactChild;
  min?: string;
  pattern?: string;
};

export const Field: React.FC<Props> = (props) => {
  const {
    label,
    children,
    component = "input",
    type = "text",
    ...rest
  } = props;
  const formContext = useContext(FormContext);
  const error = formContext.errors[props.name];

  return (
    <FieldContainer>
      {label && <Label htmlFor={props.name}>{label}</Label>}
      <Control
        component={component}
        type={type}
        {...rest}
        className={error && "error"}
      >
        {children}
      </Control>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </FieldContainer>
  );
};

const FieldContainer = styled.div`
  & + &,
  & + button {
    margin-top: 16px;
  }

  input[type="text"],
  input[type="password"],
  input[type="number"],
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

  input[type="number"] {
    background-color: ${({ theme }) => theme.bg.baseGrey};
    width: 56px;
    height: 28px;
    padding: 0 4px;
    text-align: center;
    -moz-appearance: textfield;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
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
