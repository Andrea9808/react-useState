import ErroreBase from "./Component/ErroreBase";
import UsoBase from "./Component/UsoBase";
import ArrayState from "./Component/ArrayState";
import StateObject from "./Component/StateObject";
import CounterComponent from "./Component/CounterComponent";
function App() {
  return (
    <div className="App">
      <div className="container">
        <ErroreBase />
        <UsoBase />
        <ArrayState />
        <StateObject />
        <CounterComponent />
      </div>
    </div>
  );
}

export default App;
