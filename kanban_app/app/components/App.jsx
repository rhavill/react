import React from 'react';
import Notes from './Notes';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [{
        task: 'Learn some webpack'
      }, {
        task: 'Learn React'
      }, {
        task: 'Do laundry'
      }
      ]
    };
  }
  render() {
    var notes = this.state.notes;

    return (
      <div>
        <button onClick={() => this.addItem()}>+</button>
        <Notes items={notes} onEdit={(i, task) => this.itemEdited(i, task)}/>
      </div>
    );
  }

  itemEdited(i, task) {
    var notes = this.state.notes;

    notes[i].task = task;

    this.setState({
      notes: notes
    });
  }

  addItem() {
    this.setState({
      notes: this.state.notes.concat([{
        task: 'New task'
      }])
    });
  }
}

