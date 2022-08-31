import { useReducer } from "react";
import "./App.css";
import { UP_ACTION } from "./store/actions/counter-actions";
import counterReducer from "./store/reducers/counter-reducer";

export let initialState = 0; //סטייט התחלתי

function App() {
  // יצירה של סטייט ופונקציית דיספאטצ' בעזרת יוס-רדוסר
  const [myState, dispatch] = useReducer(counterReducer, initialState);
  return (
    <div className="App">
     {myState} {/*הצגת הסטייט במסך */}
     {/*קריאה לפונקציית הדיספאטצ' המשגרת אובייקט אקשן, עם שדה של טייפ */}
      <button onClick={() => dispatch(UP_ACTION)}>up</button>
    </div>
  );
}

export default App;
