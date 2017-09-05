import React, { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { add,reduce } from './action'

class Demo extends Component {
  render() {
    return (
      <div>
        <input type="button" value="+"/>
        <input type="text" value={}/>
        <input type="button" value="-"/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    num: state.num,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    add: compose(dispatch, add),
    reduce: compose(dispatch, reduce),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Demo)