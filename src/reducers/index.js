import { combineReducers } from 'redux'
import tasksReducer from './tasks-reducer'

const rootReducer = combineReducers({
  tasksState: tasksReducer
})

export default rootReducer
