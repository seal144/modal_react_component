import React, { useEffect, useRef } from  'react';
import ReactDOM from 'react-dom';

import './modal.scss'

const Modal = ({ children, handleOnclose, isOpen, shouldBeCloseOnOutsideClick }) => {
  const modalRef = useRef(null);
  const previousActiveElement = useRef(null);

  useEffect(() => {
    if (!modalRef.current) {
      return;
    }

    const { current: modal } = modalRef;

    if (isOpen) {
      previousActiveElement.current = document.activeElement;
      modal.showModal();
    } else if (previousActiveElement.current) {
      modal.close();
      previousActiveElement.current.focus();
    }
  },[isOpen]);

  useEffect(() => {
    const { current: modal } = modalRef;

    const handleCancel = event => {
      event.preventDefault();
      handleOnclose()
    };

    modal.addEventListener('cancel', handleCancel);

    return () => {
      modal.removeEventListener('cancel', handleCancel);
    }
  }, [handleOnclose]);

  const handleOutsideClick = ({ target }) => {
    const { current } = modalRef;

    if (shouldBeCloseOnOutsideClick && target === current) {
      handleOnclose()
    }
  }
  
  return ReactDOM.createPortal((
    <dialog className="modal" ref={modalRef} onClick={handleOutsideClick}>
      {children}
    </dialog>
  ), document.body);
};

export default Modal;
