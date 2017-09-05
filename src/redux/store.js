import { createStore, combineReducers } from 'redux'
import { numReducer } from './reducer'

const reducers = combineReducers({
  num: numReducer,
})
export const store = createStore(reducers)
