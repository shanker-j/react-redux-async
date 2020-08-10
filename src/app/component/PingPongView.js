import React from 'react';

const PingPongView = (props) => {
  return (
    <div style={{ flex: 1 }} >
      <p>Is Ping: {props.isPing.toString()}</p>
    </div>
  )
}

export default PingPongView;