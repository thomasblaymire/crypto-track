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
  handleSelect: any;
}

export const Table = ({
  columns,
  rows,
  handleSelect,
}: TableProps): JSX.Element => (
  <StyledTable>
    <StyledThead>
      <tr>
        {columns.map(column => (
          <StyledTableHeader key={column.accessor}>
            {column.label}
          </StyledTableHeader>
        ))}
      </tr>
    </StyledThead>
    <tbody>
      {rows.map(row => (
        <StyledTableRowBody key={row.id}>
          <Column columns={columns} row={row} handleSelect={handleSelect} />
        </StyledTableRowBody>
      ))}
    </tbody>
  </StyledTable>
);
