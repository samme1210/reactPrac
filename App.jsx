import './App.css';
import React, { useState } from 'react';
import Title from './Components/Title.jsx'
import Todo from './Components/Todo'
import Counter from './Components/Counter.jsx';
import Modal from './Components/Modal.jsx'

function App() {
  const [showModal, setShowModal] = useState(false)

  function onTodoDelete() {
    setShowModal(true)
  }

  function cancelModal() {
    setShowModal(false)
    console.log('modal canceled')
  }

  function confirmModal() {
    setShowModal(false)
    console.log('modal confirmed')
  }

  return (
    <div>
      <Title />
      <div className="Todo__wrapper">
        <Todo onTodoDelete={onTodoDelete} title="Finish Frontend Simplified" />
        <Todo onTodoDelete={onTodoDelete} title="Finish Portfolio" />
        <Todo onTodoDelete={onTodoDelete} title="Land a 100k a year job" />
      </div>
      {/* <Counter /> */}
      {showModal && (
      <Modal 
      confirmModal={confirmModal} 
      cancelModal={cancelModal} 
      title="Confirm Delete?" />
        )}
    </div>
  );
}

export default App;
