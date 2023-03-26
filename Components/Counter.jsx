import React, { useState } from 'react';

function Counter() {
const [count, setCount] = useState(0);

  function increaseCount() {
    setCount(count + 1)
  }

  function decreaseCount() {
    setCount(count - 1)
  }

  return (
    <>
      <button onClick={decreaseCount} className="btn__count">-</button>
      {count}
      <button onClick={increaseCount} className="btn__count">+</button>
    </>
  );
}

export default Counter;
