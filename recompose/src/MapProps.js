import React from 'react';
import mapProps from 'recompose/mapProps';

const upperProps = mapProps(props => {
  const newProps = {};
  Object.keys(props).forEach(
    prop =>
      newProps[prop] = typeof props[prop] === 'string'
        ? props[prop].toUpperCase() : props[prop]
  );
  return newProps;
});

const MapProps = upperProps(({name}) => <div>{name}</div>);
export default MapProps;