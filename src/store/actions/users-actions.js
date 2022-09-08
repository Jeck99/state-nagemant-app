import { ADD_USER,UPDATE_USER } from '../types/users-types'

export const addUser = (newUser) => {
    return { type: ADD_USER, payload: newUser }
}
export const updateUser = (someUser) => {
    return { type: UPDATE_USER, payload: someUser }
}