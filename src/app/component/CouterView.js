import React from 'react';

const Counter = (props) => {
  return (
    <div style={{ flex: 1 }} >
      <p>Count: {props.count}</p>
    </div>
  );
}
export default Counter;