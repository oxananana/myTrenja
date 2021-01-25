import React, { useState } from "react";
import styled from "styled-components";

type Props = {
  value: string;
  unit: string;
};

export const InputMini: React.FC<Props> = (props) => {
  const [value, setValue] = useState<string>(props.value);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleBlur = () => {
    if (value === "") {
      setValue("0");
    }
  };

  return (
    <InputContainer>
      <Input
        min="0"
        type="number"
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        pattern="\d+\.?\d+"
      />
      <Unit>{props.unit}</Unit>
    </InputContainer>
  );
};

const InputContainer = styled.div``;

const Input = styled.input`
  border-radius: 4px;
  background-color: ${({ theme }) => theme.bg.baseGrey};
  width: 56px;
  height: 28px;
  padding: 0 4px;
  text-align: center;
  -moz-appearance: textfield;
  border: 1px solid transparent;

  &:hover {
    border-color: ${({ theme }) => theme.border.inputHover};
  }

  &:focus {
    border-color: ${({ theme }) => theme.border.inputFocus};
    outline: 0;
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const Unit = styled.span`
  margin-left: 8px;
  color: ${({ theme }) => theme.text.grey};
`;
