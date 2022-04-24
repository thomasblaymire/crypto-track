import React, { useState } from 'react';
import { Table } from '../Table';
import { Loading } from '../UI/Loading';
import { Pagination } from '../UI/Pagination';
import { useCryptos } from '@hooks/useCryptos';
import { StyledCryptoTable } from './styled';
import { Modal } from '../UI/Modal';
import { useModal } from '@hooks/useModal';
import { useAuth } from '@helpers/auth';
import { Signup } from '../Auth/Signup';
import { columns } from './data';

export const CryptoTable = (): JSX.Element => {
  const [pageNumber, setPageNumber] = useState(1);
  const { cryptos, isLoading, isError, error } = useCryptos(pageNumber);
  const [modalOpen, setModalOpen] = useModal();
  const { user } = useAuth();

  const handlePaginate = (pageNumber: number): void => {
    setPageNumber(pageNumber);
    window.scrollTo(0, 0);
  };

  return (
    <>
      {cryptos && (
        <>
          <StyledCryptoTable>
            <Table rows={cryptos} columns={columns} />
            <Pagination handlePaginate={handlePaginate} />
          </StyledCryptoTable>

          <Modal
            isActive={modalOpen}
            handleClose={() => setModalOpen(false)}
            title={'Create An Account'}
          >
            <Signup />
          </Modal>
        </>
      )}
      {isLoading && <Loading position="center" />}
      {isError && <p>{error.message}</p>}
    </>
  );
};
