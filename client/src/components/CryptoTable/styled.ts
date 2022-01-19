import styled from 'styled-components';

interface TableDataProps {
  alignment?: string;
}

interface TableHeaderProps {
  alignment?: string;
}

interface VolumeProps {
  isPositive: boolean;
}

export const StyledCryptoTable = styled.table`
  border-radius: 5px;
  margin: auto;
  width: 100%;
  transform: translateZ(0px);
  margin-bottom: 2rem;
  border-spacing: 0px;
  color: #fff;
  font-size: 1.5rem;
  padding: 4rem 0;
`;

export const StyledTr = styled.tr`
  &:hover {
    background: ${({theme}) => theme.colors.tertiary};
    cursor: pointer;
  }
`;

export const StyledTd = styled.td<TableDataProps>`
  border-bottom: 1px solid ${({theme}) => theme.borders.primary};
  font-weight: 500;
  white-space: nowrap;
  padding: 1rem 0;
  text-align: ${({ alignment }) => (alignment === 'left' ? `left` : `right`)};
`;

export const StyledTh = styled.th<TableHeaderProps>`
  border-bottom: 1px solid ${({theme}) => theme.borders.primary};
  text-align: right;

  :nth-child(3) {  
    text-align: left;
  }

  p {
    margin: 0.75rem 0;
  }
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
    margin-right: 1rem;
  }
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

export const StyledRank = styled.div`
  padding: 0 1rem;
  display: flex;
`;

export const StyledName = styled.div`
  padding-right: 1rem;
  font-weight: 600;
`;

export const StyledVolume = styled.div<VolumeProps>`
  color: ${({ isPositive }) => (isPositive ? `green` : `red`)};
`;
