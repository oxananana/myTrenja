import React from "react";
import styled from "styled-components";
import { Icon } from "../Icon";

type Props = {
  name: string;
  value: boolean | string;
  onChange: () => void;
};

export const Checkbox: React.FC<Props> = (props) => {
  let checked, value;

  if (typeof props.value === "boolean") {
    checked = props.value;
    value = String(props.value);
  } else {
    checked = Boolean(props.value);
    value = props.value;
  }

  return (
    <CheckboxLabel>
      <input
        type="checkbox"
        value={value}
        checked={checked}
        onChange={props.onChange}
      />

      <CheckboxControl>
        <Icon name="check" />
      </CheckboxControl>
    </CheckboxLabel>
  );
};

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

const CheckboxLabel = styled.label`
  input {
    position: absolute;
    opacity: 0;

    &:focus {
      outline: 0;
    }

    &:checked + ${CheckboxControl} svg {
      opacity: 1;
    }
  }
`;
