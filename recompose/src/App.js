import React, { Component } from 'react';
import people from './people'
import Rows from './Rows';
import WithState from './WithState';
import WithReducer from './WithReducer';
import ComponentFromProp from './ComponentFromProp';
import DefaultProps from './DefaultProps';
import MapProps from './MapProps';
import WithProps from './WithProps';
import WithPropsOnChange from './WithPropsOnChange';

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
    return (
      <div>
        <h4>withState</h4>
        <WithState/>
        <h4>withReducer</h4>
        <WithReducer/>
        <h4>componentFromProp</h4>
        <ComponentFromProp component={() => <div>hello</div>}/>
        <h4>defaultProps</h4>
        <DefaultProps/>
        <h4>mapProps</h4>
        <MapProps name='elmer'/>
        <h4>withProps</h4>
        <WithProps name='Dolly'/>
        <h4>withPropsOnChange</h4>
        <WithPropsOnChange name='Larry' count={this.state.count} />
        <h4>pure</h4>
        <button onClick={this.increment}>{this.state.count}</button>
        <table>
          <thead>
            <tr><th>First Name</th><th>Last Name</th></tr>
          </thead>
          <Rows people={people} />
        </table>
      </div>
    );
  }
}

export default App;
