import React, { useCallback } from 'react';
import { currencyFormat } from '@helpers/format';
import { StyledTableD } from './styled';
import { WatchList } from './WatchList';
import { Coin } from './Coin';
import { PriceChange } from './PriceChange';

export const Column = ({ columns, row, handleSelect }): JSX.Element => {
  const renderContent = useCallback(
    column => {
      switch (column.accessor) {
        case 'watch':
          return (
            <WatchList
              cell={column}
              toggle={handleSelect}
              selected={false}
              id={row['name']}
            />
          );

        case 'current_price':
          return currencyFormat(row['current_price']);

        case 'market_cap':
          return currencyFormat(row['market_cap']);

        case 'price_change_percentage_24h':
          return <PriceChange price={row['price_change_percentage_24h']} />;

        case 'market_cap_change_percentage_24h':
          return (
            <PriceChange price={row['market_cap_change_percentage_24h']} />
          );

        case 'name':
          return <Coin data={row} />;

        default:
          return row[column.accessor];
      }
    },
    [columns]
  );

  return (
    <>
      {columns.map(column => (
        <StyledTableD key={column.accessor}>
          {renderContent(column)}
        </StyledTableD>
      ))}
    </>
  );
};
