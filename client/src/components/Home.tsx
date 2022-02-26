import React, { useState } from 'react';
import styled from 'styled-components';
import { Layout } from './Layout';
import { CryptoTable } from './CryptoTable';
import { Search } from './Search/index';
import { SearchToggle } from './SearchToggle';

const StyledRow = styled.div`
  display: flex;
  padding-top: 4rem;
  margin-bottom: 4rem;
  flex-direction: column;
  align-items: flex-end;
  margin-left: auto;
  margin-right: auto;
  max-width: 1300px;
`;

export const Home = (): JSX.Element => {
  const [toggleSearch, setToggleSearch] = useState(false);

  return (
    <Layout>
      <StyledRow>
        <SearchToggle
          setToggleSearch={setToggleSearch}
          toggleSearch={toggleSearch}
        />

        {toggleSearch && (
          <Search
            setToggleSearch={setToggleSearch}
            toggleSearch={toggleSearch}
          />
        )}
      </StyledRow>

      <CryptoTable />
    </Layout>
  );
};
