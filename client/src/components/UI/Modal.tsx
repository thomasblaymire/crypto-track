import React from 'react';
import styled from 'styled-components';
import CloseIcon from '@assets/close.svg';

interface ModalProps {
  isActive?: boolean;
}

const StyledModal = styled.div<ModalProps>`
  display: ${({ isActive }) => (isActive ? `flex` : `none`)};

  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1040;
    width: 100vw;
    height: 100vh;
    opacity: 0.5;
  }

  .modal-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1050;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    outline: 0;
    background: rgba(10, 30, 66, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: visibility 0.3s ease-in-out 0s, opacity 0.3s ease-in-out 0s,
      transform 0.3s ease-in-out 0s, box-shadow 0.3s ease-in-out 0s;
  }

  .modal {
    z-index: 100;
    background: #222531;
    border-radius: 16px;
    position: relative;
    margin: 1.75rem auto;
    max-width: 500px;
    padding: 24px;
    width: 496px;
  }

  .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 17px;
    line-height: 34px;
    font-weight: 700;
    color: var(--color-primary-black);
  }

  .modal-close-button {
    font-size: 1.4rem;
    font-weight: 700;
    line-height: 1;
    color: ${({ theme }) => theme.colors.textColor};
    background: none;
    opacity: 0.3;
    cursor: pointer;
    border: none;
    height: 24px;
    width: 24px;
  }

  .button-default {
    background: #247ba0;
    color: ${({ theme }) => theme.colors.textColor};
  }
`;

const StyledClose = styled.div`
  svg {
    width: 25px;
    height: 25px;
  }
`;

export const Modal = ({
  isActive,
  children,
  title,
  handleClose,
}): JSX.Element => (
  <StyledModal isActive={isActive}>
    <div className="modal-overlay" />
    <div
      className="modal-wrapper"
      aria-modal
      aria-hidden
      tabIndex={-1}
      role="dialog"
    >
      <div className="modal">
        <div className="modal-header">
          <h3>{title}</h3>
          <StyledClose
            type="button"
            className="modal-close-button"
            data-dismiss="modal"
            aria-label="Close"
            onClick={handleClose}
          >
            <CloseIcon />
          </StyledClose>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  </StyledModal>
);
