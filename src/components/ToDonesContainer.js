import React from 'react'
import ToDoneItem from './ToDoneItem'

export default function ToDonesContainer(props) {
  
    return (
        <div className='todones-container'>
          <h3>BACKLOG</h3>  
          {props.todones.map(todone=>{
            return(
              <ToDoneItem key={todone.id} todone={todone} updateTask={props.updateTask} deleteTask={props.deleteTask}/>
            )
          })}
        </div>
    )
}
