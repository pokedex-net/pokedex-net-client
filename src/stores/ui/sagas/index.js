import _ from 'lodash';
import { fork, put, takeEvery, takeLatest } from 'redux-saga/effects';

import { storeMetric, storeUi } from '../actions';

/**
 * This generator function stores the action data yielded from {@link watchUpdateMetric}.
 * @param {Object} action Redux action
 * @emits {storeMetric}
 */
export function* updateMetricSaga(action) {
  yield put(storeMetric(_.get(action, 'data')));
}

/**
 * This generator function stores the action data yielded from {@link watchUpdateUi}.
 * @param {Object} action Redux action
 * @emits {storeUi}
 */
export function* updateUiSaga(action) {
  yield put(storeUi(_.get(action, 'data')));
}

/**
 * This generator function watchs for the latest {@link updateMetric} call.
 * @emits {updateMetricSaga}
 */
export function* watchUpdateMetric() {
  yield takeLatest('UPDATE_METRIC', updateMetricSaga);
}

/**
 * This generator function watchs for every {@link updateUi} call.
 * @emits {updateUiSaga}
 */
export function* watchUpdateUi() {
  yield takeEvery('UPDATE_UI', updateUiSaga);
}

export default [
  fork(watchUpdateMetric),
  fork(watchUpdateUi),
];
