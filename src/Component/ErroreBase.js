import React from 'react'


//IL CAMBIAMENTO SI VEDRA NELLA CONSOLE
const ErroreBase = () => {
  let titolo = "Hello World";
  const cambiareTitolo = () => {
    titolo = "Ciao Mondo";
    console.log(titolo);
  };
  return <React.Fragment>
    <h1 style={
      {color: 'red'}
    
    }>UseState solo in console</h1>
    <h2>{titolo}</h2>
    <button className='btn btn-primary' onClick={cambiareTitolo}>
      Cambia titolo
    </button>
  </React.Fragment>;
};

export default ErroreBase;
