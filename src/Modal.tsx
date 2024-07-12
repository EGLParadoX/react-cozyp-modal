import React from 'react';
import styles from './styles.module.css';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  isLoading?: boolean;
  children: React.ReactNode;
  customStyles?: {
    blocker?: React.CSSProperties;
    modal?: React.CSSProperties;
    closeButton?: React.CSSProperties;
  };
}

export function Modal({ isOpen, onClose, isLoading, children, customStyles }: ModalProps) {
  if (!isOpen) return null;

  if (isLoading) {
    return (
      <div className={styles.modalSpinner}>
        <div></div>
      </div>
    );
  }

  return (
    <div 
      className={styles.blocker} 
      onClick={onClose}
      style={customStyles?.blocker}
    >
      <div 
        className={styles.modal} 
        onClick={(e) => e.stopPropagation()}
        style={customStyles?.modal}
      >
        {children}
        <button
          className={styles.closeModal}
          onClick={onClose}
          aria-label="Fermer"
          style={customStyles?.closeButton}
        >
          &#215;
        </button>
      </div>
    </div>
  );
}