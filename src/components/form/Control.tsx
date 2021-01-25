import React, { useContext, useEffect } from "react";
import { validate, Validators } from "../../utils/validators";
import { FormContext, FormValidators } from "./Form";

type Props = {
  fieldType: string;
  type?: string;
  validators?: Validators;
  name: string;
  autoFocus?: boolean;
  className: string | undefined;
};

export const Control: React.FC<Props> = (props) => {
  const { fieldType, validators, name, ...rest } = props;
  const formContext = useContext(FormContext);
  const value = formContext.values[name] ?? "";

  useEffect(() => {
    if (validators) {
      formContext.setValidators((prevValidators: FormValidators) => {
        return { ...prevValidators, [name]: validators };
      });
    }
  }, []); // eslint-disable-line

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    formContext.setValues({ ...formContext.values, [name]: e.target.value });

    if (validators && formContext.wasFirstSubmit) {
      const error = validate(value, validators);
      const currentErrors = { ...formContext.errors };

      if (error) {
        currentErrors[name] = error;
      } else {
        delete currentErrors[name];
      }
      formContext.setErrors(currentErrors);
    }
  };

  return React.createElement(fieldType, {
    ...rest,
    value: value,
    name: name,
    onChange: handleChange,
  });
};

Control.defaultProps = {
  fieldType: "input",
  type: "text",
  name: "text",
};
