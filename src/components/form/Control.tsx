import React, { useContext, useEffect } from "react";
import { validate, Validators } from "../../utils/validators";
import { FormContext } from "./Form";
import { getIn } from "../../utils";

type Props = {
  component: string | React.ComponentType | React.ComponentType<any>;
  type: string;
  name: string;
  validators?: Validators;
  autoFocus?: boolean;
  className?: string | undefined;
  min?: string;
  pattern?: string;
};

export const Control: React.FC<Props> = (props) => {
  const { component, validators, name, ...rest } = props;
  const formContext = useContext(FormContext);
  const value = getIn(formContext.values, name);

  useEffect(() => {
    if (validators) {
      formContext.setFieldValidators(name, validators);
    }
  }, []); // eslint-disable-line

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    const newValue = target.type === "checkbox" ? target.checked : target.value;

    formContext.setFieldValue(name, newValue);

    if (validators && formContext.wasFirstSubmit) {
      const error = validate(newValue, validators);
      const currentErrors = { ...formContext.errors };

      if (error) {
        currentErrors[name] = error;
      } else {
        delete currentErrors[name];
      }
      formContext.setErrors(currentErrors);
    }
  };

  return React.createElement(component, {
    ...rest,
    value: value,
    name: name,
    onChange: handleChange,
  });
};
