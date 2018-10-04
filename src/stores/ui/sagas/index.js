import _ from 'lodash';
import { delay } from 'redux-saga';
import { call, fork, put, takeEvery, takeLatest } from 'redux-saga/effects';

import { storeMetric, storeUi } from '../actions';

/**
 * This generator function hides the modal.
 * @emits {storeUi}
 */
export function* hideModalSaga() {
  yield put(storeUi({ modalVisible: false }));
  yield call(delay, 200);
  yield put(storeUi({ modalContent: null }));
}

/**
 * This generator function shows the modal with action data yielded from {@link watchShowModal}.
 * @param {Object} action Redux action
 * @emits {storeUi}
 */
export function* showModalSaga(action) {
  yield put(storeUi({ modalContent: _.get(action, 'data') }));
  yield put(storeUi({ modalVisible: true }));
}

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
 * This generator function watchs for the latest {@link hideModal} call.
 * @emits {hideModalSaga}
 */
export function* watchHideModal() {
  yield takeLatest('HIDE_MODAL', hideModalSaga);
}

/**
 * This generator function watchs for the latest {@link showModal} call.
 * @emits {showModalSaga}
 */
export function* watchShowModal() {
  yield takeLatest('SHOW_MODAL', showModalSaga);
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
  fork(watchHideModal),
  fork(watchShowModal),
  fork(watchUpdateMetric),
  fork(watchUpdateUi),
];
