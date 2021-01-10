import React, { ReactNode } from "react";
import styled from "styled-components";

type Props = {
  children: ReactNode;
  withButton?: boolean;
};

export const PageTitle: React.FC<Props> = (props) => {
  const { children, ...rest } = props;

  return <Title {...rest}>{children}</Title>;
};

const Title = styled.div<{ withButton?: boolean }>`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: ${({ withButton }) => !withButton && "24px"};
`;
