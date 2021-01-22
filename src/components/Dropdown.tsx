import React, { useEffect, useState, useLayoutEffect } from "react";
import styled from "styled-components";
import { Nullable } from "../commonTypes";
import { getScrollbarSize } from "../utils/getScrollbarSize";
import Portal from "./Portal";

type Action = {
  title: string;
  onClick: () => void;
};

type Props = {
  isOpen: boolean;
  onClose: () => void;
  actions: Action[];
  children: React.ReactChild;
};

const getOffsetPosition = (
  trigger: Nullable<HTMLSpanElement>,
  scrollbarSize: number
) => {
  let offsetTop = 0,
    offsetRight = 0;

  if (trigger) {
    const triggerPosition = trigger.getBoundingClientRect();
    offsetTop = triggerPosition.bottom;
    offsetRight =
      document.body.clientWidth - triggerPosition.right + scrollbarSize;
  }

  return { top: offsetTop, right: offsetRight };
};

export const Dropdown: React.FC<Props> = (props) => {
  const { isOpen, actions, children, onClose } = props;
  const triggerRef = React.useRef(null);
  const [offsetPosition, setOffsetPosition] = useState({ top: 0, right: 0 });
  const scrollbarSize = getScrollbarSize();

  useEffect(() => {
    if (isOpen && triggerRef.current) {
      setOffsetPosition(getOffsetPosition(triggerRef.current, scrollbarSize));
    }
  }, [isOpen, scrollbarSize]);

  useLayoutEffect(() => {
    if (isOpen) {
      document.documentElement.style.overflow = "hidden";
      document.documentElement.style.paddingRight = `${scrollbarSize}px`;
    }
  });

  const handleClose = () => {
    document.documentElement.style.overflow = "auto";
    document.documentElement.style.paddingRight = "0";
    onClose();
  };

  return (
    <>
      <span ref={triggerRef}>{children}</span>
      {isOpen && (
        <Portal>
          <>
            <DropdownContainer
              offsetTop={offsetPosition.top}
              offsetRight={offsetPosition.right}
            >
              {actions.map((action, index) => {
                const handleClick = () => {
                  handleClose();
                  action.onClick();
                };
                return (
                  <DropdownItem onClick={handleClick} key={index}>
                    {action.title}
                  </DropdownItem>
                );
              })}
            </DropdownContainer>
            <Overlay onClick={handleClose} />
          </>
        </Portal>
      )}
    </>
  );
};

const DropdownContainer = styled.div<{
  offsetTop: number;
  offsetRight: number;
}>`
  box-shadow: ${({ theme }) => theme.shadow.dropdown};
  border-radius: ${({ theme }) => theme.borderRadius.base};
  background-color: ${({ theme }) => theme.bg.base};
  padding: 8px 0;
  position: fixed;
  z-index: 1001;
  top: ${({ offsetTop }) => offsetTop + "px"};
  right: ${({ offsetRight }) => offsetRight + "px"};
`;

const DropdownItem = styled.div`
  padding: 8px 16px;

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.bg.baseGrey};
  }
`;

const Overlay = styled.div`
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
