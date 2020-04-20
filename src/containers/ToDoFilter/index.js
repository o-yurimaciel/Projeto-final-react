import React, { useContext, useCallback, useState, useEffect } from 'react'
import FilterContext from '../../state/filter/Context'
import * as filterActions from '../../state/filter/actions'

import './styles.css'
import ToDoSelect from './ToDoSelect'

export default function ToDoFilter() {

  const { filter, dispatchToFilter } = useContext(FilterContext)

  const [selectValue, setSelectValue] = useState(filter)

  const filterUpdate = useCallback(
    (filter) => {
      dispatchToFilter(filterActions.toggleFilter(filter))
    },
    [dispatchToFilter],
  )

  const handleOptionChange = useCallback(
    (e) => {
      setSelectValue(e.target.value)
    },
    [setSelectValue],
  )

  useEffect(() => {
    filterUpdate(selectValue)
  }, [filterUpdate, selectValue])

  return (
    <div className="filter-container">
      <div className="filter-wrapper">
        <ToDoSelect 
        value={selectValue} 
        onOptionChange={handleOptionChange}
        options={[
          { value: 'all', title: 'Todas as tarefas'},
          { value: 'todo', title: 'Tarefas ativas'},
          { value: 'done', title: 'Tarefas concluídas'}
        ]}
        />
      </div>
    </div>
  )
}
