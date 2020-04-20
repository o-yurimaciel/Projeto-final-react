import React, { useState, useEffect, useCallback } from 'react';

import { FaTrash, FaEdit } from 'react-icons/fa'

import styles from './styles.module.css'

export default function TodoItem({ title, id, onDelete, completed, onStatusUpdate, onModalOpen }) {

  const [checked, setChecked] = useState(completed)

  const handleChange = (e) => {
    setChecked(e.target.checked)
  }

  useEffect(() => {
    onStatusUpdate(id, checked)
  }, [onStatusUpdate, id, checked])

  const handleClickDelete = useCallback(
    () => {
      onDelete(id)
    },
    [onDelete, id],
  )

  const handleClickUpdate = useCallback(
    () => {
      onModalOpen(id)
    },
    [onModalOpen, id],
  )

  return (
    <li>
      <span className={completed ? styles.completed : null}>{title}</span>
      <div>
        <button title="Atualizar" onClick={handleClickUpdate}> <FaEdit color="white" size={18} /></button>
        <input 
        title={!completed ? "Concluir tarefa" : "Desmarcar tarefa"} 
        type="checkbox" 
        checked={checked} 
        onChange={handleChange} 
        />
        <button title="Excluir" onClick={handleClickDelete}> <FaTrash color="white" size={18} /></button>
      </div>
    </li>
  );
}
