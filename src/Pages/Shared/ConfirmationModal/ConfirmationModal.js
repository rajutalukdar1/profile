import React from 'react';

const ConfirmationModal = ({ title, message, successDelete, closeModal, successAction, modalData }) => {
    return (
        <div>
            {/* The button to open modal */}


            {/* Put this part before </body> tag */}
            <input type="checkbox" id="confirmationModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-red-600">{title}</h3>
                    <p className="py-4">{message}!</p>
                    <div className="modal-action">
                        <label onClick={closeModal} className="btn btn-primary">cancel</label>
                        <label onClick={() => successAction(modalData)} htmlFor="confirmationModal" className="btn">{successDelete}</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;