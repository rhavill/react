import React from 'react';
import defaultProps from 'recompose/defaultProps';

const enhance = defaultProps({ name: 'Ace Stussy' });

const DefaultProps = enhance(({name}) => <div>{name}</div>);
export default DefaultProps;