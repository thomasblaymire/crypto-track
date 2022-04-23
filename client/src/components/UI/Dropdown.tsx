import React from 'react';
import styled from 'styled-components';

interface DropdownItemProps {
  onClick: any;
}

interface DropdownProps {
  items: any;
  onMouseLeave: any;
}

const StyledDropdown = styled.div`
  position: absolute;
  left: 2rem;
  top: 45px;
  transform: translateX(-45%);
  background-color: #13131d;
  border-radius: 4px;
  border: 1px solid rgb(23, 25, 36);
  border-radius: 8px;
  padding: 1rem;
  overflow: hidden;
  transition: height 500ms ease;
`;

const StyledDropdownContent = styled.div`
  width: 200px;
`;

const StyledDropdownItem = styled.div<DropdownItemProps>`
  display: flex;
  align-items: center;
  border-radius: 8px;
  padding: 1rem 1.5rem;
  color: #fff;
  text-decoration: none;
  font-size: 12px;
  line-height: 18px;
  cursor: pointer;

  &:hover {
    background: #1b1b2a;
  }
`;

export const Dropdown = ({ onMouseLeave, items }: DropdownProps) => (
  <StyledDropdown onMouseLeave={onMouseLeave}>
    <StyledDropdownContent>
      {items.map(({ title, onClick }, i) => (
        <StyledDropdownItem key={i} onClick={onClick}>
          {title}
        </StyledDropdownItem>
      ))}
    </StyledDropdownContent>
  </StyledDropdown>
);
