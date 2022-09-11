import React, { useState } from 'react';
import { Table } from '../Table';
import { Loading } from '@components/UI/Loading';
import { Pagination } from '@components/UI/Pagination';
import { useCryptos, useWatchList } from '@hooks/index';
import { StyledCryptoTable } from './styled';
import { columns } from './data';
import { useAuth } from '../../context/auth';

interface CryptoTableProps {
  toggleModal?: () => void;
}

export const CryptoTable = ({ toggleModal }: CryptoTableProps): JSX.Element => {
  const [pageNumber, setPageNumber] = useState(1);
  const { user } = useAuth();
  const watchListItems = user ? useWatchList() : [];
  // const currency = user?.currency ? user.currency : 'gbp';

  const currency = 'gbp';
  const { cryptos, isLoading, isSuccess, isError, error } = useCryptos(
    pageNumber,
    currency
  );

  const handlePaginate = (pageNumber: number): void => {
    setPageNumber(pageNumber);
    window.scrollTo(0, 0);
  };

  const handleSelect = () => {
    if (toggleModal) {
      toggleModal();
    }
  };

  return (
    <>
      {isError ? (
        <div>
          <p>There was an error:</p>
          <pre>{error.message}</pre>
        </div>
      ) : null}

      {isSuccess ? (
        cryptos.length ? (
          <StyledCryptoTable>
            <Table
              rows={cryptos}
              columns={columns}
              handleSelect={handleSelect}
            />
            <Pagination handlePaginate={handlePaginate} />
          </StyledCryptoTable>
        ) : (
          <p>No cryptos found. Try again.</p>
        )
      ) : null}

      {isLoading ? <Loading position="center" /> : null}
    </>
  );
};
