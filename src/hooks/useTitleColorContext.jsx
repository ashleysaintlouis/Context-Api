import React, { useContext } from 'react';
import { TitleColorContext } from '../context/TitleColorContext';

export const useTitleColorContext = () => {
  const context = useContext(TitleColorContext);
  
  if (!context) {
    console.error("Contexto não encontrado!");
    return null; 
  }

  return context;
};
