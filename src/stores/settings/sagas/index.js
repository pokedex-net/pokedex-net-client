import _ from 'lodash';
import { put, takeEvery, fork } from 'redux-saga/effects';

import { storeSettings } from '../actions';

/**
 * This generator function stores the action data yielded from {@link watchUpdateSettings}.
 * @param {Object} action Redux action
 * @emits {storeSettings}
 */
export function* updateSettingsSaga(action) {
  yield put(storeSettings(_.get(action, 'data')));
}

/**
 * This generator function watchs for every {@link updateSettings} call.
 * @emits {updateSettingsSaga}
 */
export function* watchUpdateSettings() {
  yield takeEvery('UPDATE_SETTINGS', updateSettingsSaga);
}

export default [
  fork(watchUpdateSettings),
];
