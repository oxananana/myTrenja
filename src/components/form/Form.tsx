import React, { useState, createContext, useEffect } from "react";
import styled from "styled-components";
import { setIn, validate, Validators } from "../../utils";
import { Nullable } from "../../commonTypes";

const initialContext: FormContextType<FormValues> = {
  values: {},
  validators: {},
  errors: {},
  wasFirstSubmit: false,
  setValues: () => {},
  setFieldValue: () => {},
  setValidators: () => {},
  setErrors: () => {},
};

export const FormContext = createContext<FormContextType<any>>(initialContext);

export type FormContextType<V> = {
  values: V;
  validators: FormValidators;
  errors: FormErrors;
  wasFirstSubmit: boolean;
  setValues: (values: FormValues) => void;
  setFieldValue: (name: string, value: string) => void;
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

const defaultFieldErrors = {};

export const Form: React.FC<Props> = (props) => {
  const {
    children,
    onSubmit,
    commonError,
    fieldErrors = defaultFieldErrors,
    initialValues = {},
  } = props;

  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [validators, setValidators] = useState<FormValidators>({});
  const [wasFirstSubmit, setWasFirstSubmit] = useState(false);

  const setFieldValue = (name: string, value: string) => {
    setValues(setIn(values, name, value));
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

  const formContext: FormContextType<FormValues> = {
    values,
    validators,
    errors,
    wasFirstSubmit,
    setFieldValue,
    setValues,
    setValidators,
    setErrors,
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
