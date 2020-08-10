import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addNumber, subtractNumber } from '../../actions/mathActions';

class CounterEdit extends Component {
  render() {
    return (
      <div style={{ flex: 1 }} >
        <p>Edit Counter</p>
        <button onClick={() => { this.props.increment() }} >Increase</button>
        <br />
        <button onClick={() => { this.props.decrement() }} >Decrease</button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => {
      dispatch(addNumber(1))
    },
    decrement: () => {
      dispatch(subtractNumber(1))
    }
  }
}

export default connect(null, mapDispatchToProps)(CounterEdit);