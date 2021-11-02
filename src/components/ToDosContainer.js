import React from 'react';
import ToDoItem from './ToDoItem';

export default class ToDosContainer extends React.Component {

    state={
        inputValue:''
    }

    getInputValue=(e)=> {
        this.setState({inputValue: e.target.value}) 
    }

    addNewTask=(e)=>{
        e.preventDefault()
        if(this.state.inputValue.trim()!==''){
            this.props.addTask(this.state.inputValue)
            this.setState({inputValue:''})
        } else {
            alert('please add wright something in input field')
        }
    }

    render(){

        return (

            <div className='todos-container'>
                
                <form className='todo-form' onSubmit={this.addNewTask}>
                    <label className='input-item'> 
                       <input type='text' name='todo' value={this.state.inputValue} onChange={this.getInputValue}/> 
                    </label>
                    <input type="submit" className="btn" value='ADD'/>
                </form>
    
                <div className="todos">
                    <h3>To Do</h3>
                    {this.props.todos.map(todo=>{
                        return(
                            <ToDoItem key={todo.id} todo={todo} updateTask={this.props.updateTask}/>
                        )
                    })}
                </div>
            </div>
        )
    }
    
}
