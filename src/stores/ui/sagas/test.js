import { put, takeEvery, takeLatest } from 'redux-saga/effects';
import { expect } from 'chai';

import * as actions from '../actions';
import * as sagas from './';

describe('Store: UI Sagas', function () {
  describe('updateMetricSaga', function () {
    it('fires off storeMetric', function () {
      const data = { windowWidth: 69 };
      const gen = sagas.updateMetricSaga({ type: 'UPDATE_METRIC', data });

      expect(gen.next().value).to.eql(put(actions.storeMetric(data)));
      expect(gen.next().value).to.be.undefined;
    });
  });

  describe('updateUiSaga', function () {
    it('fires off storeUi', function () {
      const data = { sidebarOpen: true };
      const gen = sagas.updateUiSaga({ type: 'UPDATE_UI', data });

      expect(gen.next().value).to.eql(put(actions.storeUi(data)));
      expect(gen.next().value).to.be.undefined;
    });
  });

  describe('watchUpdateMetric', function () {
    it('takes UPDATE_METRIC', function () {
      const gen = sagas.watchUpdateMetric();

      expect(gen.next().value).to.eql(takeLatest('UPDATE_METRIC', sagas.updateMetricSaga));
      expect(gen.next().value).to.be.undefined;
    });
  });

  describe('watchUpdateUi', function () {
    it('takes UPDATE_UI', function () {
      const gen = sagas.watchUpdateUi();

      expect(gen.next().value).to.eql(takeEvery('UPDATE_UI', sagas.updateUiSaga));
      expect(gen.next().value).to.be.undefined;
    });
  });
});
