import './App.css';
import React from 'react';
import Counter from './Components/Counter.jsx';
import Modal from './Components/Modal.css'

function App() {
  return (
    <div className="wrapper">
      <Counter />
      <Modal />
    </div>
  );
}

export default App;
