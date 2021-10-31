import React from 'react'
import Task from './Task';

const TaskList = props => {
    const {tasks} = props
    const active = tasks.filter(task => task.active);
    const done = tasks.filter(task => !task.active);
    console.log(active, done)
    

    const activeTasks = active.map(task => <Task key={task.id} task={task} delete={props.delete} change={props.change}/>)
    const doneTasks = done.map(task => <Task key={task.id} task={task} delete={props.delete} change={props.change}/>)

    return(
        <div>
            <div className='active'>
                <h2>Zadania do zrobienia</h2>
                
                {activeTasks.length > 0 ? activeTasks : <p>Brak zadań do wykonania.</p>}
                
            </div>
            <div className='done'>
                <h2>Zadania zrobione <em>{done.length}</em></h2>
                {done.length > 10 && <span style={{fontSize: 10}}>wyświetlonych jest jedynie 10 ostatnich elementów</span>}
                {doneTasks.slice(0, 10)}
                
            </div>
        </div>
    )
}


export default TaskList;