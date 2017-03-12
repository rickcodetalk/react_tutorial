import {actionTypes} from '../actions/actionTypes'

export function people(state = initialState, action) {

    switch(action.type) {

        case actionTypes.ADD_PERSON:

            return [...state, action.person]

        default:
            return state
    }
}