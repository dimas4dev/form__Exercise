import React from "react";
import { createPortal } from "react-dom";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    if (!isOpen) {
        return null;
    }

    return createPortal(
        <>
            <div className="modal-overlay" onClick={onClose}></div>
            <div className="modal-container">
                <button className="modal-close" onClick={onClose}>
                    <span>&times;</span>
                </button>
                <div className="modal-content">{children}</div>
            </div>
        </>,
        document.getElementById("modal-root") as HTMLElement
    );
};

export default Modal;