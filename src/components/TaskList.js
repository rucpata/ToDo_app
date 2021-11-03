import React from 'react'
import Task from './Task';
import './TaskList.css';

const TaskList = props => {
    const {tasks} = props
    const active = tasks.filter(task => task.active);
    const done = tasks.filter(task => !task.active);

    if(active.length >= 2) {
        active.sort((a,b) => {
            a = a.name.toLowerCase();
            b = b.name.toLowerCase();
            if(a < b) return -1;
            if(a > b) return 1;
            return 0
        })
    }
    
    if(done.length >=2){
        done.sort((a,b) => {
            if(a.finishDate > b.finishDate) return -1
            if(a.finishDate < b.finishDate) return 1
            return 0
        })
    }
    
    const activeTasks = active.map(task => <Task key={task.id} task={task} delete={props.delete} change={props.change}/>)
    const doneTasks = done.map(task => <Task key={task.id} task={task} delete={props.delete} change={props.change}/>)

    return(
        <>
            <h1>lista ZADAŃ</h1>
                <div className='taskList'>
                
                <div className='listConteinter'>
                    <h3>zadania DO ZROBIENIA</h3>
                    <div className='active'>
                    {activeTasks.length > 0 ? activeTasks : <p>Brak zadań do wykonania.</p>}
                    </div>
                </div>
                <div className='listConteinter'>
                    <h3>zadania ZROBIONE <em>{done.length}</em></h3>
                    <div className='done'>
                        {done.length > 10 && <span style={{fontSize: 10}}>wyświetlonych jest jedynie 10 ostatnich wykonaych zadań</span>}
                        {doneTasks.length > 0 ? doneTasks.slice(0, 10) : <p>Nie wykonałeś jeszcze żaden zadania</p>}
                        
                    </div>
                </div>
                
            </div>
        </>
    )
        
        
}


export default TaskList;