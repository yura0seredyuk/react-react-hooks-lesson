import React from "react";
import "./style.css";

import { CounterClass } from './CounterClass';
import { CounterFunction } from './CounterFunction';

export default function App() {
  return (
    <div>
      <CounterClass />
      <CounterFunction />
    </div>
  );
}
