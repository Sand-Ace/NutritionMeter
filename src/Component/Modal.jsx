import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ openModal, onClose }) => {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (openModal) {
      if (dialog && !dialog.open) {
        dialog.showModal();
      }
    } else {
      if (dialog && dialog.open) {
        dialog.close();
      }
    }
  }, [openModal]);

  function handleClose() {
    onClose();
  }

  return createPortal(
    <dialog className="modal" ref={dialogRef}>
      <h1>Opss!</h1>
      <div>
        <h2>This button is not working now.</h2>
        <p>Sorry, I will fix soon.</p>
      </div>
      <button
        className="seondary_button green_bg modalbtn"
        onClick={handleClose}
      >
        Okay
      </button>
    </dialog>,
    document.getElementById("modal")
  );
};
export default Modal;
