import React, { useState, useRef } from 'react';
import UserIcon from '@assets/icons/user-solid.svg';
import { StyledActions, StyledUserButton, StyledActionButtons } from './styled';
import { Button } from '../UI/Button';
import { Dropdown } from '../UI/Dropdown';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@hooks/useAuth';
import { Modal } from '../UI/Modal';
import { Signup } from './Signup';
import { Login } from './Login';
import { Reset } from './Reset';
import { useModal } from '@hooks/useModal';

export const Actions = (): JSX.Element => {
  const navigate = useNavigate();
  const { token, onLogout } = useAuth();
  const { isShowing, toggle } = useModal();
  const [menu, setMenu] = useState(false);
  const [modal, setModal] = useState(null);

  const FORM_ELEMENT = {
    signup: <Signup toggle={toggle} />,
    login: <Login toggle={toggle} />,
    reset: <Reset toggle={toggle} />,
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
      onClick: onLogout,
    },
  ];

  const handleModalDisplay = (id: string) => {
    setModal(id);
    toggle();
  };

  const buttons = [
    {
      id: 1,
      title: 'Log In',
      onClick: () => handleModalDisplay('login'),
      color: 'secondary',
      className: 'btn',
    },
    {
      id: 2,
      title: 'Sign Up',
      onClick: () => handleModalDisplay('signup'),
    },
  ];

  return (
    <StyledActions>
      {token ? (
        <StyledUserButton onMouseEnter={handleAdminMenu}>
          <UserIcon />
        </StyledUserButton>
      ) : (
        <StyledActionButtons>
          {buttons.map(({ title, onClick, id, className, color }) => (
            <Button
              key={id}
              onClick={onClick}
              className={className}
              color={color}
            >
              {title}
            </Button>
          ))}
        </StyledActionButtons>
      )}
      {menu && <Dropdown onMouseLeave={handleAdminMenu} items={items} />}

      <Modal
        isShowing={isShowing}
        hide={handleModalDisplay}
        title={modal === 'login' ? 'Login' : 'Create An Account'}
      >
        {FORM_ELEMENT[modal]}
      </Modal>
    </StyledActions>
  );
};
