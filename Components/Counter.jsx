import React, { useState } from 'react';

function Counter() {
const [cart, setCart] = useState({
  item: "apple",
  quantity: 0,
});

  function addApple() {
    // use callback to get prev value
    // spread out all the properties of the prev state 
    //only change the needed property 
    setCart(prevCart => ({
      ...prevCart,
      quantity: prevCart.quantity + 1,
    }))
  }

  function decreaseApple() {
    setCart(prevCart => ({
      ...prevCart,
      quantity: prevCart.quantity - 1,
    }))
  }
  

  return (
    <>
      <button onClick={decreaseApple} className="btn__count">-</button>
      {cart.quantity}
      {cart.item}
      <button onClick={addApple} className="btn__count">+</button>
    </>
  );
}

export default Counter;
