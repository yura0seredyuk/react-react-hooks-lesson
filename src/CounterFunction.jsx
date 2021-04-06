import React, { useState } from 'react';

export const CounterFunction = () => {
  const [value, setValue] = useState(0);
  const [count, setCount] = useState(666);

  return (
    <>
      <h2>CounterFunction[ Value: {value}, Count: {count} ]</h2>

      <button type="button" onClick={() => setValue(10)}>10</button>
      <button type="button" onClick={() => setValue(20)}>20</button>
      <button type="button" onClick={() => setValue(30)}>30</button>

      <h3>SetCount</h3>

      <button type="button" onClick={() => setCount(999)}>999</button>
      <button type="button" onClick={() => setCount(111)}>111</button>

    </>
  )
}
