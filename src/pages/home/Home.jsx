import React from 'react'

import { useContext } from 'react';
import { CounterContext } from '../../context/CounterContext';

const Home = () => {
  const { counter } = useContext(CounterContext);
  console.log(counter)

  return (
    <div>
      <h1>Inicio</h1>

      <p>Valor do Contador: {counter}.</p>
    </div>
  )
}

export default Home