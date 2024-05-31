import React, {useState}  from "react";
// Gli Hooks devono essere usasti con use davanti
// componenti devono avere la prima lettere Maiuscola
// Gli Hook devono essere invocati all'interno del corpo/funzione del componente
// Gli Hook non possono essere utilizzati in maniera condizionale

const UsoBase = () => {

  // useState ritorna un array con due elementi
  // const value = useState()[0];
  // const handler = useState()[1];
  // console.log(value, handler);
  const [titolo, setTitolo] = useState("React Magic!");

  //tramite un bottone modifica un testo
  const cambiaTitolo = () => {
    if(titolo === "React Magic!")
      setTitolo("Vue Magic!");
    else{
      setTitolo("React Magic!");
    }
  };
  return (
    <>
    <div className="my-4">
        <h1 style={
            {color: 'red'}
        
        }> Uso base di useState</h1>
        <h2> {titolo}</h2>
        <button className='btn btn-primary' onClick={cambiaTitolo}>
            Cambia titolo
        </button>
      
    </div>
  
    </>
  );
};

export default UsoBase;
