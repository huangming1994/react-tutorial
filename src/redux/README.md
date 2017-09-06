# Redux

### redux是什么
redux 是 JavaScript 状态容器，提供可预测化的状态管理。  
redux是单向数据流，架构图如下：  
![image](https://github.com/huangming1994/react-tutorial/blob/master/src/images/redux.png?raw=true)

### 目录结构
```
- redux
    | - action.js  action文件
    | - index.js  // 一个整合了redux流程的demo
    | - middleware.js  中间件
    | - README.md 
    | - reducer.js  reducer文件
    | - store.js    生成store
```

### 概念介绍
#### Action
通俗的说，action就是一个对象，一个符合FSA（Flux Standard Action）的action有以下特点： 
 
 必须：  
 * 是一个 javascript 对象。  
 * type字段，用来描述 action 的类型。
 
 可选：  
 * payload 字段，用来传递 action 携带的东西。
 * error 字段，用来描述错误信息。
 * meta 字段，用来携带 payload 额外的东西。
 
 一个正常的 action 看起来像这样：
 ```javascript
 function addTodo(payload) {
    return { type: 'ADD_TODO', payload }
 }
    
 store.dispatch(addTodo('go shopping')) // { type: 'ADD_TODO', payload: 'go shopping' }
```
 
 #### Reducer
 Action只是描述了有事情发生了这一事实，并没有指明应用如何更新 state。而这正是 reducer 要做的事情。
 reducer 就是一个纯函数，接收旧的 state 和 action，返回新的 state。  
 
 `(prevState, action) => nextState`  
 
 由于reducer是纯函数，所以一定要切记不要在reducer中有以下操作：
 * 修改传入参数。
 * 执行有副作用的操作，如 API 请求和路由跳转。
 * 调用非纯函数，如 Date.now() 或 Math.random()。
 * 不要直接修改 state，每次返回新的 state 。
 * 碰到未知类型的 action，一定要返回旧的 state。
 
 一个正常的reducer看起来像这样：
 ```javascript
 const initialState = {
  todo: [], // 添加的待办事项
 }
 
 function todoReducer(state = initialState, action) {
    switch (action.type) {
      case 'ADD_TODO':
        return { ...state, todo: [ ...state.todo, action.payload ] }
      default:
        return state
    }
 }
```

#### Store
 action 来描述“发生了什么”，reducer 来根据 action 更新 state，store 就是把它们联系到一起的对象，整个应用就是靠store来共享数据，通过 createStore 来创建store对象。  
 ```javascript
export default function createStore(reducer, initialState) {
  // ...
  return {
    dispatch,
    subscribe,
    getState,
    replaceReducer
  }
}
```
 * store.dispatch(action)：分发action
 * store.subscribe(listener)：注册listener，store里面state发生改变后，执行该listener
 * store.getState()：读取store里面的state
 * store.replaceReducer(nextReducer)： 替换reducer，改变state修改的逻辑
 
 创建一个store对象如下：
   ```javascript
const store = createStore(reducers, preloadedState, enhancer)
```
* reducers：总的reducers，开始讲到reducer的时候，还记得每个页面都有个reducer，那如果有十个页面，就有十个reducer，但是createStore的第一个参数只能是一个总的reducers,所以我们得合并每个页面的reducer，别担心，redux提供了combineReducers方法，返回的reducers就是createStore的第一个参数。
像这样：
```javascript
const reducers = combineReducers({
  page1: reducer1,
  page2: reducer2,
  // ......
  page9: reducer9,
  page10: reducer10
})
```
* preloadedState：第二个参数是可选的，初始状态对象，可以很随意指定，比如服务端渲染的初始状态，但是如果使用combineReducers来生成reducers，那必须保持状态对象的key和combineReducers中的key相对应。
* enhancer：第三个参数是store的增强器函数，可以指定为第三方的中间件，时间旅行，持久化等等，但是这个函数只能用redux提供的applyMiddleware函数来生成，在稍后的middleware中会讲到。
