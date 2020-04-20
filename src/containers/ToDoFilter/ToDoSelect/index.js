import React from 'react'

import './styles.css'

export default function ToDoSelect({ value, onOptionChange, options }) {
  return (
    <select className="select" value={value} onChange={onOptionChange}>
      {options.map((option) => {
        return <option value={option.value}>{option.title}</option>
      })}
    </select>
  )
}
