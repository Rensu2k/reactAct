import React, { useState } from "react";
import "./calculator.css";

const Calculator = () => {
  const [display, setDisplay] = useState("0");
  const [equation, setEquation] = useState("");
  const [isNewNumber, setIsNewNumber] = useState(true);

  const handleNumber = (num) => {
    if (isNewNumber) {
      setDisplay(num);
      setIsNewNumber(false);
    } else {
      setDisplay(display + num);
    }
  };

  const handleOperator = (op) => {
    setEquation((prev) => prev + display + " " + op + " ");
    setIsNewNumber(true);
  };

  const handleEqual = () => {
    try {
      const result = eval(equation + display);
      setDisplay(result.toString());
      setEquation("");
      setIsNewNumber(true);
    } catch (error) {
      setDisplay("Error");
      setEquation("");
      setIsNewNumber(true);
    }
  };

  const handleDecimal = () => {
    if (isNewNumber) {
      setDisplay("0.");
      setIsNewNumber(false);
    } else if (!display.includes(".")) {
      setDisplay(display + ".");
    }
  };

  const handleClear = () => {
    setDisplay("0");
    setEquation("");
    setIsNewNumber(true);
  };

  return (
    <div className="calculator">
      <h1>2. Calculator</h1>
      <div className="display">
        <div className="equation">{equation}</div>
        <div className="current">{display}</div>
      </div>
      <div className="buttons">
        <button className="clear" onClick={handleClear}>
          C
        </button>
        <button className="operator" onClick={() => handleOperator("/")}>
          /
        </button>
        <button className="operator" onClick={() => handleOperator("*")}>
          ×
        </button>
        <button className="operator" onClick={() => handleOperator("-")}>
          -
        </button>

        <button className="number" onClick={() => handleNumber("7")}>
          7
        </button>
        <button className="number" onClick={() => handleNumber("8")}>
          8
        </button>
        <button className="number" onClick={() => handleNumber("9")}>
          9
        </button>
        <button className="operator" onClick={() => handleOperator("+")}>
          +
        </button>

        <button className="number" onClick={() => handleNumber("4")}>
          4
        </button>
        <button className="number" onClick={() => handleNumber("5")}>
          5
        </button>
        <button className="number" onClick={() => handleNumber("6")}>
          6
        </button>
        <button className="equals" onClick={handleEqual}>
          =
        </button>

        <button className="number" onClick={() => handleNumber("1")}>
          1
        </button>
        <button className="number" onClick={() => handleNumber("2")}>
          2
        </button>
        <button className="number" onClick={() => handleNumber("3")}>
          3
        </button>

        <button className="number zero" onClick={() => handleNumber("0")}>
          0
        </button>
        <button className="decimal" onClick={handleDecimal}>
          .
        </button>
      </div>
    </div>
  );
};

export default Calculator;
