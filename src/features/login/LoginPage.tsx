import React, { useState } from "react";
import styled from "styled-components";
import { authAPI } from "../../api/authAPI";
import { Nullable } from "../../commonTypes";
import { Button } from "../../components/Button";
import { Form, FormErrors } from "../../components/form/Form";
import { Field } from "../../components/form/Field";
import { Loader } from "../../components/Loader";
import { PageTitle } from "../../components/PageTitle";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import { required } from "../../utils/validators";

type Props = {};
type FormValues = Record<string, any>;
type Errors = {
  fieldErrors: FormErrors;
  commonError: Nullable<string>;
};
type ServerError = {
  name: string;
  code: string;
  message: string;
};

export const LoginPage: React.FC<Props> = (props) => {
  useDocumentTitle("Войти в приложение");

  const [isFetching, setIsFetching] = useState(false);
  const [errors, setErrors] = useState<Errors>({
    fieldErrors: {},
    commonError: null,
  });

  const handleSubmit = (values: FormValues) => {
    const { email, password } = values;

    setIsFetching(true);
    authAPI
      .login(email, password)
      .then(() => {
        setIsFetching(false);
      })
      .catch((serverError: ServerError) => {
        setIsFetching(false);
        let error;

        if (isKnownErrorCode(serverError.code)) {
          error = errorFromCode[serverError.code];
        } else {
          error = errorFromCode["default"];
        }

        const errorMessage = error.message;
        const isCommonError = error.isCommon;

        if (isCommonError) {
          setErrors({
            commonError: errorMessage,
            fieldErrors: {},
          });
        } else {
          setErrors({
            commonError: null,
            fieldErrors: { email: errorMessage },
          });
        }
      });
  };

  return (
    <LoginForm
      onSubmit={handleSubmit}
      commonError={errors.commonError}
      fieldErrors={errors.fieldErrors}
    >
      {isFetching && <Loader />}
      <PageTitle>Войти в приложение</PageTitle>
      <Field
        type="text"
        label="E-mail"
        name="email"
        validators={[required]}
        autoFocus
      />
      <Field
        type="password"
        label="Пароль"
        name="password"
        validators={[required]}
      />
      <Button type="submit">Войти</Button>
    </LoginForm>
  );
};

type KnownErrorCodes = keyof typeof errorFromCode;

const errorFromCode = {
  "auth/invalid-email": {
    message: "Некорректный e-mail.",
    isCommon: false,
    field: "email",
  },
  "auth/wrong-password": {
    message: "Неверный e-mail или пароль.",
    isCommon: true,
  },
  "auth/user-not-found": {
    message: "Неверный e-mail или пароль.",
    isCommon: true,
  },
  "auth/too-many-requests": {
    message: "Превышено количество попыток входа. Попробуйте войти позже.",
    isCommon: true,
  },
  default: {
    message: "Ошибка сервера.",
    isCommon: true,
  },
};

const isKnownErrorCode = (code: string): code is KnownErrorCodes => {
  return Object.keys(errorFromCode).includes(code);
};

const LoginForm = styled(Form)``;
