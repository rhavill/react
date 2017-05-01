import React from 'react';
import withPropsOnChange from 'recompose/withPropsOnChange';
/*
 withPropsOnChange(
 shouldMapOrKeys: Array<string> | (props: Object, nextProps: Object) => boolean,
 createProps: (ownerProps: Object) => Object
 ): HigherOrderComponent
 */
const withAddress = withPropsOnChange(['count'], props => {
  console.log('withAddress', props);
  return {address: '100 N Main St'}
});

const WithPropsOnChange = withAddress(({name, address, count}) => {
  console.log('WithPropsOnChange name', name, 'address', address, 'count', count);
  return <div>{name} {address} {count}</div>;
});
export default WithPropsOnChange;