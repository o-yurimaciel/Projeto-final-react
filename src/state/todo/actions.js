import * as Types from './types'

export function add(title) {
  return {
    type: Types.ADD,
    payload: {
      title
    }
  }
}

export function updateStatus(id, completed) {
  return {
    type: Types.TOGGLE_UPDATE_STATUS,
    payload: {
      id: id,
      completed: completed
    }
  }
}

export function updateTitle(id, title) {
  return {
    type: Types.TOGGLE_TITLE,
    payload: {
      id, 
      title
    }
  }
}

export function remove(id) {
  return {
    type: Types.REMOVE,
    payload: {
      id
    }
  }
}

