import React from "react";
import styled from "styled-components";

type Props = {};

type State = {
  hasError: boolean;
};

export class ErrorBoundary extends React.Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorMessage>
          <ErrorMessageIcon>🛠</ErrorMessageIcon> Мдааа, какая-то проблемка
          произошла. Попробуйте обновить страницу или зайти позже.
        </ErrorMessage>
      );
    }

    return this.props.children;
  }
}

const ErrorMessage = styled.div`
  color: orange;
`;

const ErrorMessageIcon = styled.span`
  margin-right: 8px;
`;
