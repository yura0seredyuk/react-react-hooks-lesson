import React from "react";
import "./style.css";

import { CounterClass } from './CounterClass';
import { CounterFunction } from './CounterFunction';

import { Counter } from './Counter';

export default function App() {
  return (
    <div>
      <Counter />
      <CounterClass />
      <CounterFunction />
    </div>
  );
}
