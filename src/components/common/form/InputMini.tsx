import React, { useState } from "react";
import styled from "styled-components";

type Props = {
  value: string;
  unit: string;
};

const InputMini: React.FC<Props> = (props) => {
  const [value, setValue] = useState<string>(props.value);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <InputContainer>
      <Input
        type="number"
        value={value}
        onChange={handleChange}
        pattern="^[0-9]+$"
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
  line-height: 28px;
  padding: 0 4px;
  border: 0;
  text-align: center;
  -moz-appearance: textfield;

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

export default InputMini;
