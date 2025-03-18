import React from 'react'

/* import { useContext } from 'react';
import { CounterContext } from '../../context/CounterContext'; */
// Refatorando useContext usando hook
import ChangeCounter from '../../component/ChangeCounter'
import { useCounterContext } from '../../hooks/useCounterContext'
import { useTitleColorContext } from '../../hooks/useTitleColorContext'


// Context mais complexo
const { color } = useTitleColorContext();


const Home = () => {
  //const { counter } = useContext(CounterContext);
  const { counter } = useCounterContext()

  return (
    <div>
      <h1 style={{color: color}}>Inicio</h1>
      <p>Valor do Contador: {counter}</p>
      <ChangeCounter />
    </div>
  )
}

export default Home