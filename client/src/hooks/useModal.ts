import { useState } from 'react';

export const useModal = () => {
  const [isShowing, setIsShowing] = useState(false);

  const toggleModal = event => {
    event.preventDefault();
    const {
      target: {
        dataset: { modal },
      },
    } = event;
    if (modal) toggleModal(modal);
  };

  const closeModal = () => {
    setIsShowing(false);
  };

  function toggle() {
    setIsShowing(!isShowing);
  }

  return {
    isShowing,
    closeModal,
    toggle,
  };
};
