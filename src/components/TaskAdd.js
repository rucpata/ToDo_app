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
        const {name, checked, date} = this.state
        if(name.length > 2){
            const add = this.props.add(name, date, checked)
            if(add){
                this.setState({
                    name: '',
                    checked: false,
                    date: this.minDate,
                })
            }
        } else {
            console.log('')
        }
        
    }

    render(){
        let maxDate = this.minDate.slice(0, 4) * 1 + 1
        maxDate = maxDate +  "-12-31"
        return (
            <>
                <h3>dodaj ZADANIE</h3>
                <div className='form'>
                    <input type='text' placeholder='Dodaj nowe zadanie' value={this.state.name} onChange={this.handleName}/>
                    <div className='option'>
                        <label htmlFor='important'>Priorytet</label>
                        <input type='checkbox' checked={this.state.checked} id='important' onChange={this.handelCheckbox}/>
                        <label htmlFor='date'>Do kiedy zrobić</label>
                        <input type='date' value={this.state.date} min={this.minDate} max={maxDate} onChange={this.handelDate}/><br/>
                    </div>
                    <button className='add' onClick={this.handleClick}>Dodaj</button>  
                </div>
            </>
            
        );
    }
}


export default TaskAdd;