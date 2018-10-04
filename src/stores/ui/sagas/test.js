import { delay } from 'redux-saga';
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { expect } from 'chai';

import * as actions from '../actions';
import * as sagas from './';

describe('Store: UI Sagas', function () {
  describe('hideModalSaga', function () {
    it('fires off actions to hide modal', function () {
      const gen = sagas.hideModalSaga({ type: 'HIDE_MODAL' });

      expect(gen.next().value).to.eql(put(actions.storeUi({ modalVisible: false })));
      expect(gen.next().value).to.eql(call(delay, 200));
      expect(gen.next().value).to.eql(put(actions.storeUi({ modalContent: null })));
      expect(gen.next().value).to.be.undefined;
    });
  });

  describe('showModalSaga', function () {
    it('fires off actions to show modal', function () {
      const data = 'test';
      const gen = sagas.showModalSaga({ type: 'SHOW_MODAL', data });

      expect(gen.next().value).to.eql(put(actions.storeUi({ modalContent: data })));
      expect(gen.next().value).to.eql(put(actions.storeUi({ modalVisible: true })));
      expect(gen.next().value).to.be.undefined;
    });
  });

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

  describe('watchHideModal', function () {
    it('takes HIDE_MODAL', function () {
      const gen = sagas.watchHideModal();

      expect(gen.next().value).to.eql(takeLatest('HIDE_MODAL', sagas.hideModalSaga));
      expect(gen.next().value).to.be.undefined;
    });
  });

  describe('watchShowModal', function () {
    it('takes SHOW_MODAL', function () {
      const gen = sagas.watchShowModal();

      expect(gen.next().value).to.eql(takeLatest('SHOW_MODAL', sagas.showModalSaga));
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
