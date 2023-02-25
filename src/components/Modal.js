import React from "react";

export const Modal = (props) => {
  const cancelHandler = () => {
    props.onCancel();
  }

  const confirmHandler = () => {
    props.onConfirm();
  }
  return (
    <div>
      <p>Are you sure?</p>
      <button onClick={cancelHandler} className="btn btn--alt">Cancel</button>
      <button onClick={confirmHandler} className="btn">Confirm</button>
    </div>
  );
};
