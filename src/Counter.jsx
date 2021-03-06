import React, { useState } from 'react';

export const Counter = () => {
  const [count, setCount] = useState(0);

  // const increase = () => {
  //   setCount(count + 1);
  // }

  const increase = () => {
    setCount(current => current + 1);
    setCount(current => current + 1);
    setCount(current => current + 1);
  }

  return (
    <>
      <h2>Count: {count}</h2>
      <button onClick={increase}>++</button>
    </>
  )
}