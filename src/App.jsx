import { useEffect, useState, useRef } from 'react'
import style from './App.module.css'
import Card from './component/Card'
import Contador from './component/Contador'
import styleCard from './component/Card.module.css'
import mainApi from './component/ApiCountry'


const dataApi = mainApi(6);

//console.log(dataApi + "Hello Word")
let item = 0;
let cardUno = undefined;
let cardDos = undefined;
function App() {
  console.log("- App Montado");
  //console.log(numCards)
  
  function restablecer(){
    window.location.reload();
  }
  const contenedorCartas = useRef();
  function game(cardUno, cardDos){
    let namePaisCardUno = cardUno.children[1].children[0].textContent;
    let namePaisCardDos = cardDos.children[1].children[0].textContent;

    if(namePaisCardUno != namePaisCardDos){
      console.log("Diferentes")
      setTimeout(() => {
        cardUno.classList.remove(styleCard.active)
        cardDos.classList.remove(styleCard.active)

        cardUno.parentNode.style.pointerEvents ="auto";
      }, 1200);
    }else{
      console.log("Iguales")
      cardUno.style.pointerEvents = "none";
      cardDos.style.pointerEvents = "none";
      cardUno.parentNode.style.pointerEvents ="auto";

    }
  }
  function handleOnClickContenedor(e){
    if (e.target.classList.contains(styleCard.card)) {
      e.target.classList.add(styleCard.active);

      if (cardUno === undefined) {
        cardUno = e.target;
      }else if(e.target != cardUno) {
        cardDos = e.target
        e.target.parentNode.style.pointerEvents ="none";
        
        game(cardUno, cardDos);
        cardUno = undefined;
        cardDos = undefined;
      }
    }
  
  }
  
  return (
    <div className={style.contenedor}>
      {console.log("   - App Retornado")}
      <div className={style.contenedorCabezera}>
        <button onClick={restablecer} className={style.button18}>Restablecer</button>
        
      </div>
      <div ref={contenedorCartas} className={style.contenedorCartas} onClick={handleOnClickContenedor}>

          {
            dataApi.map( (data)=>(
              <Card key={data.idd.suffixes+`${item++}`} nameCountry= {data.name.common}imgCountry={data.flags.png} ></Card>
            ))
          }
          <Contador contenedorCartas={contenedorCartas} styleActiveCard={styleCard.active} numCards ={dataApi}></Contador>
        </div>
      
    </div>
  );
}

export default App;
