import * as Types from './types'
import uuidv4 from 'uuid/v4'

function reducer(state, action) {
  switch(action.type) {
    case Types.ADD:
      return state.concat({
        id: uuidv4(),
        title: action.payload.title,
        completed: false
      })
      case Types.TOGGLE_UPDATE_STATUS:
        return state.map((item) => {
          if(item.id === action.payload.id) {
            return { ...item, completed: action.payload.completed }
          } else {
            return item
          }
        })
        case Types.TOGGLE_TITLE:
          return state.map((item) => {
            if(item.id === action.payload.id) {
              return { ...item, title: action.payload.title }
            } else {
              return item
            }
          })
          case Types.REMOVE:
            return state.filter((item) => {
              return item.id !== action.payload.id
          })
            default:
              throw new Error()
  }
}

export default reducer