import React from 'react';
import './Modal.css';

const Modal = (props) => {
    return (
        <div className='overlay'>
            <div className='modal'>
            <p className='close' onClick={props.close}>&#120;</p>
            {props.children}
            {/*{children}*/}
            </div>
        </div>
    );
};

export default Modal;