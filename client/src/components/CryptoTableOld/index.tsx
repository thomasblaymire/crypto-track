import React from 'react';
import { StyledWrapper } from './styled';
import { Loading } from '../Loading';
import { CryptoHeader } from './CryptoHeader';
import { CryptoRow } from './CryptoRow';
import { CryptoData } from '../../types';
import { cryptoHeadingColumns } from '../../data';
import { useFetch } from '../../hooks/fetch';
import { ALL_COIN_QUERY_STRING } from '../../constants';

interface FetchCryptoCoinsInterface {
  data: CryptoData[];
  isLoading?: boolean;
  hasError?: boolean;
  isInitialLoad: number;
  errorMessage?: string;
}

export const CryptoTable = (): JSX.Element => {
  const {
    data,
    hasError,
    errorMessage,
    isInitialLoad,
  }: FetchCryptoCoinsInterface = useFetch({
    initialUrl: `${process.env.COINGEKO_API}/${ALL_COIN_QUERY_STRING()}`,
    interval: 5,
    revalidate: true,
  });

  return (
    <StyledWrapper>
      {isInitialLoad === 0 && <Loading position="center" />}
      {hasError && <p>{errorMessage}</p>}

      <CryptoHeader columns={cryptoHeadingColumns} />

      {data &&
        data.map((column, index) => <CryptoRow key={index} column={column} />)}
    </StyledWrapper>
  );
};
