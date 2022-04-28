import styled from 'styled-components';

const StyledCurrencySelect = styled.div`
  cursor: pointer;
  font-size: 1.3rem;
`;

const StyledCurrencyOption = styled.div`
  color: rgb(255, 255, 255);
  border-radius: 5px;
  cursor: pointer;
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  white-space: normal;
  display: flex;
  align-items: center;
  padding: 0.5rem;

  &:hover {
    background-color: rgb(23, 25, 36);
  }
`;

const StyledCurrencies = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4px;
  grid-gap: 2rem;
  padding-top: 2rem;
`;

const StyledCurrencyIcon = styled.div`
  display: block;
  height: 20px;
  width: 20px;
  border: 1px solid rgb(37, 37, 39);
  border-radius: 50%;
  margin-right: 2rem;
`;

export {
  StyledCurrencySelect,
  StyledCurrencyOption,
  StyledCurrencies,
  StyledCurrencyIcon,
};
