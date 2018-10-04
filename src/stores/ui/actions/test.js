import { expect } from 'chai';

import * as actions from './';

describe('Store: UI Actions', function () {
  const payload = {
    lang: 'en',
    theme: 'dark',
  };

  describe('HIDE_MODAL', function () {
    it('hides the modal', function () {
      expect(actions.hideModal(payload)).to.eql({ type: 'HIDE_MODAL' });
    });
  });

  describe('SHOW_MODAL', function () {
    it('shows the modal', function () {
      expect(actions.showModal(payload)).to.eql({ type: 'SHOW_MODAL', data: payload });
    });
  });

  describe('STORE_METRIC', function () {
    it('stores the ui metric in redux state', function () {
      expect(actions.storeMetric(payload)).to.eql({ type: 'STORE_METRIC', data: payload });
    });
  });

  describe('STORE_UI', function () {
    it('stores the ui in redux state', function () {
      expect(actions.storeUi(payload)).to.eql({ type: 'STORE_UI', data: payload });
    });
  });

  describe('UPDATE_METRIC', function () {
    it('fires off ui metric update in saga', function () {
      expect(actions.updateMetric(payload)).to.eql({ type: 'UPDATE_METRIC', data: payload });
    });
  });

  describe('UPDATE_UI', function () {
    it('fires off ui update in saga', function () {
      expect(actions.updateUi(payload)).to.eql({ type: 'UPDATE_UI', data: payload });
    });
  });
});
