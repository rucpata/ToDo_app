import React, { Component } from 'react'
import TaskAdd from './TaskAdd';
import TaskList from './TaskList';

import './App.css';

class App extends Component {

  state = {
    tasks: [
      {
        id: 0,
        name: 'Ogarnąć się przed końcem świata. Ogarnąć się przed końcem świata.',
        date: '2020-02-20',
        important: true,
        active: true,
        finishDate: null
      },
      {
        id: 1,
        name: 'Kupić kota',
        date: '2020-02-20',
        important: true,
        active: true,
        finishDate: null
      },
    ]
  }

  deleteTask = (id) => {
    console.log('detele' + id)
  }

  changeTaskStatus = (id) => {
    console.log('change' + id)
  }

  render(){
    return (
      <div className="App">
        TODO APP
        <TaskAdd />
        <TaskList tasks={this.state.tasks} delete={this.deleteTask} change={this.changeTaskStatus}/>
      </div>
    );
  }
  
}

export default App;
