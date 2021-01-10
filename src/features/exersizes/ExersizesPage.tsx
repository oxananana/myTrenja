import React, { FC } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { RootState } from "../../app/rootReducer";
import { PageTitle } from "../../components/PageTitle";

type Props = {};

export const ExersizesPage: FC<Props> = (props) => {
  const exersizes = useSelector(
    (state: RootState) => state.exersizes.exersizes
  );
  const exersizeCategories = useSelector(
    (state: RootState) => state.exersizes.exersizeCategories
  );

  return (
    <Exersizes>
      <PageTitle>Упражнения</PageTitle>

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
        {Object.values(exersizes).map((exersize) => (
          <ExersizesListItem key={exersize.id}>
            {exersize.title}
          </ExersizesListItem>
        ))}
      </ExersizesList>
    </Exersizes>
  );
};

const Exersizes = styled.div``;

const ExersizeCategoriesNav = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  box-shadow: ${({ theme }) => theme.shadow.base};
  border-radius: ${({ theme }) => theme.borderRadius.base};
  background-color: ${({ theme }) => theme.bg.base};
  margin-bottom: 24px;
`;

const ExersizeCategoriesNavItem = styled.li`
  flex: 1;
`;

const ExersizeCategoriesNavLink = styled.a`
  padding: 8px;
  text-align: center;
  display: block;
`;

const ExersizesList = styled.div`
  box-shadow: ${({ theme }) => theme.shadow.base};
  border-radius: ${({ theme }) => theme.borderRadius.base};
  background-color: ${({ theme }) => theme.bg.base};
  padding: 4px 16px;
`;

const ExersizesListItem = styled.div`
  font-weight: 500;
  padding: 12px 0;

  &:not(:last-child) {
    border-bottom: 1px solid #efefef;
  }
`;
