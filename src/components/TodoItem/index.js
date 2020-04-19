import React, { useState, useEffect } from 'react';

import { FaTrash } from 'react-icons/fa'

export default function TodoItem({ title, id, onDelete, completed, onStatusUpdate }) {

  const [checked, setChecked] = useState(completed)

  const handleChange = (e) => {
    setChecked(e.target.checked)
  }

  useEffect(() => {
    onStatusUpdate(id, checked)
  }, [onStatusUpdate, id, checked])

  return (
    <li>
      {title}
      <div>
        <input type="checkbox" value={checked} onChange={handleChange} />
        <button onClick={onDelete}><FaTrash color="white" size={16} /></button>
      </div>
    </li>
  );
}
