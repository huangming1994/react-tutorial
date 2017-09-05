import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import './index.css'
import App from './App'
import Demo from './redux'
import { store } from './redux/store'

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <Demo/>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker();
