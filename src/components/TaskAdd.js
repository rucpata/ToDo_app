import React, { Component } from 'react';
import './TaskAdd.css';

class TaskAdd extends Component {
    state = {
        name: '',
        checked: false,
        date: '2021-11-01'
    }

    handleChange = e => {

    }

    render(){
        return (
            <div className='form'>
                <input type='text' placeholder='Dodaj zadanie' value={this.state.name}/>
                <input type='checkbox' checked={this.state.checked} id='important'/>
                <label htmlForm='important'>Priorytet</label><br/>
                <label htmlForm='date'>Do kiedy zrobić</label>
                <input type='date' value={this.state.date} min='2021-11-01' max='2022-12-31'/><br/>
                <button>Dodaj</button>
            </div>
        );
    }
}


export default TaskAdd;