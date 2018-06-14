import * as actionTypes from '../constants/action-types'

const initialState = {
  tasks: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TASK:
      return state
    default:
      return state
  }
}
