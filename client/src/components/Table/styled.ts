import styled from 'styled-components';

interface TableRowProps {}

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const StyledThead = styled.thead`
  border-color: #474d57;
  background: ${props => props.theme.colors.primary};
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;

  th:nth-child(1) {
    border-top-left-radius: 8px;
  }

  th:nth-child(8) {
    border-top-right-radius: 9px;
  }
`;

export const StyledTableHeader = styled.th`
  text-align: left;
  font-size: 12px;
  line-height: 16px;
  font-weight: 400;
  color: #eaecef;
  height: 50px;
  padding-left: 1.5rem;
`;

export const StyledTableD = styled.td`
  font-size: 1.5rem;
  padding-left: 1.5rem;

  &:nth-child(2) {
    cursor: pointer;
  }
`;

export const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  border-color: #474d57;
  background: ${props => props.theme.colors.primary};
  flex: 1;
  font-size: 12px;
  line-height: 16px;
  font-weight: 400;
  color: #eaecef;
  height: 50px;
  font-weight: bold;
`;

export const StyledTableRowBody = styled.tr<TableRowProps>`
  border-bottom: 1px solid;
  border-color: #474d57;

  &:hover {
    background: ${props => props.theme.colors.primary};
  }
`;
