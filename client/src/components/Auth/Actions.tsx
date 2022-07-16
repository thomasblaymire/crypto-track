import React, { useState } from 'react';
import UserIcon from '@assets/icons/user-solid.svg';
import { StyledActions, StyledUserButton, StyledActionButtons } from './styled';
import { Button } from '../UI/Button';
import { Dropdown } from '../UI/Dropdown';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@helpers/auth';
import { Modal } from '../UI/Modal';
import { Signup } from './Signup';
import { Login } from './Login';
import { Reset } from './Reset';
import { useModal } from '@hooks/index';

export const Actions = (): JSX.Element => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [modalOpen, setModalOpen, toggleModal] = useModal();
  const [menu, setMenu] = useState(false);
  const [modal, setModal] = useState(null);

  const FORM_ELEMENT = {
    signup: <Signup />,
    login: <Login toggleModal={toggleModal} />,
    reset: <Reset />,
  };

  const handleAdminMenu = (): void => {
    setMenu(value => !value);
  };

  const items = [
    {
      id: 1,
      title: 'Watch List',
      onClick: () => navigate('/watchlist'),
    },
    {
      id: 2,
      title: 'Account Settings',
      onClick: () => navigate('/settings'),
    },
    {
      id: 3,
      title: 'Portfolio',
      onClick: () => navigate('/portfolio'),
    },
    {
      id: 4,
      title: 'Log Out',
      onClick: logout,
    },
  ];

  const handleModalDisplay = (id: string) => {
    setModal(id);
    toggleModal();
  };

  return (
    <StyledActions>
      {user ? (
        <StyledUserButton onMouseEnter={handleAdminMenu}>
          <UserIcon />
        </StyledUserButton>
      ) : (
        <StyledActionButtons>
          <Button
            onClick={() => handleModalDisplay('login')}
            className="btn'"
            color="secondary"
          >
            <p>Log In</p>
          </Button>
          <Button onClick={() => handleModalDisplay('signup')} className="btn'">
            <p>Sign Up</p>
          </Button>
        </StyledActionButtons>
      )}

      {menu && <Dropdown onMouseLeave={handleAdminMenu} items={items} />}

      <Modal
        isActive={modalOpen}
        handleClose={() => setModalOpen(false)}
        title={modal === 'login' ? 'Login' : 'Create An Account'}
      >
        {FORM_ELEMENT[modal]}
      </Modal>
    </StyledActions>
  );
};
