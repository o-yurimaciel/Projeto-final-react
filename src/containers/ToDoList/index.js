import React, { useContext, useEffect, useCallback, useState } from 'react'
import TodoContext from '../../state/todo/Context'
import FilterContext from '../../state/filter/Context'
import * as todosActions from '../../state/todo/actions'

import './styles.css'
import TodoItem from '../../components/TodoItem'
import ToDoModal from '../ToDoModal'    

import SwitchFilter from '../../utils/SwitchFilter'

export default function ToDoList() {

  const { todos, dispatchToTodos } = useContext(TodoContext)

  const [showModal, setShowModal] = useState(false)
  const [currentId, setCurrentId] = useState(null)

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

  const handleModalOpen = useCallback(
    (id) => {
      setCurrentId(id)
      setShowModal(true)
    },
    [],
  )

  const handleModalClose = useCallback(
    () => {
      setShowModal(false)
    },
    [],
  )

  const handleUpdateTitle = useCallback(
    (id, title) => {
      dispatchToTodos(todosActions.updateTitle(id, title))
    },
    [dispatchToTodos],
  )

  const getTitle = useCallback(
    (id) => {
      const currentTitle = todos.find(todo => todo.id === id).title
      return currentTitle
    },
    [todos],
  )

  const { filter } = useContext(FilterContext)

  return (
    <div className="wrapper-list">
      <ul>
        {SwitchFilter(todos, filter).map(todo => (
          <TodoItem 
            title={todo.title} 
            key={todo.id}
            id={todo.id} 
            completed={todo.completed}
            onDelete={handleDelete} 
            onStatusUpdate={handleUpdate}
            onModalOpen={handleModalOpen}
          />
        ))}

        {showModal && ( 
        <ToDoModal 
          todoId={currentId}
          onModalClose={handleModalClose} 
          onTitleUpdate={handleUpdateTitle} 
          findTitle={getTitle}
        />)}
      </ul>
    </div>
  )
}
