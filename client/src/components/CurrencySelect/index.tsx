import React, { useState } from 'react';
import { currencies } from '../../data';
import { setLocalStorage } from '@helpers/storage';
import { Modal } from '../UI/Modal';
import { useModal } from '@hooks/useModal';
import {
  StyledCurrencySelect,
  StyledCurrencyOption,
  StyledCurrencies,
  StyledCurrencyIcon,
} from './styled';

export const CurrencySelect = (): JSX.Element => {
  const [modalOpen, setModalOpen] = useModal();
  const [currency, setCurrency] = useState(
    localStorage.getItem('currency') || currencies[0].code
  );

  // Temporarily store on localStorage before backend implementaiton
  const setCurrencyValue = (value: string): void => {
    setCurrency(value);
    setLocalStorage('currency', value);
    setModalOpen(false);
  };

  return (
    <>
      <StyledCurrencySelect onClick={() => setModalOpen(true)}>
        {currency}
      </StyledCurrencySelect>

      <Modal
        isActive={modalOpen}
        handleClose={() => setModalOpen(false)}
        title="Select Currency"
      >
        <StyledCurrencies>
          {currencies.map(({ title, id, icon, code }) => (
            <StyledCurrencyOption
              key={id}
              onClick={() => setCurrencyValue(code)}
            >
              <StyledCurrencyIcon>{icon}</StyledCurrencyIcon>
              {title}
            </StyledCurrencyOption>
          ))}
        </StyledCurrencies>
      </Modal>
    </>
  );
};
