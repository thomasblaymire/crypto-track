import React, { useMemo } from 'react';
import { useTable, useSortBy } from 'react-table';
import {
  StyledTable,
  StyledThead,
  StyledTableHeader,
  StyledTableD,
  StyledTableRow,
  StyledTableRowBody,
} from './styled';
import { currencyFormat } from '../../helpers/format';
import { Coin } from './Coin';
import { PriceChange } from './PriceChange';
import { useNavigate } from 'react-router-dom';
import { CryptoData } from '../../types';

interface TableProps {
  data: CryptoData[];
}

export const Table = ({ data }: TableProps): JSX.Element => {
  const navigate = useNavigate();

  const columns = useMemo(
    () => [
      {
        Header: ' ',
        columns: [
          {
            Header: 'Name',
            accessor: 'name',
            Cell: row => {
              return <Coin data={row.row.original} />;
            },
          },
          {
            Header: 'Price',
            accessor: 'current_price',
            Cell: ({ cell: { value } }) => currencyFormat(value),
          },
          {
            Header: '24%',
            accessor: 'price_change_percentage_24h',
            Cell: ({ cell: { value } }) => {
              return <PriceChange price={value} />;
            },
          },
          {
            Header: '48%',
            accessor: 'market_cap_change_percentage_24h',
            id: 'price',
            Cell: ({ cell: { value } }) => {
              return <PriceChange price={value} />;
            },
          },
          {
            Header: 'Market Cap',
            accessor: 'market_cap',
            id: 'market',
            Cell: ({ cell: { value } }) => currencyFormat(value),
          },
          {
            Header: 'Volume',
            id: 'volume',
            accessor: 'total_supply',
          },
        ],
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns,
        data,
      },
      useSortBy
    );

  return (
    <StyledTable {...getTableProps()}>
      <StyledThead>
        {headerGroups.map(headerGroup => (
          <StyledTableRow {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <StyledTableHeader
                {...column.getHeaderProps(column.getSortByToggleProps())}
              >
                {column.render('Header')}
                <span>
                  {column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}
                </span>
              </StyledTableHeader>
            ))}
          </StyledTableRow>
        ))}
      </StyledThead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row);
          return (
            <StyledTableRowBody {...row.getRowProps()}>
              {row.cells.map(cell => {
                return (
                  <StyledTableD
                    {...cell.getCellProps()}
                    onClick={() => {
                      return navigate(
                        `/currencies/${cell.row.values.name.toLowerCase()}`
                      );
                    }}
                  >
                    {cell.render('Cell')}
                  </StyledTableD>
                );
              })}
            </StyledTableRowBody>
          );
        })}
      </tbody>
    </StyledTable>
  );
};
