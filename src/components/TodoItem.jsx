import React from 'react'

const TodoItem = ( { todo, toggleTodo }) => {
    const {id, task, complete} = todo;
    
    const handleTodoclick = () => {
        toggleTodo(id);
    }
    return (
        <li>
            <input type="checkbox" checked = {complete} onChange= {handleTodoclick} />
            {task}
        </li>
    )
}

export default TodoItem