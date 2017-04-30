import React, { Component } from 'react';
import Row from './Row';

class Rows extends Component {

  render() {
    const {people} = this.props;
    console.log('render Rows');

    return (
      <tbody>
      {people.map((person, i) => (
        <Row key={i} person={person} />
      ))}
      </tbody>
    );
  }
}

export default Rows;
