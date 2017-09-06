import { applyMiddleware } from 'redux'
// thunk中间件(函数action)
export function thunk({ dispatch, getState }) {
  return next => action => {
    if (action && typeof action === 'function') {
      return dispatch(action(getState()))
    }
    return next(action)
  }
}
// promise中间件(promise action)
export function promise({ dispatch }) {
  return next => action => {
    if (action && typeof action.then === 'function') {
      const resolve = (input) => dispatch(input)
      return action.then(resolve).catch(resolve)
    }
    return next(action)
  }
}

// 数组中间件(多个action的数组)
export function multiDispatch({ dispatch }) {
  return next => actions => {
    if (Array.isArray(actions)) {
      return actions.map((action) => dispatch(action))
    }
    return next(actions)
  }
}

// logger中间件
export function logger({ getState }) {
  return next => action => {
    console.log('prev state', getState())
    console.log('action', action)
    const nextState = next(action)
    console.log('next state', getState())
    return nextState
  }
}
export default applyMiddleware(
  multiDispatch,
  promise,
  thunk,
  logger,
)