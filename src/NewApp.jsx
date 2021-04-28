import React, { useState } from 'react';

function NewApp() {

  //Creare un estado para el Mensaje del motor
  const [motor, setMotor] = useState(false);

  //función para el boton
  const encenderApagar = () => {
    //console.log("Estoy presionando el boton de Encender o Apagar motor")
    setMotor (!motor)
  }
  
    return (
      <div>
        <h3>El motor está: {motor ? "Encendido" : "Apagado"}</h3>
        <input type ="checkbox" checked={motor} onChange = {encenderApagar} />
        {motor ? "Apagar Motor" : "Encender Motor"}
        
        <br /><br />
        <button onClick={encenderApagar}>
            {motor ? "Apagar Motor" : "Encender Motor"}
        </button>
      </div>
    );
  }
  
  export default NewApp;
