import React, { useState } from "react";
import styled from "styled-components";
import { Icon } from "../Icon";

type Props = {
  checked: boolean;
};

export const Checkbox: React.FC<Props> = (props) => {
  const [isChecked, setIsChecked] = useState<boolean>(props.checked);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  };

  return (
    <CheckboxLabel>
      <CheckboxInput
        type="checkbox"
        onChange={handleChange}
        checked={isChecked}
      />

      <CheckboxControl>
        <Icon name="check" />
      </CheckboxControl>
    </CheckboxLabel>
  );
};

const CheckboxLabel = styled.label``;

const CheckboxControl = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.bg.baseGrey};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border: 1px solid transparent;

  &:hover {
    border-color: ${({ theme }) => theme.border.inputHover};
  }

  svg {
    width: 16px;
    height: 16px;
    opacity: 0;
  }
`;

const CheckboxInput = styled.input`
  position: absolute;
  opacity: 0;

  &:focus {
    outline: 0;
  }

  &:checked + ${CheckboxControl} svg {
    opacity: 1;
  }
`;
