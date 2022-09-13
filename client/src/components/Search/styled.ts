import styled from 'styled-components';
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
  ComboboxOptionText,
} from '@reach/combobox';
import SearchIcon from '@assets/search.svg';

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

export const StyledInputWrapper = styled.div`
  display: flex;
  flex: 1 1 0%;
  padding: 0px 4px;
  background: ${props => props.theme.colors.primary};
  border-radius: 8px;
`;

export const StyledComboboxInput = styled(ComboboxInput as any)`
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.quaternary};
  padding: 8px;
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 100%;
  border: none;
  padding-left: 1rem;
  line-height: 2rem;
  outline: none;
  padding-left: 2.5rem;
  background-repeat: no-repeat;
  background-position: left center;
  outline: 0;

  @media (min-width: 480px) {
    width: 200px;
  }

  &:not(:placeholder-shown) {
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
  }

  span {
    font-size: 1.2rem;
    padding-left: 1rem;
  }
`;

export const StyledCombobox = styled(Combobox as any)`
  border: none;
`;

export const StyledComboboxPopover = styled(ComboboxPopover as any)`
  background: red;
`;

export const StyledComboboxOption = styled(ComboboxOption as any)`
  display: flex;
  align-items: center;
  text-decoration: none;
  background: #13131c;
  color: #20202f;
  font-size: 1.25rem;
  padding-left: 1.25rem;

  li {
    padding: 1rem;
  }

  img {
    margin-right: 1rem;
  }

  &:hover {
    background: #20202f;
  }
`;
