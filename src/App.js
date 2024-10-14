import { useState } from "react";
import "./index.css";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <div className="container">
      <h1>Counter : {count}</h1>

      <button onClick={increment}> Increment</button>
      <br />

      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Counter;
