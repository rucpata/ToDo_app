import React from 'react'
import './Task.css'


const Task = props => {

    const style = {
        border: '3px red solid',
    }

    const {name, date, id, active, important, finishDate} = props.task
    // const {delete, change} = props

    if(active){
        return(
            <>
                <div className='task' style={important ? style : null}>
                    <h3 className='taskname'>{name}</h3>
                    <div className='taskrest'>
                        <p>Zrobić do: <br/>{date}</p>
                        <button onClick={() => props.change(id)}>Zostało zrobione</button>
                        <button onClick={() => props.delete(id)}>X</button>
                        
                    </div>
                </div>
            </>
        )
    } else {
        const finishTime = new Date(finishDate).toLocaleString()
        return (
            <>
                <div className='task' style={important ? style : null}>
                    <h3 className='taskname'>{name}</h3>
                    <div className='taskrest'>
                        <p>Zrobić do: <br/>{date}</p>
                        <p>Potwierdzenie wykonania: {finishTime}</p>
                        <button onClick={() => props.delete(id)}>X</button>
                    </div>
                </div>
            </>
        )   
    }
}

export default Task;