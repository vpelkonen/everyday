import * as actionTypes from '../constants/action-types'

export const addTask = (content) => ({
  type: actionTypes.ADD_TASK,
  content
})
