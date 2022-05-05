import {useState} from 'react';
import Modal from './Modal';
import Backdrop from './Backdrop';

function Todo(props) {
   const [ modalIsOpen, setModalOpen ] = useState(false);
    function openModalHandler() { //Modal show up
        setModalOpen(true);
    }
    function closeModalHandler() { //Modal hide
        setModalOpen(false);
    }
    return (
        <section className="card">
            <h2>{props.text}</h2>
            <div className="actions">
                <button className="btn" onClick={openModalHandler}>Delete</button>
            </div>
            {modalIsOpen && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />}
            {modalIsOpen && <Backdrop onClick={closeModalHandler} />}
        </section>
    );
}

export default Todo;