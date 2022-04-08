import React, { useState } from 'react';
import styled from 'styled-components';
import { Layout } from '@components/UI/Layout';
import { CryptoTable } from '@components/CryptoTable';
import { Search } from '@components/Search/index';
import { SearchToggle } from '@components/Search/SearchToggle';

const StyledRow = styled.div`
  display: flex;
  padding-top: 4rem;
  margin-bottom: 4rem;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  max-width: 1300px;

  @media (min-width: 480px) {
    align-items: flex-end;
  }
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
