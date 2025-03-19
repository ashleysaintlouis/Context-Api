import React from 'react'

/* import { useContext } from 'react';
import { CounterContext } from '../../context/CounterContext'; */
// Refatorando useContext usando hook
import ChangeCounter from '../../component/ChangeCounter'
import { useCounterContext } from '../../hooks/useCounterContext'
import { useTitleColorContext } from '../../hooks/useTitleColorContext'


// Context mais complexo
const Home = () => {
  //const { counter } = useContext(CounterContext);
  const { counter } = useCounterContext()
  const context = useTitleColorContext();
  const { color, dispatch } = context;

  // Alterando state complexo
  const setTitleColor = (color) => {
    dispatch({ type: color });
  }

  return (
    <div>
      <h1 style={{color: color}}>Inicio</h1>
      <p>Valor do Contador: {counter}</p>
      <ChangeCounter />
      {/* Alterando contexto complexo */}
      <div>
        <button onClick={() => setTitleColor("RED")}>Vermelho</button>
        <button onClick={() => setTitleColor("BLUE")}>Azul</button>
        <button onClick={() => setTitleColor("BLACK")}>Preto</button>

      </div>
    </div>
  )
}

export default Home