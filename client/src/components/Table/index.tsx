import React, { useMemo } from 'react';
import { useTable, useSortBy, useRowSelect } from 'react-table';
import {
  StyledTable,
  StyledThead,
  StyledTableHeader,
  StyledTableD,
  StyledTableRow,
  StyledTableRowBody,
} from './styled';
import { currencyFormat } from '@helpers/format';
import { Coin } from './Coin';
import { useQuery } from 'react-query';
import { PriceChange } from './PriceChange';
import { WatchListIcon } from './WatchListIcon';
import { CryptoData } from '../../types/types';

interface TableProps {
  data: CryptoData[];
  onFetchData: () => void;
}

export const Table = ({ data }: TableProps): JSX.Element => {
  // const { data, isLoading, isError, error }: any = useQuery(
  //   ['watchlist'],
  //   async () => {
  //     const response = await fetch(`${process.env.BACKEND_API}/api/watchlist`);
  //     const data = await response.json();
  //     return data;
  //   }
  // );

  // console.log('TOM watchlistItems', data);
  console.log('TOM cryptoData', data);

  // var selectedUser = users.find(function (user) {
  //   return user.id === 70;
  // });

  const selected = true;

  const onSaveRating = (e, cell) => {
    const id = cell?.row?.original.id;
    // Hit an API to store the users selected cryptos
    e.preventDefault();
  };

  const columns = useMemo(
    () => [
      {
        Header: ' ',
        columns: [
          {
            Header: '',
            accessor: 'watch',
            Cell: ({ cell }) => {
              return (
                <WatchListIcon
                  onSaveRating={onSaveRating}
                  selected={selected}
                  cell={cell}
                />
              );
            },
          },
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
            Header: 'Circulating Supply',
            id: 'circulating_supply',
            accessor: 'circulating_supply',
          },
          {
            Header: 'Total Volume',
            id: 'total_volume',
            accessor: 'total_volume',
          },
        ],
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    selectedFlatRows,
    state: { selectedRowIds, pageIndex, pageSize, sortBy, filters },
  } = useTable(
    {
      columns,
      data,
    },
    useSortBy,
    useRowSelect
  );

  // //When these table states change, fetch new cryptoData!
  // React.useEffect(() => {
  //   onFetchData({ pageIndex, pageSize, sortBy, filters });
  // }, [onFetchData, pageIndex, pageSize, sortBy, filters]);

  return (
    <>
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
                    {column.isSorted
                      ? column.isSortedDesc
                        ? ' 🔽'
                        : ' 🔼'
                      : ''}
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
                      // onClick={() => {
                      //   console.log('TOM', cell);
                      //   if (cell[0]) {
                      //     return;
                      //   }
                      //   return navigate(
                      //     `/currencies/${cell.row.original.id.toLowerCase()}`
                      //   );
                      // }}
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
    </>
  );
};
