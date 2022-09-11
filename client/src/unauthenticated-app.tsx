import React, { useState } from 'react';
import styled from 'styled-components';
import { Header } from '@components/UI/Header';
import { Layout } from '@components/UI/Layout';
import { CryptoTable } from '@components/CryptoTable';
import { Search } from '@components/Search/index';
import { SearchToggle } from '@components/Search/SearchToggle';
import { Signup } from '@components/Auth/Signup';
import { Modal } from '@components/UI/Modal';
import { useModal } from '@hooks/index';

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

function UnauthenticatedApp({ theme, toggleTheme }): JSX.Element {
  const [modalOpen, setModalOpen, toggle] = useModal();
  return (
    <div>
      <Header toggleTheme={toggleTheme} theme={theme} />
      <main>
        <Layout>
          <StyledRow>
            <Search />
          </StyledRow>

          <CryptoTable toggleModal={() => toggle()} />

          <Modal
            isActive={modalOpen}
            handleClose={() => setModalOpen(false)}
            title="Create An Account"
          >
            <Signup toggleModal={toggle} />
          </Modal>
        </Layout>
      </main>
    </div>
  );
}

export default UnauthenticatedApp;
