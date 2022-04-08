import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import CloseIcon from '@assets/close.svg';

const StyledModal = styled.div`
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
    color: #fff;
    background: none;
    opacity: 0.3;
    cursor: pointer;
    border: none;
    height: 24px;
    width: 24px;
  }

  .button-default {
    background: #247ba0;
    color: #fff;
  }
`;

const StyledClose = styled.div`
  svg {
    width: 25px;
    height: 25px;
  }
`;

export const Modal = ({ isShowing, hide, title, children }): JSX.Element =>
  isShowing
    ? ReactDOM.createPortal(
        <StyledModal>
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
                  onClick={hide}
                >
                  <CloseIcon />
                </StyledClose>
              </div>
              <div className="modal-body">{children}</div>
            </div>
          </div>
        </StyledModal>,
        document.body
      )
    : null;
