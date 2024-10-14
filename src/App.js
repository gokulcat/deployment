import { useState } from "react";
import "./index.css";

function Counter() {
  const [count, setCount] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount(0);
  };

  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
  };
  const themeStyles = {
    backgroundColor: darkMode ? "#333" : "#fff",
    color: darkMode ? "#fff" : "#000",
    height: "97vh",
    display: "flex",
  };

  return (
    <>
      <div className="container" style={themeStyles}>
        <h1>Counter : {count}</h1>
        <button onClick={increment}> Increment</button>
        <br />
        <button onClick={decrement}>Decrement</button>
        <br />
        <button onClick={reset}>Reset</button>
        <br />
        <button onClick={toggleTheme}>
          Switch to {darkMode ? "Light" : "Dark"} Mode
        </button>
      </div>
    </>
  );
}

export default Counter;
