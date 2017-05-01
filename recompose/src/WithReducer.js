import React from 'react';
import withReducer from 'recompose/withReducer';

const counterReducer = (count, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return count + 1;
    case 'DECREMENT':
      return count - 1;
    default:
      return count;
  }
};

const enhance = withReducer('counter', 'dispatch', counterReducer, 0);
const WithReducer = enhance(({ counter, dispatch }) =>
  <div>
    Count: {counter}
    <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
    <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
  </div>
);

export default WithReducer;