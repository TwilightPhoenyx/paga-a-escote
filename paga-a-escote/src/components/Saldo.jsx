import { useState } from "react";
import { useEffect } from "react";
import styles from "./Saldo.module.css";
import SmileHappy from "../images/SmileHappy.png";
import SmileNerveus from "../images/SmileNerveus.png";
import SmileWorry from "../images/SmileWorry.png";


function Saldo ({saldo}) {

    let [imagen, setImagen] = useState();
    let [color, setColor] = useState();
    let [textoAlt, setTextoAlt] = useState("");



   useEffect(() => {

        if (saldo === 0) {
        setImagen(SmileHappy)
        setColor(styles.RedColor)
        setTextoAlt("Smily feliz")
        }      // El smile ha pagado
        else if (saldo >0) {
        setImagen(SmileNerveus)
        setColor(styles.GreenColor)
        setTextoAlt("Smily sorprendido")
        }  // El smile recibe el pago
        else {
        setImagen(SmileWorry)
        setColor(styles.BlueColor)
        setTextoAlt("Smily preocupado")
        }  // El smile tiene que pagar

   },
   [saldo]
   )

   

 

   return(
        <div>
            
            <p className={color}> Saldo {saldo.toFixed(2)}</p>

           
            <img src={imagen} alt={textoAlt}/>
        </div>
    );
    
};

export default Saldo;