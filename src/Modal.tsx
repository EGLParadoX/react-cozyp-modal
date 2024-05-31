import React from 'react';
import styles from './styles.module.css';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  isLoading?: boolean;
  children: React.ReactNode;
}

export function Modal({ isOpen, onClose, isLoading, children }: ModalProps) {
  if (!isOpen) return null;

  if (isLoading) {
    return (
      <div className={styles.modalSpinner}>
        <div></div>
      </div>
    );
  }

  return (
    <div className={styles.blocker} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        {children}
        <button
          className={styles.closeModal}
          onClick={onClose}
          aria-label="Fermer"
        >
          &#215;
        </button>
      </div>
    </div>
  );
}

