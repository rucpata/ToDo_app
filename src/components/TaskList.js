import React from 'react'
import Task from './Task';

const TaskList = props => {
    
    const tasks = props.tasks.map(task => <Task key={task.id} task={task} delete={props.delete} change={props.change}/>)

    return(
        <>
        <div className='active'>
            <h2>Zadania do zrobienia</h2>
            {tasks}
        </div>
        <div className='done'>
            <h2>Zadania zrobione</h2>
            {tasks}
        </div>
            
        
        </>
    )
}


export default TaskList;