import React, { useState } from 'react';
import { currencies } from '../../data';
import { setLocalStorage } from '@helpers/storage';
import { setUserCurrency } from '@helpers/auth';
import { Modal } from '../UI/Modal';
import { useModal } from '@hooks/index';
import {
  StyledCurrencySelect,
  StyledCurrencyOption,
  StyledCurrencies,
  StyledCurrencyIcon,
} from './styled';

export const CurrencySelect = (): JSX.Element => {
  const [modalOpen, setModalOpen] = useModal();
  const [currency, setCurrency] = useState(
    () => localStorage.getItem('currency') || currencies[0].code
  );

  const onSubmit = async (value: string): Promise<void> => {
    try {
      setCurrency(value);
      setLocalStorage('currency', value);
      setModalOpen(false);
      await setUserCurrency({ token: null, currency: value });
    } catch (ex) {
      const error = ex as Error;
      console.error(
        `❌ ERROR - CURRENCY - ERROR: name=${error.name} message=${error.message} stack=${error.stack}`
      );
    }
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
            <StyledCurrencyOption key={id} onClick={() => onSubmit(code)}>
              <StyledCurrencyIcon>{icon}</StyledCurrencyIcon>
              {title}
            </StyledCurrencyOption>
          ))}
        </StyledCurrencies>
      </Modal>
    </>
  );
};
