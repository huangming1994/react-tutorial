# react-redux
#### react-redux是什么？
在redux中提到过，光有redux还不够，不能和react结合起来，react-redux相当于一个桥梁，才能让两边相通。
通俗点说，单独的react组件相当于一个"傻瓜"（拿不到store数据）组件，只有经过react-redux提供provider和connect连接的组件，就会变成"聪明"（可以拿到store数据）组件。

### API
`<Provider>`   

属性：
* store  全局唯一的store对象
* children  被provider组件包裹的子组件

Provider组件可以让所有经过connect()的组件都能拿到store对象，一般会把应用的根组件包在Provider下。  
没有provider之前的写法：
```javascript
import React from 'react'
import ReactDOM from 'react-dom'
import App from 'App'
  
ReactDOM.render(
  <App />, // App是根组件，APP下的子组件都是拿不到store的
  document.getElementById('root')
)
```
经过provider之后的写法：
```javascript
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './App'
import reducers from './reducers'
  
const store = createStore(reducers)
ReactDOM.render(
  <Provider store={store}>   // 经过Provider组件包装后的App根组件，下面的子组件都能拿到store共享的数据。
    <App />
  </Provider>,
  document.getElementById('root')
)
```