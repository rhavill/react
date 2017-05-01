import React from 'react';
import Row from './Row';

const Rows = ({people}) => {
  console.log('render Rows');
  return (
    <tbody>
    {people.map((person, i) => (
      <Row key={i} person={person} />
    ))}
    </tbody>
  );
};

export default Rows;
