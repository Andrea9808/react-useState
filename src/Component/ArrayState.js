import React, {useState} from "react";

// import dei dati
import {data} from '../data';
const ArrayState = () => {
  const [Persone, setPersone] = useState(data);
  const removePeople = (id) => {
    //let newPeople = Persone.filter(persona => persona.id !== id);

    //value returnato da filter
    setPersone(oldPeople => {
        return oldPeople.filter(persona => persona.id !== id);
      }
    );
  }
  // console.log(Persone);
  return (
    <>
      <h1 style={
        {color: 'red'}
      }> UseState con ARRAY</h1>
      {

        // itero le persone
        Persone.map((persona) => {
          const {id, name} = persona;
          return (
            <div key={id} className='item shadow'>
              <h4>{name}</h4>
              <button onClick={() => removePeople(id)} className="btn btn-danger">
                Rimuovi
              </button>
            </div>
          );
        })
      }
    </>
  );
};

export default ArrayState;
