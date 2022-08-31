import { useReducer } from "react";
import "./App.css";
import Home from "./components/pages/Home/Home";

let initialState = 0; //סטייט התחלתי

const reducer = (state, action) => {
  //פונקציית רדוסר עם מנגנון סוויצ' קייס
  switch (
    action.type // התייחסות לטייפ בתוך אובייקט האקשן
  ) {
    case "UP": // מקרה של קידום הסטייט ב 1 אם הטייפ שווה לאפ
      return state + 1;
    default:
      return state;
  }
};
function App() {
  // יצירה של סטייט ופונקציית דיספאטצ' בעזרת יוס-רדוסר
  const [myState, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
     {myState} {/*הצגת הסטייט במסך */}
     {/*קריאה לפונקציית הדיספאטצ' המשגרת אובייקט אקשן, עם שדה של טייפ */}
      <button onClick={() => dispatch({ type: "UP" })}>up</button>
    </div>
  );
}

export default App;
