import React, {
  createContext,
  useEffect,
  useReducer,
  useLayoutEffect,
  useCallback,
  useRef,
} from "react";
import styled from "styled-components";
import { setIn, validate, Validators, isFunction } from "../../utils";
import { Nullable } from "../../commonTypes";

const initialContext: FormContextType<FormValues> = {
  initialValues: {},
  values: {},
  validators: {},
  errors: {},
  wasFirstSubmit: false,
  setValues: () => {},
  setFieldValue: () => {},
  setFieldValidators: () => {},
  setErrors: () => {},
};

export const FormContext = createContext<FormContextType<any>>(initialContext);

export type FormContextType<Values> = {
  initialValues: Values;
  values: Values;
  validators: FormValidators;
  errors: FormErrors;
  wasFirstSubmit: boolean;
  setValues: (values: React.SetStateAction<Values>) => void;
  setFieldValue: (field: string, value: string | boolean) => void;
  setFieldValidators: (field: string, validators: Validators) => void;
  setErrors: (errors: FormErrors) => void;
};

export type FormValues = Record<string, any>;
export type FormValidators = Record<string, Validators>;
export type FormErrors = Record<string, string>;

export type FormProps<Values> = {
  initialValues?: Values;
  children?: React.ReactNode;
  commonError?: Nullable<string>;
  fieldErrors?: FormErrors;
  onSubmit: (values: Values) => void;
};

type FormState<Values> = {
  values: Values;
  errors: FormErrors;
  validators: FormValidators;
  wasFirstSubmit: boolean;
};

type FormAction<Values> =
  | { type: "SET_VALUES"; payload: Values }
  | {
      type: "SET_FIELD_VALUE";
      payload: { field: string; value: string | boolean };
    }
  | {
      type: "SET_FIELD_VALIDATORS";
      payload: { field: string; validators: Validators };
    }
  | { type: "SET_ERRORS"; payload: FormErrors }
  | { type: "SET_WAS_FIRST_SUBMIT"; payload: boolean };

const defaultFieldErrors = {};

function formReducer<Values>(
  state: FormState<Values>,
  action: FormAction<Values>
) {
  switch (action.type) {
    case "SET_FIELD_VALUE":
      return {
        ...state,
        values: setIn(state.values, action.payload.field, action.payload.value),
      };
    case "SET_VALUES":
      return { ...state, values: action.payload };
    case "SET_ERRORS":
      return { ...state, errors: action.payload };
    case "SET_FIELD_VALIDATORS":
      return {
        ...state,
        validators: {
          ...state.validators,
          [action.payload.field]: action.payload.validators,
        },
      };
    case "SET_WAS_FIRST_SUBMIT":
      return { ...state, wasFirstSubmit: action.payload };
    default:
      return state;
  }
}

export function Form<Values extends FormValues = FormValues>(
  props: FormProps<Values>
) {
  const {
    children,
    onSubmit,
    commonError,
    fieldErrors = defaultFieldErrors,
    initialValues = {} as Values,
  } = props;

  const initialValuesRef = useRef(initialValues);

  const [state, dispatch] = useReducer<
    React.Reducer<FormState<Values>, FormAction<Values>>
  >(formReducer, {
    values: props.initialValues || ({} as Values),
    errors: {},
    validators: {},
    wasFirstSubmit: false,
  });

  useEffect(() => {
    dispatch({ type: "SET_ERRORS", payload: fieldErrors });
  }, [fieldErrors]);

  const setFieldValue = useSetStateCallback(
    (field: string, value: string | boolean) => {
      dispatch({ type: "SET_FIELD_VALUE", payload: { field, value } });
    }
  );

  const setValues = useSetStateCallback(
    (values: React.SetStateAction<Values>) => {
      dispatch({
        type: "SET_VALUES",
        payload: isFunction(values) ? values(state.values) : values,
      });
    }
  );

  const setFieldValidators = useCallback(
    (field: string, validators: Validators) => {
      dispatch({
        type: "SET_FIELD_VALIDATORS",
        payload: { field, validators },
      });
    },
    []
  );

  const setErrors = useCallback((errors: FormErrors) => {
    dispatch({ type: "SET_ERRORS", payload: errors });
  }, []);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (!state.wasFirstSubmit) {
      dispatch({ type: "SET_WAS_FIRST_SUBMIT", payload: true });
    }

    let errors = {};
    if (state.validators) {
      Object.entries(state.validators).forEach(([name, fieldValidators]) => {
        if (fieldValidators) {
          const error = validate(state.values[name], fieldValidators);
          if (error) {
            errors = { ...(errors || {}), [name]: error };
          }
        }
      });
      dispatch({ type: "SET_ERRORS", payload: errors });
    }

    if (Object.keys(errors).length === 0) {
      onSubmit(state.values);
    }
  };

  const formContext: FormContextType<Values> = {
    ...state,
    initialValues: initialValuesRef.current,
    setFieldValue,
    setValues,
    setFieldValidators,
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
}

function useSetStateCallback(callback: (...args: any[]) => any) {
  const ref = useRef(callback);

  useLayoutEffect(() => {
    ref.current = callback;
  });

  return useCallback((...args: any[]) => {
    return ref.current.apply(null, args);
  }, []);
}

const ErrorMessageCommon = styled.div`
  color: ${({ theme }) => theme.text.error};
  margin-bottom: 12px;
  font-size: 14px;
`;
