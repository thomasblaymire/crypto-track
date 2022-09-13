import React, { useState } from 'react';
import {
  StyledComboboxPopover,
  StyledInputWrapper,
  StyledComboboxInput,
  StyledCombobox,
} from './styled';
import { useNavigate } from 'react-router-dom';
import { useDebounce } from '@hooks/index';
import { QUERY_DEBOUNCE_DURATION_MILLISECONDS } from '../../constants';
import { ComboboxList, ComboboxOptionText } from '@reach/combobox';
import { StyledComboboxOption } from './styled';
import { useSearch } from '@hooks/index';
import '@reach/combobox/styles.css';

export const Search = (): JSX.Element => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const debouncedSearchTerm = useDebounce(
    searchQuery,
    QUERY_DEBOUNCE_DURATION_MILLISECONDS
  );

  const { data }: any = useSearch(debouncedSearchTerm);
  const handleChange = event => setSearchQuery(event.target.value);

  return (
    <>
      <StyledCombobox onSelect={value => navigate(`/currencies/${value}`)}>
        <StyledInputWrapper>
          <StyledComboboxInput
            onChange={handleChange}
            style={{
              width: 300,
              margin: 0,
            }}
            placeholder="Search Cryptocurrencies"
          />
        </StyledInputWrapper>

        {data && (
          <StyledComboboxPopover style={{ width: 300, border: '0px' }}>
            {data.length > 0 ? (
              <ComboboxList>
                {data.length > 3 && (
                  <>
                    {data.map((coin, index) => (
                      <StyledComboboxOption key={index} value={coin.id}>
                        <img src={coin.thumb} alt={coin.name} />
                        <ComboboxOptionText />
                      </StyledComboboxOption>
                    ))}
                  </>
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
    </>
  );
};
