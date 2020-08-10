import React, { Component } from "react";
import { connect } from "react-redux";

import { setName, setAge } from '../../actions/userActions';

class UserEdit extends Component {
  render() {
    return (
      <div style={{ flex: 1 }} >
        <p style={{ margin: '0px' }} >Edit User Name</p>
        <button onClick={() => this.props.setName("Andy")} >Change Name</button>
        <br />
        <button onClick={() => this.props.setAge(2)} >Change Age</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    setName: (name) => {
      dispatch(setName(name));
    },
    setAge: (age) => {
      dispatch(setAge(age));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserEdit);