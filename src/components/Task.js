import React from 'react';
import './Task.css';
import trash from './img/trash.png';
import done from './img/done.png';



const Task = props => {

    // const styleH = {
    //     borderRadius: '25px',
    //     backgroundColor: 'red',
    // }

    // style={important ? style : null}
    // style={important ? style : null}
    const {name, date, id, active, important, finishDate} = props.task
    // const {delete, change} = props
    const priority = important ? <p className='priority priorityH'>HIGH PRIORITY</p> : <p className='priority priorityL'>LOW PRIORITY</p>

    if(active){
        return(
            <>
                <div className='task'>
                    <div className='taskHeader'>
                        {priority}
                        <div>
                            <img alt='done'src={done} onClick={() => props.change(id)}/>
                            <img alt='trash' src={trash} onClick={() => props.delete(id)}/>
                        </div>
                    </div>
                    
                    <h3 className='taskname'>{name}</h3>
                    <div className='taskdate'>
                        <p>Zrobić do: {date}</p>                        
                    </div>
                </div>
            </>
        )
    } else {
        const finishTime = new Date(finishDate).toLocaleString()
        
        return (
            <>
                <div className='task' >
                    <div className='taskHeader'>
                        {priority}
                        <div>
                            <img alt='trash' src={trash} onClick={() => props.delete(id)}/>
                        </div>
                    </div>
                    <h3 className='taskname'>{name}</h3>
                    <div className='taskdate'>
                        {/* <p>Zrobić do: {date}</p> */}
                        <p>Wykonane: {finishTime}</p>
                    </div>
                </div>
            </>
        )   
    }
}

export default Task;