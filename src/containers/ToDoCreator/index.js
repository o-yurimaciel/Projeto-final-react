import React, { useContext, useEffect } from 'react';
import { useFormik } from 'formik';
import TodoContext from '../../state/todo/Context'
import * as todosActions from '../../state/todo/actions'

import './styles.css'

export default function ToDoCreator() {

  const { todos, dispatchToTodos } = useContext(TodoContext)

  useEffect(() => {
    console.log(todos)
  }, [todos])

  const formik = useFormik({
    initialValues: {
      title: ''
    },
    onSubmit: (values) => {
      dispatchToTodos(todosActions.add(values.title))
    }
  })

  return (
    <div className="wrapper">
      <div className="container">
        <form onSubmit={formik.handleSubmit}>
          <input type="text" 
          placeholder="Nome da Tarefa" 
          autoComplete="off"
          {...formik.getFieldProps('title')}/>

          <button>Adicionar tarefa</button>
        </form>
      </div>
    </div>
  );
}
