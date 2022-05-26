import React, { useState } from 'react';
import { Table } from '../Table';
import { Loading } from '../UI/Loading';
import { Pagination } from '../UI/Pagination';
import { useCryptos } from '@hooks/useCryptos';
import { StyledCryptoTable } from './styled';
import { columns } from './data';

export const CryptoTable = (): JSX.Element => {
  const [pageNumber, setPageNumber] = useState(1);
  const { cryptos, isLoading, isError, error } = useCryptos(pageNumber);

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
        </>
      )}
      {isLoading && <Loading position="center" />}
      {isError && <p>{error.message}</p>}
    </>
  );
};
