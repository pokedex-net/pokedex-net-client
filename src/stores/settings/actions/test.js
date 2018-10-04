import { expect } from 'chai';

import * as actions from './';

describe('Store: Settings Actions', function () {
  const payload = {
    lang: 'en',
    theme: 'dark',
  };

  describe('STORE_SETTINGS', function () {
    it('stores the settings in redux state', function () {
      expect(actions.storeSettings(payload)).to.eql({ type: 'STORE_SETTINGS', data: payload });
    });
  });

  describe('UPDATE_SETTINGS', function () {
    it('fires off settings update in saga', function () {
      expect(actions.updateSettings(payload)).to.eql({ type: 'UPDATE_SETTINGS', data: payload });
    });
  });
});
