import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    usernames: ['Marco', 'Peter'],
  };
  usernameChangeHandler = event => {
    this.setState({
      usernames: [event.target.value, 'Peter'],
    });
  };
  render() {
    return (
      <div className="App">
        <UserInput
          change={this.usernameChangeHandler}
          username={this.state.usernames[0]}
        />
        <UserOutput username={this.state.usernames[0]} />
        <UserOutput username={this.state.usernames[1]} />
      </div>
    );
  }
}

export default App;
