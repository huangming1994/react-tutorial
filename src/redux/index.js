import React, { Component, PropTypes } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { add,reduce } from './action'

class Demo extends Component {
  static propTypes = {
    num: PropTypes.number,
    add: PropTypes.func,
    reduce: PropTypes.func,
  }
  render() {
    return (
      <div>
        <input type="button" value="+" onClick={() => this.props.add()} />
        <input type="text" value={this.props.num} />
        <input type="button" value="-" onClick={() => this.props.reduce()} />
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