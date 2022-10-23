import React, {useState} from 'react'
import Boton from "../Estilos/Boton";

function Lista (props) {

  const [elemento, setElemento] = useState("");
  let valRep = false;

  
  const onChange = (e) => {
    if(e.target.name === "elemento"){
      console.log(e.target.value);
      setElemento(e.target.value);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    
    if(elemento !== ""){
      {props.lista.map((nombre) => {
        if(nombre === elemento){
            valRep = true;
            setElemento("");
        }
      })}
      if(valRep === false){
        props.setLista([...props.lista, elemento]);
        setElemento("");
        //console.log(props.lista);
      }
      valRep = false;
    }
  };

  function reiniciarLista(e){
    e.preventDefault();
    props.setLista([]);
  }

  return (
    <form action="" onSubmit={onSubmit}>
      <div>
        <label htmlFor="elementS">Elemento</label>
        <input
            type="text"
            name="elemento"
            id="elemento"
            value={elemento}
            onChange={onChange}>
        </input>

        <Boton color> Guardar </Boton>
        <Boton onClick={reiniciarLista}> Borrar </Boton>
      </div>
      <div>
        <ul>
          {props.lista.map((nombre, i) => {
            return <li key={i}>{nombre}</li>
          })}
        </ul>
      </div>
    </form>
  );
}


export default Lista;