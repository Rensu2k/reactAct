import Counter from "./components/counter";
import Calculator from "./components/calculator";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="header">
      <h1>React Playground</h1>  
      </div>
      <Counter />
      <Calculator />
    </div>
  );
}

export default App;
