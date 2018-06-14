import { all, fork } from 'redux-saga/effects'
import { watchAddTask } from './tasks-saga'

export default function* startForeman() {
  yield all([
    fork(watchAddTask)
  ])
}
