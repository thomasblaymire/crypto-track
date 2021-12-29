import styled from 'styled-components';

export const StyledCryptoTable = styled.table`
  background: #fff;
  border-radius: 5px;
  margin: auto;
  font-size: 14px;
  width: 100%;
  transform: translateZ(0px);
  margin-bottom: 2rem;
`;

export const StyledTd = styled.td`
  border-bottom: 1px solid #eff2f5;
  background-color: #fff;
  font-weight: 500;
  white-space: nowrap;
  padding: 0 0 0.75rem;
`;

export const StyledCoin = styled.div`
  box-sizing: border-box;
  margin: 0px;
  display: flex;
  align-items: center;

  img {
    height: 24px;
    width: 24px;
    border-radius: 12px;
    margin-right: 0.5rem;
  }
`;

export const StyledTh = styled.th`
  text-align: left;
`;

export const StyledIcon = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 1rem;

  svg {
    width: 20px;
    height: 20px;
  }
`;
