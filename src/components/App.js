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
    // const tasks = [...this.state.tasks]
    // const index = tasks.findIndex(task => task.id === id)
    // tasks.splice(index, 1)
    // this.setState({
    //   tasks
    // })

    let tasks = [...this.state.tasks];
    tasks = tasks.filter(task => task.id !== id);
    this.setState({
      tasks
    })
  }

  changeTaskStatus = (id) => {
    // let tasks = Array.from(this.state.tasks);
    const tasks = [...this.state.tasks];
    tasks.forEach(task => {
      if(task.id === id){
        task.active = false;
        task.finishDate = new Date().getTime()
      }
    })

    this.setState({
      tasks
    })
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
