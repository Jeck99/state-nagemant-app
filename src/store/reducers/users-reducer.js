import { GET_BY_ID, ADD_USER, UPDATE_USER, DELETE_USER } from '../types/users-types'

export default function usersReducer(state = [] , action) {
    switch (action.type) {
        case GET_BY_ID:
            return state = [...state]
        case ADD_USER:
            console.log("k");
            return [...state, action.payload]
        case UPDATE_USER:
            let newArray = state
            state.filter((userItem) => {
                userItem.Id == action.payload.Id
            })
            state[state.indexOf(newArray[0])] = action.payload;
            return {state:[...state]}
        case DELETE_USER:
            let newUsersArray = state.filter((userItem) => {
                userItem.Id !== action.payload
            })
            return newUsersArray
        // return newUsersArray
        default:
            return state
    }

}