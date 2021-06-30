import { combineReducers } from "redux"
import user from './user_reducer'
import list from './list_reducer'

const rootReducer = combineReducers({
    user,
    list
})

export default rootReducer