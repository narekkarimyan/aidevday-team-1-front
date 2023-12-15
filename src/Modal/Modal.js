import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';
export const Modal = ({ open, onClose }) => {

    return ReactDOM.createPortal(
        open ? (
            <div className="modal-overlay">
                <div className="modal-content">
                    <h2>Session Expiry</h2>
                    <p>You've been successfully registered</p>
                    <p>you will be redirected to the login</p>
                    <button onClick={onClose}>Close</button>
                </div>
            </div>
        ) : null,
        document.body
    );
};