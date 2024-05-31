import React, {useState} from "react";
//import {data} from '../../../data';

const StateObject = () => {
  // const [name, setName] = useState('Peter');
  // const [age, setAge] = useState(24);
  // const [message, setMessage] = useState('Random Message');

  // const cambiaSaluto = () => {
  //   setMessage('Hello World!');
  //   setAge(22);
  // }

  const [persona, setPersona] = useState({
    name: 'Peter',
    age: 24,
    message: 'Random Message'
  });

  const cambiaSaluto = () => {
    setPersona({
      //spread operator, per non perdere i valori precedenti
      ...persona,
      age: 25,
    })
  }
  
  return <div className=" my-5 item shadow">
    <div className="text-left">
    <h1 style={
        {color: 'red'}
    }>useState Object</h1>
      <h4>{persona.name}</h4>
      <p>{persona.age}</p>
      <p>{persona.message}</p>
    </div>
    <button onClick={cambiaSaluto} className="btn btn-info">
      Cambia Saluto
    </button>
    </div>;
};

export default StateObject;
