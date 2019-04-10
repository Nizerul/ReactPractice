import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Sergey', hobby: 'computer' },
      { name: 'John', hobby: 'money' }
    ]
  }

  changeInfoHandler = () => {
    return (
      this.setState({
        persons: [
          { name: 'Sergey', hobby: 'sport' },
          { name: 'Pibody', hobby: 'money' }
        ]
      })
    )
  }

  render() {
    return (
      <div className="App">
        <h1>My react app!</h1>
        <p>Hello, my dear friend!</p>
        <button onClick={this.changeInfoHandler}>Change info</button>
        <Person name={this.state.persons[0].name} hobby={this.state.persons[0].hobby} />
        <Person name={this.state.persons[1].name} hobby={this.state.persons[1].hobby}>John is good man!</Person>
      </div>
    );
  }
}

export default App;