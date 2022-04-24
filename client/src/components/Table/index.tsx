import React from 'react';
import { Column } from './Column';
import { ColumnType, CryptoData } from '../../types/types';
import {
  StyledTable,
  StyledThead,
  StyledTableHeader,
  StyledTableRowBody,
} from './styled';

interface TableProps {
  columns: ColumnType[];
  rows: CryptoData[];
}

export const Table = ({ columns, rows }: TableProps): JSX.Element => (
  <StyledTable>
    <StyledThead>
      {columns.map(column => (
        <StyledTableHeader key={column.accessor}>
          {column.label}
        </StyledTableHeader>
      ))}
    </StyledThead>
    <tbody>
      {rows.map(row => (
        <StyledTableRowBody key={row.id}>
          <Column columns={columns} row={row} />
        </StyledTableRowBody>
      ))}
    </tbody>
  </StyledTable>
);
