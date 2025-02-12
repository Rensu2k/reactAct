import { use, useState } from "react";
import "./counter.css";

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 2);
  }
  function decrement() {
    setCount(count - 2);
    if (count === 0) {
      setCount(0);
      alert("cannot decrement less than zero");
    }
  }
  function reset() {
    setCount(0);
  }

  return (
    <div className="counter">
      <h1>1. Counter</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
export default Counter;
