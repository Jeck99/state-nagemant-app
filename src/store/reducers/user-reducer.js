import {CREATE_USER} from '../actions/user-types'

export default function userReducer(state,action){
    switch (action.type) {
        case CREATE_USER:
            return action.payload

        default:
            return state
    }

}