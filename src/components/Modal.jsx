import React from "react";

function Modal({show,handleClose}){
    return(
        <div>
            <div show={show} onHide={handleClose}>
                <div >
                <div>Confirm Logout</div>
                </div>
                <div>Are you sure you want to log out?</div>
                <div>
                <button  onClick={handleClose}>
                    Cancel
                </button>
                <button  onClick={handleClose}>
                    Yes, Logout
                </button>
                </div>
            </div>
        </div>
    )
}

export default Modal