import { DOWN_COUNTER, RESET_COUNTER, UPDATE_COUNTER, UP_COUNTER } from "../actions/counter-types";
export default function counterReducer(state=0, action) {
  //פונקציית רדוסר עם מנגנון סוויצ' קייס
  switch (
  action.type // התייחסות לטייפ בתוך אובייקט האקשן
  ) {
    case UP_COUNTER: // מקרה של קידום הסטייט ב 1 אם הטייפ שווה לאפ
      return state + 1;
    case DOWN_COUNTER: // מקרה של חיסור הסטייט ב 1 
      return state - 1;
    case RESET_COUNTER: //מקרה של איפוס הסטייט 
      return 0;
    case UPDATE_COUNTER:
      return action.payload
    default:
      return state;
  }
};