import { UPDATE_COUNTER, UP_COUNTER,DOWN_COUNTER,RESET_COUNTER } from "./counter-types"

export const counterUpAction = () => {
    return { type: UP_COUNTER }
}
export const counterDownAction = () => {
    return { type: DOWN_COUNTER }
}
export const counterResetAction = () => {
    return { type: RESET_COUNTER }
}
export const updateCounterAction = (newNumber)=>{
    return {type:UPDATE_COUNTER,payload:newNumber}
}
