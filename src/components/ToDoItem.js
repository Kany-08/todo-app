import React from 'react'

export default function ToDoItem(props) {
    return (
        <div className='todo-item'>
            <p>{props.todo.text}</p>
            <div className='actions'>
                <button className='btn' onClick={()=>props.updateTask(props.todo.id)}>&#10004;</button>
            </div>
        </div>
    )
}
