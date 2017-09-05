import { createStore, combineReducers } from 'redux'
import { numReducer } from './reducer'
import enhancer from './middleware'

const reducers = combineReducers({
  num: numReducer,
})
export const store = createStore(reducers, undefined, enhancer)
