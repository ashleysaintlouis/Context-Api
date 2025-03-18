import React from 'react'

import { useContext } from 'react';
import { CounterContext } from '../../context/CounterContext';
import ChangeCounter from '../../component/ChangeCounter'

const About = () => {
  const { counter } = useContext(CounterContext);

  return (
    <div>
      <h1>Sobre</h1>
      <p>Valor do Contador: {counter}</p>
      <ChangeCounter />
    </div>
  )
}

export default About