import React from 'react'
import ReactDOM from 'react-dom'

const arr = [
  <h1>这是h1</h1>,
  <h2>这是h2</h2>,
]
ReactDOM.render(
  <div>{arr}</div>,
  document.getElementById('root')
)

// 这个一般应用场景为抽取公共组件，抽取的都是同级的标签，这时候语法上外层需要一个wrapper，但是又有点多余，就可以放在数组里。

const arr1 = (
  <div>   // 如果外层不包div，语法会报错，但是包了div虽然结果是可以，但是结构上其实是有变化的
    <p>p1</p>
    <p>p2</p>
  </div>
)

const dom1 = (
  <div>
    <h1>h1</h1>
    {arr1}
    <h2>h2</h2>
  </div>
)

const arr2 = [  // 这时候就可以用数组的写法，jsx会展开数组的每一项
  <p>p1</p>,
  <p>p2</p>
]

const dom2 = (
  <div>
    <h1>h1</h1>
    {arr2}
    <h2>h2</h2>
  </div>
)
