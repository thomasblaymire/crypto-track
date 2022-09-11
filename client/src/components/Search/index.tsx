import React, { useState } from 'react';
import {
  StyledCryptoWrapper,
  StyledComboboxPopover,
  StyledSearch,
  StyledInputWrapper,
  StyledComboboxInput,
  StyledSearchContainer,
  StyledCombobox,
  StyledClose,
} from './styled';
import { Results } from './SearchResults';
import { useDebounce } from '@hooks/index';
import { QUERY_DEBOUNCE_DURATION_MILLISECONDS } from '../../constants';
import SearchIcon from '@assets/search.svg';
import CloseIcon from '@assets/close.svg';
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
  ComboboxOptionText,
} from '@reach/combobox';
import { StyledComboboxOption } from './styled';
import '@reach/combobox/styles.css';

import { useSearch } from '@hooks/index';
interface SearchInterface {}

export const Search = ({}: SearchInterface): JSX.Element => {
  const [searchQuery, setSearchQuery] = useState('');

  const debouncedSearchTerm = useDebounce(
    searchQuery,
    QUERY_DEBOUNCE_DURATION_MILLISECONDS
  );

  const { data }: any = useSearch(debouncedSearchTerm);

  const handleChange = event => setSearchQuery(event.target.value); // as HTMLFORMELEMENT {value}

  return (
    <div>
      <StyledCombobox>
        <StyledComboboxInput
          onChange={handleChange}
          style={{ width: 300, margin: 0 }}
          placeholder="Search Cryptocurrencies"
        />
        {data && (
          <StyledComboboxPopover style={{ width: 300, border: '0px' }}>
            {data.length > 0 ? (
              <ComboboxList>
                {data.length > 3 && (
                  <React.Fragment>
                    {data.map((coin, index) => (
                      <StyledComboboxOption key={index} value={coin.name}>
                        <img src={coin.thumb} alt={coin.name} />
                        <ComboboxOptionText />
                      </StyledComboboxOption>
                    ))}
                  </React.Fragment>
                )}
              </ComboboxList>
            ) : (
              <div>
                <p style={{ padding: 10, textAlign: 'center' }}>
                  No results 😞
                </p>
              </div>
            )}
          </StyledComboboxPopover>
        )}
      </StyledCombobox>
    </div>
  );

  return (
    <StyledCryptoWrapper hideToggle={toggleSearch}>
      <StyledSearch>
        <SearchIcon />

        <Combobox aria-label="custom option demo">
          <ComboboxInput
            placeholder="Search Cryptocurrencies"
            type="text"
            maxLength={50}
            name="search"
            autoComplete="off"
            autoFocus
            onChange={onChange}
            value={searchQuery}
          />
          <ComboboxPopover>
            <ComboboxList>
              {data &&
                data.map(coin => (
                  <StyledComboboxOption value={coin.name}>
                    <img src={coin.thumb} />
                    <ComboboxOptionText />
                  </StyledComboboxOption>
                ))}
            </ComboboxList>
          </ComboboxPopover>
        </Combobox>

        {/* <StyledInputWrapper>
            <input
              placeholder="Search Cryptocurrencies"
              type="text"
              maxLength={50}
              name="search"
              autoComplete="off"
              autoFocus
              onChange={onChange}
              value={searchQuery}
            />
            <StyledClose onClick={() => setToggleSearch(!toggleSearch)}>
              <CloseIcon />
            </StyledClose>
          </StyledInputWrapper> */}
      </StyledSearch>

      {/* <Results searchQuery={debouncedSearchTerm} /> */}
    </StyledCryptoWrapper>
  );
};
