// Modal.js
import React from 'react';
import Modal from 'react-modal';

const MyModal = ({ isOpen, onRequestClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Example Modal"
    >
      <h2>Hello, I'm a Modal!</h2>
      <button onClick={onRequestClose}>Close Modal</button>
    </Modal>
  );
};

export default MyModal;
