import React, { useContext, useEffect, useRef } from 'react';
import { useFormik } from 'formik';
import TodoContext from '../../state/todo/Context'
import * as todosActions from '../../state/todo/actions'
import * as yup from 'yup'

import './styles.css'

export default function ToDoCreator() {

  const { todos, dispatchToTodos } = useContext(TodoContext)

  const { getFieldProps, errors, handleSubmit } = useFormik({
    initialValues: {
      title: ''
    },
    validateOnChange: false,
    validateOnBlur: false,
    validationSchema: yup.object({
      title: yup.string().required('Campo obrigatório.')
    }),
    onSubmit: (values, formikBag) => {
      dispatchToTodos(todosActions.add(values.title))
      formikBag.setFieldValue('title', '');
      inputTitle.current.focus()
    }
  })

  const inputTitle = useRef(null)

  useEffect(() => {
    inputTitle.current.focus()
  }, [inputTitle])

  return (
    <div className="wrapper">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <input type="text" 
          placeholder="Nome da Tarefa" 
          autoComplete="off"
          {...getFieldProps('title')}
          ref={inputTitle}/>

          <button>Adicionar tarefa</button>

          {errors.title ? (
            <small>{errors.title}</small>
          ) : null }
        </form>
      </div>
    </div>
  );
}
