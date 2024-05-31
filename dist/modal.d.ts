import React from 'react';
interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    isLoading?: boolean;
    children: React.ReactNode;
}
export declare function Modal({ isOpen, onClose, isLoading, children }: ModalProps): React.JSX.Element | null;
export {};
