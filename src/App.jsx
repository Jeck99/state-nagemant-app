import { useReducer } from "react";
import "./App.css";
import { counterDownAction, counterResetAction, counterUpAction, updateCounterAction } from "./store/actions/counter-actions";
import counterReducer from "./store/reducers/counter-reducer";

export let initialState = 0; //סטייט התחלתי

function App() {
  // יצירה של סטייט ופונקציית דיספאטצ' בעזרת יוס-רדוסר
  const [myState, dispatch] = useReducer(counterReducer, initialState);
  return (
    <div className="App">
     {myState} {/*הצגת הסטייט במסך */}
     {/*קריאה לפונקציית הדיספאטצ' המשגרת אובייקט אקשן, עם שדה של טייפ */}
      <button onClick={() => dispatch(counterUpAction())}>up</button>
      <button onClick={() => dispatch(counterDownAction())}>down</button>
      <button onClick={() => dispatch(counterResetAction())}>reset</button>
      <button onClick={() => dispatch(updateCounterAction(7))}>update</button>
    </div>
  );
}

export default App;
