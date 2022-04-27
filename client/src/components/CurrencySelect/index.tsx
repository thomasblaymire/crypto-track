import React, { useState } from 'react';
import styled from 'styled-components';
import { currencies } from '../../data';
import { setLocalStorage } from '@helpers/storage';
import { Modal } from '../UI/Modal';
import { useModal } from '@hooks/useModal';

const StyledCurrencySelect = styled.div`
  position: relative;
`;

const StyledCurrencyOption = styled.div`
  color: rgb(255, 255, 255);
  border-radius: 5px;
  cursor: pointer;
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  white-space: normal;
  display: flex;
  align-items: center;
  padding: 10.5px 13px;

  &:hover {
    background-color: rgb(23, 25, 36);
  }
`;

const StyledCurrencies = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4px;
  padding-top: 2rem;
`;

const StyledCurrencyIcon = styled.div`
  display: block;
  height: 20px;
  width: 20px;
  border: 1px solid rgb(37, 37, 39);
  border-radius: 50%;
  margin-right: 10px;
`;

export const CurrencySelect = (): JSX.Element => {
  const [currency, setCurrency] = useState(
    localStorage.getItem('currency') || '[]'
  );
  const [modalOpen, setModalOpen] = useModal();

  const setCurrencyValue = (value: string): void => {
    setCurrency(value);
    setLocalStorage('currency', value);
  };

  return (
    <>
      <StyledCurrencySelect>
        <div onClick={() => setModalOpen(true)}>{currencies[0].code}</div>
      </StyledCurrencySelect>

      <Modal
        isActive={modalOpen}
        handleClose={() => setModalOpen(false)}
        title="Select Currency"
      >
        <StyledCurrencies>
          {currencies.map(({ title, id, icon, code }) => (
            <StyledCurrencyOption key={id}>
              <StyledCurrencyIcon>{icon}</StyledCurrencyIcon>
              {title}
            </StyledCurrencyOption>
          ))}
        </StyledCurrencies>
      </Modal>
    </>
  );
};
