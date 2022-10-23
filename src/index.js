import React, {useState} from 'react'
import ReactDOM from 'react-dom/client'
import Titulo from './Componentes/Titulo'
import Lista from './Componentes/Lista'

const root = ReactDOM.createRoot(document.getElementById('root'));

const Mandado = () => {
  const [lista, setLista] = useState([]);
  return(
    <>
      <Titulo color='blue'/>
      <Lista setLista={setLista} lista={lista}/>
    </>
  ); //end return
}; //end Mandado

root.render(
  <Mandado/>
);