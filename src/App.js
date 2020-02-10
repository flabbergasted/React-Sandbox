import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Fancy from './Buttons/Fancy'
import ClickList from './ClickList';
import EntryDisplay from './Input/EntryDisplay';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <EntryDisplay></EntryDisplay>
          <Fancy></Fancy>
          <ClickList></ClickList>
        </header>
      </div>
    );
  }
}

export default App;
