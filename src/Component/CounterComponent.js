import React, {useState} from "react";

const CounterComponent = () => {
  const [contatore, setContatore] = useState(0);
  const reset = () => {
    setContatore(0);
  }

  const aumenta = () => {
    setContatore(oldValue => {
      return oldValue + 1;
    });
  }

  
  return (
    <div className="bg-white shadow rounded py-5 my-5">
    <h1 style={
        {color: 'red'}
    }>Counter useState</h1>
      <h3> {contatore} </h3>
      <div className="d-flex justify-content-between">
        <button className="btn btn-danger" onClick={() => setContatore(contatore - 1)}>
          Diminuisci
        </button>
        <button className="btn btn-primary" onClick={reset} >
          Reset
        </button>
        <button className="btn btn-success" onClick={aumenta}>
          Aumenta
        </button>
      </div>
    </div>
  );
};

export default CounterComponent;
