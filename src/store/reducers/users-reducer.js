import { GET_BY_ID, ADD_USER, UPDATE_USER, DELETE_USER } from '../types/users-types'

export default function usersReducer({ users }, action) {
    switch (action.type) {
        case GET_BY_ID:
            return [...users]
        case ADD_USER:
            return [...users, action.payload]
        case UPDATE_USER:
            let newArray = users.filter((userItem) => {
                userItem.Id == action.payload.Id
            })
            users[users.indexOf(newArray[0])] = action.payload
            return [...users]
        case DELETE_USER:
            newArray = users.filter((userItem) => {
                userItem.Id !== action.payload
            })
            return [...newArray]
        default:
            return { users }
    }

}