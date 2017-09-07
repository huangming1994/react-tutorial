import React from 'react'
import ReactDOM from 'react-dom'

const pattern = 1 + 1 > 2 ? '大于2' : '小于2'

ReactDOM.render(
  <div>{pattern}</div>,
  document.getElementById('root')
)