import { GET_USER, CREATE_USER } from './user-types'

const getUserAction = () => {
    return { type: GET_USER }
}

const createUserAction = (userObj) => {
    return { type: CREATE_USER, payload: userObj }
}