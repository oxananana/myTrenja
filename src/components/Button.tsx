import React from "react";
import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";

type Props = {
  children: React.ReactChild;
  onClick?: () => void;
  disabled?: boolean;
  active?: boolean;
  invert?: boolean;
  full?: boolean;
  type?: "button" | "submit";
  to?: string;
};

export const Button: React.FC<Props> = (props) => {
  const { children, onClick, disabled, active, invert, ...attrs } = props;
  const handleClick = (e: React.MouseEvent) => {
    if (disabled) {
      e.preventDefault();
    } else {
      return onClick?.();
    }
  };

  return attrs.to ? (
    <StyledLink active={active} invert={invert} disabled={disabled} {...attrs}>
      {children}
    </StyledLink>
  ) : (
    <StyledButton
      active={active}
      disabled={disabled}
      onClick={handleClick}
      invert={invert}
      {...attrs}
    >
      {children}
    </StyledButton>
  );
};

Button.defaultProps = {
  children: "Кнопка",
  active: false,
  disabled: false,
  invert: false,
  full: false,
};

const mixin = css<{ invert: boolean; full: boolean; disabled: boolean }>`
  padding: 0 16px;
  border-radius: 4px;
  height: 40px;
  line-height: 38px;
  color: ${({ theme, invert }) =>
    invert ? theme.text.base : theme.text.baseInvert};
  background-color: ${({ theme, invert }) =>
    invert ? "transparent" : theme.bg.primary};
  width: ${({ full }) => full && "100%"};
  border: 1px solid ${({ theme }) => theme.bg.primary};
  opacity: ${({ disabled }) => disabled && 0.6};

  &:hover,
  &:focus {
    opacity: 0.7;
    outline: 0;
    cursor: ${({ disabled }) => disabled && "not-allowed"};
  }
`;

const StyledButton = styled((props) => {
  const { invert, active, full, children, ...rest } = props;

  return <button {...rest}>{children}</button>;
})`
  ${mixin}
`;

const StyledLink = styled((props) => {
  const { invert, active, full, children, ...rest } = props;

  return <NavLink {...rest}>{children}</NavLink>;
})`
  ${mixin};
  display: inline-block;
`;
