import React, { useState, createContext, useEffect } from "react";
import styled from "styled-components";
import { validate, Validators } from "../../utils/validators";
import { Nullable } from "../../commonTypes";

const initialContext: FormContextType = {
  values: {},
  validators: {},
  errors: {},
  wasFirstSubmit: false,
  setValues: () => {},
  setValidators: () => {},
  setErrors: () => {},
};

export const FormContext = createContext<FormContextType>(initialContext);

type FormContextType = {
  values: FormValues;
  validators: FormValidators;
  errors: FormErrors;
  wasFirstSubmit: boolean;
  setValues: (values: FormValues) => void;
  setValidators: (fn: (validators: FormValidators) => FormValidators) => void;
  setErrors: (errors: FormErrors) => void;
};

export type FormValues = Record<string, any>;
export type FormValidators = Record<string, Validators>;
export type FormErrors = Record<string, string>;

type Props = {
  initialValues?: FormValues;
  children: React.ReactNode;
  commonError?: Nullable<string>;
  fieldErrors?: FormErrors;
  onSubmit: (values: FormValues) => void;
};

export const Form: React.FC<Props> = (props) => {
  const {
    children,
    onSubmit,
    commonError,
    fieldErrors = {},
    initialValues = {},
  } = props;

  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [validators, setValidators] = useState<FormValidators>({});
  const [wasFirstSubmit, setWasFirstSubmit] = useState(false);

  const formContext: FormContextType = {
    values,
    validators,
    errors,
    wasFirstSubmit,
    setValues,
    setValidators,
    setErrors,
  };

  useEffect(() => {
    setErrors(fieldErrors);
  }, [fieldErrors]);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (!wasFirstSubmit) {
      setWasFirstSubmit(true);
    }

    let errors = {};
    if (validators) {
      Object.entries(validators).forEach(([name, fieldValidators]) => {
        if (fieldValidators) {
          const error = validate(values[name], fieldValidators);
          if (error) {
            errors = { ...(errors || {}), [name]: error };
          }
        }
      });
      setErrors(errors);
    }

    if (Object.keys(errors).length === 0) {
      onSubmit(values);
    }
  };

  return (
    <FormContext.Provider value={formContext}>
      <form onSubmit={handleSubmit}>
        {commonError && <ErrorMessageCommon>{commonError}</ErrorMessageCommon>}
        {children}
      </form>
    </FormContext.Provider>
  );
};

const ErrorMessageCommon = styled.div`
  color: ${({ theme }) => theme.text.error};
  margin-bottom: 12px;
  font-size: 14px;
`;
