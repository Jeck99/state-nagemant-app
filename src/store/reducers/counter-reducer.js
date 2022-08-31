import { UP_ACTION } from "../actions/counter-actions";
export default function counterReducer (state, action) {
    //פונקציית רדוסר עם מנגנון סוויצ' קייס
    switch (
      action.type // התייחסות לטייפ בתוך אובייקט האקשן
    ) {
      case UP_ACTION.type: // מקרה של קידום הסטייט ב 1 אם הטייפ שווה לאפ
        return state + 1;
      default:
        return state;
    }
  };