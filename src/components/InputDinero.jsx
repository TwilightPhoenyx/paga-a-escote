import styles from "./InputDinero.module.css";
import { roundNumber } from "../lib";

function InputDinero({cantidad, setCantidad, texto}) {


    function manejadorIntroducirPago(event){

        const textoAlmacenado = cantidad;

        if (/^[0-9]*\.?[0-9]{0,2}$/.test(event.target.value) === true) {
            setCantidad(event.target.value);
        } 
        else {
            event.target.value = roundNumber(textoAlmacenado,2);
        };  

    };

    return(
        <input className={styles.valorEuros} type="text" maxLength={5} placeholder={texto} 
            onInput={manejadorIntroducirPago}
        />
    );

};

export default InputDinero;