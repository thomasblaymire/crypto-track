import React, { useState } from 'react';
import { Table } from '../Table';
import { Loading } from '../UI/Loading';
import { Pagination } from '../UI/Pagination';
import { useCryptos } from '@hooks/useCryptos';
import { useTable } from '@hooks/useTable';

import { StyledCryptoTable } from './styled';

export const CryptoTable = (): JSX.Element => {
  const [pageNumber, setPageNumber] = useState(1);

  // const { cryptos, isLoading, isError, error } = useCryptos(pageNumber);

  const { cryptos, isLoading, isError, error } = useTable(pageNumber);

  const handlePaginate = (pageNumber: number): void => {
    setPageNumber(pageNumber);
    window.scrollTo(0, 0);
  };

  const onFetchData = () => {
    // console.log('FETCH INITIAL DATA AND WATCHLIST ITEMS');
  };

  return (
    <>
      {cryptos && (
        <StyledCryptoTable>
          <Table onFetchData={onFetchData} data={cryptos} />
          <Pagination handlePaginate={handlePaginate} />
        </StyledCryptoTable>
      )}
      {isLoading && <Loading position="center" />}
      {isError && <p>{error.message}</p>}
    </>
  );
};
