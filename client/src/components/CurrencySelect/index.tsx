import React, { useState } from 'react';
import styled from 'styled-components';
import { useCryptos } from '@hooks/useCryptos';
import { Dropdown } from '@components/UI/Dropdown';
import { currencies } from '../../data';
import { setLocalStorage } from '@helpers/storage';
import { Modal } from '../UI/Modal';
import { useModal } from '@hooks/useModal';

const StyledCurrencySelect = styled.div`
  position: relative;
`;

interface CurrencySelectInterface {
  className?: string;
}

export const CurrencySelect = ({
  className,
}: CurrencySelectInterface): JSX.Element => {
  const [currency, setCurrency] = useState(
    localStorage.getItem('currency') || '[]'
  );
  const [modalOpen, setModalOpen] = useModal();
  const [dropownVisible, setSropownVisible] = useState(false);

  // useCryptos(currency);

  const setCurrencyValue = (value: string): void => {
    setCurrency(value);
    setLocalStorage('currency', value);
  };

  const handleAdminValue = () => {
    console.log('TM REST');
  };

  console.log('TOM currencies', currencies[0][1]);

  return (
    <>
      <StyledCurrencySelect>
        {dropownVisible && (
          <Dropdown onMouseLeave={handleAdminValue} items={currencies} />
        )}
        <div onClick={() => setModalOpen(true)}>{[currencies][0][1]}</div>
      </StyledCurrencySelect>

      <Modal
        isActive={modalOpen}
        handleClose={() => setModalOpen(false)}
        title="Select Currency"
      >
        {currencies.map(([value, text]) => (
          <div key={text}>{text}</div>
        ))}
      </Modal>
    </>
  );
};
