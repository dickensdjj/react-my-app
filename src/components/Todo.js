import { useState } from 'react'
import { Backdrop } from './Backdrop';
import { Modal } from './Modal';


export const Todo = (props) => {
  const [ showModal, setModal ] = useState(false);

  const dummyFn = () => {
    console.log(showModal)
    setModal(!showModal);
  }

  const { title } = props;
  return (
    <div className="card">
      <h2>{title}</h2>
      <div className="actions">
        <button className="btn" onClick={dummyFn}>Show</button>
      </div>
      { showModal && <Modal onCancel={dummyFn} onConfirm={dummyFn}/>}
      { showModal && <Backdrop clickFn={dummyFn}/>}
    </div>
  );
};


