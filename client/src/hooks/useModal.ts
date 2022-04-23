import { useState } from 'react';

export const useModal = () => {
  const [modalOpen, setModalOpen] = useState(null);
  const toggle = () => setModalOpen(!modalOpen);
  return [modalOpen, setModalOpen, toggle];
};

export const useModalWithData = (initialSelected = null) => {
  const [modalOpen, setModalOpen] = useModal();
  const [selected, setSelected] = useState(initialSelected);
  const setModalState = state => {
    setModalOpen(state);
    if (state === false) {
      setSelected(null);
    }
  };
  return { modalOpen, setModalOpen, selected, setSelected, setModalState };
};
