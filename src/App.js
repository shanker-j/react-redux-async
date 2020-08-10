import React, { Component } from 'react';
import { connect } from 'react-redux';

import UserDetails from './app/component/UserDetails';
import Counter from './app/component/CouterView';
import PingPongView from './app/component/PingPongView';

import UserEdit from './app/container/UserEdit';
import CounterEdit from './app/container/CounterEdit';
import PingPongEdit from './app/container/PingPongEdit';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>Redux Thunk and Redux Promise</p>
        <div style={{ display: 'flex', alignItems: 'center' }} >
          <UserDetails username={this.props.user.name} age={this.props.user.age} />
          <UserEdit />
        </div>
        <p>Redux Saga</p>
        <div style={{ display: 'flex', alignItems: 'center' }} >
          <Counter count={this.props.math.result} />
          <CounterEdit />
        </div>
        <p>Redux Observable</p>
        <div style={{ display: 'flex', alignItems: 'center' }} >
          <PingPongView isPing={this.props.ping.isPing} />
          <PingPongEdit />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    math: state.math,
    ping: state.pingPong
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);


