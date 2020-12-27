import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Icon } from "../common/Icon";

const Navbar: React.FC = (props) => {
  return (
    <Nav>
      <NavItem>
        <NavItemLink to="/routine">
          <Icon name="calendar" />
        </NavItemLink>
      </NavItem>
      <NavItem>
        <NavItemLink to="/workouts">
          <Icon name="biceps" />
        </NavItemLink>
      </NavItem>
      <NavItem>
        <NavItemLink to="/analytic">
          <Icon name="bar" />
        </NavItemLink>
      </NavItem>
      <NavItem>
        <NavItemLink to="/exersizes">
          <Icon name="dumbbell" />
        </NavItemLink>
      </NavItem>
      <NavItem>
        <NavItemLink to="/account">
          <Icon name="user" />
        </NavItemLink>
      </NavItem>
    </Nav>
  );
};

const Nav = styled.ul`
  display: flex;
  position: fixed;
  z-index: 100;
  bottom: 0;
  left: 50%;
  max-width: 420px;
  transform: translateX(-50%);
  background-color: ${({ theme }) => theme.bg.base};
  box-shadow: ${({ theme }) => theme.shadow.base};
  border-radius: ${({ theme }) =>
    theme.borderRadius.base + " " + theme.borderRadius.base + " 0 0"};
`;

const NavItem = styled.li`
  width: 25%;
`;

const NavItemLink = styled(NavLink)`
  padding: 8px 16px;
  display: block;
  color: ${({ theme }) => theme.text.grey};

  &.active {
    color: ${({ theme }) => theme.text.base};
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

export default Navbar;
