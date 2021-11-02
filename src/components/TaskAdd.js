import React, { Component } from 'react';
import './TaskAdd.css';

class TaskAdd extends Component {

    minDate = new Date().toISOString().slice(0, 10)
    state = {
        name: '',
        checked: false,
        date: this.minDate,
    }

    handleName = e => {
        this.setState({
            name: e.target.value
        })
    }

    handelCheckbox = e => {
        this.setState({
            checked: e.target.checked
        })
    }

    handelDate = e => {
        this.setState({
            date: e.target.value
        })
    }

    handleClick = () => {
        
    }

    render(){
        let maxDate = this.minDate.slice(0, 4) * 1 + 1
        maxDate = maxDate +  "-12-31"
        return (
            <div className='form'>
                <input type='text' placeholder='Dodaj zadanie' value={this.state.name} onChange={this.handleName}/>
                <input type='checkbox' checked={this.state.checked} id='important' onChange={this.handelCheckbox}/>
                <label htmlForm='important'>Priorytet</label><br/>
                <label htmlForm='date'>Do kiedy zrobić</label>
                <input type='date' value={this.state.date} min={this.minDate} max={maxDate} onChange={this.handelDate}/><br/>
                <button onClick={this.handleClick}>Dodaj</button>  
            </div>
        );
    }
}


export default TaskAdd;