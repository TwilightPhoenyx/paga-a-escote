import styles from "./InputDinero.module.css";

function InputDinero({cantidad, setCantidad, texto}) {


    function manejadorIntroducirPago(event){

        const textoAlmacenado = cantidad;

        if (/^[0-9]*\.?[0-9]{0,2}$/.test(event.target.value) === true) {
            setCantidad(event.target.value);
        } 
        else {
            event.target.value = textoAlmacenado;
        };  

    };

    return(
        <input className={styles.valorEuros} type="text" maxLength={5} placeholder={texto} 
            onInput={manejadorIntroducirPago}
        >
        </input>
    );

};

export default InputDinero;