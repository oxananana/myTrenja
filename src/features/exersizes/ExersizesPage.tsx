import React, { FC, useMemo } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { RootState } from "../../app/rootReducer";
import { PageTitle } from "../../components/PageTitle";
import { Exersizes as ExersizesType } from "../../entities/exersize";

type Props = {};

const getCategoryExersizes = (
  exersizeBase: ExersizesType,
  categoryId: string
) => {
  return Object.values(exersizeBase).filter(
    (exersize) => exersize.categoryId === categoryId
  );
};

export const ExersizesPage: FC<Props> = (props) => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const exersizeBase = useSelector(
    (state: RootState) => state.exersizes.exersizes
  );
  const exersizeCategories = useSelector(
    (state: RootState) => state.exersizes.exersizeCategories
  );
  const exersizes = useMemo(() => {
    return getCategoryExersizes(exersizeBase, categoryId);
  }, [exersizeBase, categoryId]);

  return (
    <Exersizes>
      <PageTitle>Упражнения</PageTitle>

      <ExersizeCategoriesNav>
        {Object.values(exersizeCategories).map((category) => {
          return (
            <ExersizeCategoriesNavItem key={category.id}>
              <ExersizeCategoriesNavLink to={`/exersizes/${category.id}`}>
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

const ExersizeCategoriesNavLink = styled(NavLink)`
  padding: 8px;
  text-align: center;
  display: block;

  &.active {
    font-weight: 500;
  }
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
