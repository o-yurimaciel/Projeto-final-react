import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'

import { AiFillCloseCircle } from 'react-icons/ai'

import './styles.css'

export default function ToDoModal({ onModalClose, onTitleUpdate, todoId, findTitle }) {

  const { getFieldProps, errors, handleSubmit } = useFormik({
    initialValues: {
      title: findTitle(todoId)
    },
    validationSchema: yup.object({
      title: yup.string().required('Campo obrigatório.')
    }),
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: (values, formikBag) => {
      onTitleUpdate(todoId, values.title)
      formikBag.setFieldValue('title', '')
    }
  })

  return (
    <>
    <div className="modal"></div>
    <div className="modal-content">
      <form onSubmit={handleSubmit}>
        <input type="text" 
        placeholder="Novo nome" 
        autoComplete="off"
        {...getFieldProps('title')}/>

        <button>Atualizar tarefa</button>
        <button title="Fechar" className="close" onClick={onModalClose}><AiFillCloseCircle color="white" size={20} /></button>

        {errors.title ? (
          <small>{errors.title}</small>
        ) : null }
      </form>
    </div>
    </>
  )
}
