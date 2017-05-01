import React from 'react';
import pure from 'recompose/pure';

const Row = ({person}) => {
  console.log('render Row');
  return (
    <tr>
      <td>{person.firstName}</td>
      <td>{person.lastName}</td>
    </tr>
  );
};

export default pure(Row);
