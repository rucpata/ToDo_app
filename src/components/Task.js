import React from 'react'
import './Task.css'

const Task = props => {

    const {name, date, id} = props.task
    // const {delete, change} = props
    return(
        <>
        <div className='task'>
            <h3 className='taskname'>{name}</h3>
            <div className='taskrest'>
                <p>Zrobić do: {date}</p>
                <button onClick={() => props.change(id)}>Zostało zrobione</button>
                <button onClick={() => props.delete(id)}>X</button>
            </div>
        </div>
        </>
        
    )
}

export default Task;