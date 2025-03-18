import React from 'react'
import { createContext } from 'react'
import { TitleColorContext } from '../context/TitleColorContext'


export const useTitleColorContext = () => {
    const context = createContext(TitleColorContext)
  return context
}

