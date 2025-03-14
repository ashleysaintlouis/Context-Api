// Criar context

import { Children, createContext, useState } from "react";

const CounterContext = createContext();
export { CounterContext };

// Criar provider 
export const CounterContextProvider = ({children}) => {
    const [counter, setCounter] = useState(5);
    
    return (
        <CounterContext.Provider value={{counter, setCounter}}>
            {children}
        </CounterContext.Provider>
    )
}