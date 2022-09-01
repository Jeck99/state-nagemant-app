import "./Counter.css";
import { useContext } from "react";
import { counterContext } from "../../../contexts/Counter-context";
import {counterDownAction,counterResetAction,counterUpAction} from '../../../store/actions/counter-actions'
function Counter() {
  const {counterState, dispatch} = useContext(counterContext)
  return (
    <div className="counter">
      <h1>Counter</h1>
      {counterState} {/*הצגת הסטייט במסך */}
     {/*קריאה לפונקציית הדיספאטצ' המשגרת אובייקט אקשן, עם שדה של טייפ */}
      <button onClick={() => dispatch(counterUpAction())}>up</button>
      <button onClick={() => dispatch(counterDownAction())}>down</button>
      <button onClick={() => dispatch(counterResetAction())}>reset</button>
    </div>
  );
};

export default Counter;
