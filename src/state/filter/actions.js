import * as filterTypes from './types'

export function toggleFilter(filter) {
  return  {
    type: filterTypes.Toggle_Filter,
    payload: {
      filter
    }
  }
}