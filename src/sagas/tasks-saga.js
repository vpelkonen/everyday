import { put, takeEvery } from 'redux-saga/effects'

import * as actionTypes from '../constants/action-types'

export function* watchAddTask() {
  yield takeEvery(actionTypes.ADD_TASK, addTaskSaga)
}

function* addTaskSaga() {
  try {
    yield put({ type: actionTypes.DUMMY })
  } catch (error) {
    yield put({ type: actionTypes.DUMMY })
  }
}
