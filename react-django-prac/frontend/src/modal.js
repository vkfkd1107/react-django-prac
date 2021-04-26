import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };


function TestModal() {
    var subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);
    
    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div>            
            <button onClick={openModal}>Open Modal</button>
            <Modal 
                isOpen={modalIsOpen}
                style={customStyles}  
                onRequestClose={closeModal}
                contentLabel="Example Modal"
            >
                <h2 ref={_subtitle => (subtitle = _subtitle)}>Hello</h2>
                <div>I am a Modal</div>
                <button onClick={closeModal}>close</button>
                <form>
                    <input />
                    <button>tab navigation</button>
                    <button>stays</button>
                    <button>inside</button>
                    <button>the modal</button>
                </form>
            </Modal>
        </div>
    );
}

export default TestModal;