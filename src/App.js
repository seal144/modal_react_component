import React, {useState} from 'react';
import './App.css';

import Modal from './components/modal/modal.jsx';

function App() {
  const [ isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const handleAgree = () => {
    closeModal();
  }

  const handleCancel = () => {
    closeModal()
  }
  
  return (
    <div className="App">
      <button onClick={openModal}>
        OPEN MODAL
      </button>
      <Modal handleOnclose={closeModal} isOpen={isModalOpen} shouldBeCloseOnOutsideClick={true}>
        <h4>Lorem</h4>
        <p>Lorem ipsum dolor sit amet</p>
        <div className="modal__row">
          <button onClick = {handleAgree}>AGREE</button>
          <button onClick = {handleCancel}>CANCEL</button>
        </div>
      </Modal>
    </div>
  );
}

export default App;
