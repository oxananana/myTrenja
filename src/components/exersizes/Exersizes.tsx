import React, { FC } from "react";
import styled from "styled-components";
import AddButtonHeader from "../common/AddButtonHeader";
import {
  Exersizes as ExersizesType,
  ExersizeCategories,
} from "../../entities/exersize";

type Props = {
  exersizeBase: ExersizesType;
  exersizeCategories: ExersizeCategories;
};

const Exersizes: FC<Props> = (props) => {
  const { exersizeCategories, exersizeBase } = props;

  return (
    <ExersizesContainer>
      <AddButtonHeader title="Упражнения" onClick={() => {}} />

      <ExersizeCategoriesNav>
        {Object.values(exersizeCategories).map((category) => {
          return (
            <ExersizeCategoriesNavItem key={category.id}>
              <ExersizeCategoriesNavLink>
                {category.title}
              </ExersizeCategoriesNavLink>
            </ExersizeCategoriesNavItem>
          );
        })}
      </ExersizeCategoriesNav>

      <ExersizesList>
        {Object.values(exersizeBase).map((exersize) => (
          <ExersizesListItem key={exersize.id}>
            <a href="">{exersize.title}</a>
          </ExersizesListItem>
        ))}
      </ExersizesList>
    </ExersizesContainer>
  );
};

const ExersizesContainer = styled.div``;

const ExersizeCategoriesNav = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  box-shadow: ${({ theme }) => theme.shadow.base};
  border-radius: ${({ theme }) => theme.borderRadius.base};
  background-color: ${({ theme }) => theme.bg.base};
  margin-bottom: 24px;
`;

const ExersizeCategoriesNavItem = styled.li``;

const ExersizeCategoriesNavLink = styled.a`
  padding: 8px 16px;
  display: block;
`;

const ExersizesList = styled.div`
  box-shadow: ${({ theme }) => theme.shadow.base};
  border-radius: ${({ theme }) => theme.borderRadius.base};
  background-color: ${({ theme }) => theme.bg.base};
  padding: 8px 16px;
`;

const ExersizesListItem = styled.div`
  font-weight: 500;

  a {
    display: block;
    padding: 8px 0;
  }
  &:not(:last-child) {
    border-bottom: 1px solid #efefef;
  }

  & + & {
    margin-top: 8px;
  }
`;

export default Exersizes;
