import styled from 'styled-components';

interface WrapperProps {
  hideToggle: boolean;
}

export const StyledCryptoWrapper = styled.div<WrapperProps>`
  width: 360px;
  min-height: 140px;
  max-height: 610px;
  border-radius: 8px;
  background-color: rgb(23, 25, 36);
  position: ${({ hideToggle }) => (hideToggle ? `absolute` : `relative`)};

  @media (min-width: 480px) {
    width: 400px;
  }
`;

export const StyledSearch = styled.div`
  padding: 18px 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: rgb(133, 140, 162);

  input {
    border: none;
    outline: none;
    width: 100%;
    box-shadow: none;
    background-color: rgb(23, 25, 36);
    color: rgb(255, 255, 255);
  }

  svg {
    bottom: 8px;
    left: 10px;
  }

  div {
    display: flex;
    flex: 1 1 0%;
    font-weight: 600;
    font-size: 12px;
    margin-left: 4px;
    width: 100px;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

export const StyledInputWrapper = styled.div`
  display: flex;
  flex: 1 1 0%;
  padding: 0px 4px;
`;

export const StyledSearchContainer = styled.div``;

export const StyledClose = styled.div`
  cursor: pointer;
  width: 16px;
  height: 16px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  background-color: rgb(50, 53, 70);
  color: rgb(23, 25, 36);
  border-radius: 8px;

  svg {
    width: 15px;
  }
`;
