import styled from 'styled-components';
interface VolumeProps {
  isPositive?: boolean;
}

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

export const StyledCoin = styled.div`
  width: 200px;
  flex: 200 1 0%;
  display: flex;
  text-align: left;
  justify-content: flex-start;
  align-items: center;
  padding-left: 2.5rem;

  img {
    height: 24px;
    width: 24px;
    border-radius: 12px;
    margin-right: 1rem;
  }
`;

export const StyledName = styled.div`
  padding-right: 1rem;
  padding-left: 0.5rem;
  font-weight: 600;
  font-size: 1.5rem;
`;

export const StyledPrice = styled.div<VolumeProps>`
  width: 100px;
  flex: 100;
  display: flex;
  transition: all 0.5s;
  color: ${({ isPositive }) =>
    isPositive ? `rgb(14, 203, 129);` : `#F6465D;`};
`;

export const StyledPriceBasic = styled(StyledPrice)`
  color: #fff;
`;

export const StyledCryptoRow = styled.div`
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid;
  border-color: #474d57;
  border-radius: 4px 4px 0px 0px;
  flex: 1;
  font-size: 14px;
  line-height: 16px;
  font-weight: 400;
  color: #eaecef;
  height: 64px;
  padding-right: 15px;
  padding-left: 15px;

  @media (min-width: 480px) {
    padding-right: 0px;
    padding-left: 0px;
  }

  &:hover {
    background: ${props => props.theme.colors.primary};
    cursor: pointer;
  }
`;

export const StyledGeneral = styled.div`
  display: none;

  @media (min-width: 480px) {
    display: block;
    width: 100px;
    flex: 100;

    &:not(:last-child) {
      width: 130px;
      flex: 130 1 0%;
      direction: ltr;
    }
  }
`;

export const StyledWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 1300px;
`;

export const StyledTicker = styled.div`
  color: #848e9c;
`;
