import React, { Component } from 'react';
import people from './people'
import Rows from './Rows';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {count: 0};
    this.increment = this.increment.bind(this);
  }

  increment() {
    this.setState({count: this.state.count + 1});
  }

  render() {
    const persons = people;
    return (
      <div>
        <button onClick={this.increment}>{this.state.count}</button>
        <table>
          <thead>
            <tr><th>First Name</th><th>Last Name</th></tr>
          </thead>
          <Rows people={persons} />
        </table>
      </div>
    );
  }
}

export default App;
