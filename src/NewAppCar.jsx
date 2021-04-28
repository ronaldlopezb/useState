import react from 'react'

function NewAppCar() {


    const abrirPuerta = () => {

    }

    const entrarAlAuto = () => {

    }

    const cerrarPuerta = () => {

    }

    const encenderApagarMotor = () => {
        
    }

    return (
        <div>
            <h1>Obtener mi Licencia de Conducir</h1>
            <h3>La puerta del auto se encuentra cerrada</h3>
            <button onClick={abrirPuerta}>Abrir Puerta</button>
            <h4>Estado: Actualmente la puerta está ??</h4>
            
            <hr/>

            <h3>Me encuentro fuera del auto</h3>
            <button onClick={entrarAlAuto}>Entrar al Auto</button>
            <h4>Estado: Actualmente estoy ?? del auto</h4>

            <hr/>

            <h3>La puerta del auto se encuentra abierta</h3>
            <button onClick={cerrarPuerta}>Cerrar la puerta</button>
            <h4>Estado: La puerta está ??</h4>

            <hr/>

            <h3>El motor está apagado</h3>
            <button onClick={encenderApagarMotor}>Encender motor</button>
            <h4>El auto se encuentra ??</h4>

        </div>
    );
}

export default NewAppCar;


//Proceso:
 //1- Abrir puerta del auto
 //2- Entrar al auto
 //3- Cerrar puerta del auto
 //4- Encender motor

 //Condición; ningun paso puede ejecutarse
 //si la anterior no es true