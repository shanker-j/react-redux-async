import React, { Component } from 'react';
import { connect } from 'react-redux';

import { ping, pong } from '../../actions/pingPongActions';

class PingPongEdit extends Component {
  render() {
    return (
      <div style={{ flex: 1 }} >
        <p>Edit</p>
        <button onClick={() => { this.props.ping() }} >Ping</button>
        <br />
        <button onClick={() => { this.props.pong() }} >Pong</button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    ping: () => {
      dispatch(ping())
    },
    pong: () => {
      dispatch(pong())
    }
  }
}

export default connect(null, mapDispatchToProps)(PingPongEdit);