import React from 'react';
import withProps from 'recompose/withProps';

const withAddress = withProps(props => ({address: '100 N Main St'}));

const WithProps = withAddress(({name, address}) => <div>{name} {address}</div>);
export default WithProps;