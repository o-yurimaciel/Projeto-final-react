import * as filterTypes from './types'

function reducer(_, action) {
  switch(action.type) {
    case filterTypes.Toggle_Filter:
      return action.payload.filter
      default:
        throw new Error()
  }
}

export default reducer;

