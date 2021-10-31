import React, { Component } from 'react'

import './App.css';
import TaskAdd from './TaskAdd';
import TaskList from './TaskList';

class App extends Component {
  render(){
    return (
      <div className="App">
        TODO APP
        <TaskAdd/>
        <TaskList/>
      </div>
    );
  }
  
}

export default App;
