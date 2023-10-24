import { useEffect, useState, useRef } from 'react';
import style from './Contador.module.css'

function Contador({contenedorCartas, styleActiveCard, numCards}) {
    console.log("- Contador Montado");

    const [ contador, setContador] = useState(5);
    const contenedorContador = useRef();

    useEffect(() => {

        contenedorCartas.current.style.pointerEvents ="none";
        
    }, []);

    useEffect(() => {
        const intervalo = setInterval(() => {
            if (contador > 0) {
                setContador(contador-1);
            }else{
                contenedorCartas.current.style.pointerEvents ="auto";
                contenedorContador.current.style.display = "none"

                const cards = Array.from(contenedorCartas.current.children)
                cards.map( (card)=>{
                    card.classList.remove(styleActiveCard)
                })
                clearInterval(intervalo);
            }
        }, 1000);
        
        return ()=>{clearInterval(intervalo)}
    }, [contador]);
    return (  
        <>
            {console.log("   - Contador Retornado")}
            <div ref={contenedorContador} className={style.contenedorContador}>

                <span className={style.contador}>{contador}</span>

            </div>
            
        </>
    );
}

export default Contador;