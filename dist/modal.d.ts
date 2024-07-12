import React from 'react';
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
export declare function Modal({ isOpen, onClose, isLoading, children, customStyles }: ModalProps): React.JSX.Element | null;
export {};
