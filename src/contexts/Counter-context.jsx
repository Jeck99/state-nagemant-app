import { createContext,useReducer } from "react";
import counterReducer from '../store/reducers/counter-reducer'
export const counterContext = createContext()

export default function CounterProvider({children}){
  // יצירה של סטייט ופונקציית דיספאטצ' בעזרת יוס-רדוסר
  const [counterState, dispatch] = useReducer(counterReducer, 99);
    return (
        <counterContext.Provider value={{counterState, dispatch}}>
            {children}
        </counterContext.Provider>
    )
}