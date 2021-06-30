import {
    INSERT_LIST,
}from '../_actions/types'

export default function (state = {}, action){
    switch(action.type){
        case INSERT_LIST:
            return { ...state, listSuccess: action.payload }
            break
        default:
            return state;
    }
}