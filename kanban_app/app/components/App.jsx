import React from 'react';
import Notes from './Notes';

export default class App extends React.Component {
  render() {
    var notes = [{
      task: 'Learn some webpack'
    }, {
      task: 'Learn React'
    }, {
      task: 'Do laundry'
    }];

    return (
      <div>
        <button onClick={() => this.addItem()}>+</button>
        <Notes items={notes} />
      </div>
    );
  }
  addItem() {
    console.log('add item');
  }
}

