import React from 'react';

interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, closeModal, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {children}
        <button onClick={closeModal} className="border rounded p-2 border-amber-500 bg-white text-amber-500 w-100">Close</button>
      </div>
    </div>
  );
};

export default Modal;
