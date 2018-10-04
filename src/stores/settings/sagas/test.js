import { put, takeEvery } from 'redux-saga/effects';
import { expect } from 'chai';

import * as actions from '../actions';
import * as sagas from './';

describe('Store: Settings Sagas', function () {
  describe('updateSettingsSaga', function () {
    it('fires off storeSettings', function () {
      const data = { lang: 'es' };
      const gen = sagas.updateSettingsSaga({ type: 'UPDATE_SETTINGS', data });

      expect(gen.next().value).to.eql(put(actions.storeSettings(data)));
      expect(gen.next().value).to.be.undefined;
    });
  });

  describe('watchUpdateSettings', function () {
    it('takes UPDATE_SETTINGS', function () {
      const gen = sagas.watchUpdateSettings();

      expect(gen.next().value).to.eql(takeEvery('UPDATE_SETTINGS', sagas.updateSettingsSaga));
      expect(gen.next().value).to.be.undefined;
    });
  });
});
