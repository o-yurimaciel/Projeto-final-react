import React, { useContext, useEffect, useCallback } from 'react'
import TodoContext from '../../state/todo/Context'
import * as todosActions from '../../state/todo/actions'

import './styles.css'
import TodoItem from '../../components/TodoItem'

export default function ToDoList() {

  const { todos, dispatchToTodos } = useContext(TodoContext)

  const handleDelete = id => {
    dispatchToTodos(todosActions.remove(id))
  }

  useEffect(() => {
    console.log(todos)
  }, [todos])

  const handleUpdate = useCallback(
    (id, completed) => {
      dispatchToTodos(todosActions.updateStatus(id, completed))
    },
    [dispatchToTodos],
  )

  return (
    <div className="wrapper-list">
      <ul>
        {todos.map(todo => (
          <TodoItem 
          title={todo.title} 
          key={todo.id}
          id={todo.id} 
          completed={todo.completed}
          onDelete={() => handleDelete(todo.id)} 
          onStatusUpdate={handleUpdate}
          />
        ))}
      </ul>
    </div>
  )
}
