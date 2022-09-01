import "./NumberInput.css";
import { useContext } from "react";
import { counterContext } from "../../../contexts/Counter-context";
import { updateCounterAction } from "../../../store/actions/counter-actions";
import { useState } from "react";
function NumberInput() {
  const { counterState, dispatch } = useContext(counterContext);
  const [num,setNum] =useState(counterState);

  return (
    <div className="number-input">
      <label htmlFor="">Please Enter a Number</label>
      <input value={num} type="number" onChange={(e)=>setNum(e.target.value)}/>
      <button onClick={() => dispatch(updateCounterAction(num))}>update</button>
    </div>
  );
}

export default NumberInput;
