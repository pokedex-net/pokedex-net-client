import { expect } from 'chai';

import reducer from './';
import { settingsDefaultState } from '../';

describe('Store: Settings Reducer', function () {
  describe('STORE_SETTINGS', function () {
    it('updates lang', function () {
      const data = { lang: 'es' };
      expect(reducer(settingsDefaultState, { type: 'STORE_SETTINGS', data })).to.eql({ ...settingsDefaultState, ...data });
    });

    it('updates theme', function () {
      const data = { theme: 'light' };
      expect(reducer(settingsDefaultState, { type: 'STORE_SETTINGS', data })).to.eql({ ...settingsDefaultState, ...data });
    });
  });

  describe('default', function () {
    it('returns the state when invalid action is passed', function () {
      expect(reducer(settingsDefaultState, {})).to.eql(settingsDefaultState);
    });

    it('returns the state when no action is passed', function () {
      expect(reducer(settingsDefaultState)).to.eql(settingsDefaultState);
    });

    it('returns the default state when no state is passed', function () {
      expect(reducer(undefined)).to.eql(settingsDefaultState);
    });
  });
});
