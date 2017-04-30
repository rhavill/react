import React, { Component } from 'react';

class Row extends Component {

  shouldComponentUpdate(nextProps) {
    const {person} = this.props;
    return nextProps.person !== person;
  }

  render() {
    const {person} = this.props;
    console.log('render Row');
    return (
      <tr>
        <td>{person.firstName}</td>
        <td>{person.lastName}</td>
      </tr>
    );
  }
}

export default Row;
