import React from "react";
import styled from "styled-components";

const PageTitle: React.FC = (props) => {
  return <Title>{props.children}</Title>;
};

const Title = styled.div`
  font-size: 20px;
  font-weight: 500;
`;

export default PageTitle;
