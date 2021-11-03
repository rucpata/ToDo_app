import React, { Component } from 'react'
import TaskAdd from './TaskAdd';
import TaskList from './TaskList';
import Footer from './Footer';
// import bgim from './img/bgim.png';
import './App.css';



class App extends Component {

  counter = 2;
  state = {
    tasks: [
      {
        id: 0,
        name: 'Ogarnąć się przed końcem świata. Ogarnąć się przed końcem świata.',
        date: '2020-02-20',
        important: false,
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
    let tasks = Array.from(this.state.tasks);
    // const tasks = [...this.state.tasks];
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

  taskAdd = (name, date, important) => {
    const task = {
        id: this.counter,
        name,//tekst z inputa
        date,//tekst z inputa
        important, //checked z inputa 
        active: true,
        finishDate: null
    }
    this.counter++

    this.setState(prevState => ({
      tasks: [...prevState.tasks, task]
    }))
    return true
  }

  render(){
    return (
      <div className="App" >
        <h1>Aplikacja ToDo</h1>
        <TaskAdd add={this.taskAdd}/>
        <TaskList tasks={this.state.tasks} delete={this.deleteTask} change={this.changeTaskStatus}/>
        <Footer/>
      </div>
    );
  }
}

export default App;
