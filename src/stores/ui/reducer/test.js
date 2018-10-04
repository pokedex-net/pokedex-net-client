import React from 'react';
import { expect } from 'chai';

import reducer from './';
import { uiDefaultState } from '../';

describe('Store: UI Reducer', function () {
  describe('STORE_METRIC', function () {
    it('updates headerHeight', function () {
      const data = { headerHeight: <div /> };
      expect(reducer(uiDefaultState, { type: 'STORE_METRIC', data })).to.eql({ ...uiDefaultState, metrics: { ...uiDefaultState.metrics, ...data } });
    });

    it('updates windowWidth', function () {
      const data = { windowWidth: true };
      expect(reducer(uiDefaultState, { type: 'STORE_METRIC', data })).to.eql({ ...uiDefaultState, metrics: { ...uiDefaultState.metrics, ...data } });
    });
  });

  describe('STORE_UI', function () {
    it('updates modalContent', function () {
      const data = { modalContent: <div /> };
      expect(reducer(uiDefaultState, { type: 'STORE_UI', data })).to.eql({ ...uiDefaultState, ...data });
    });

    it('updates modalVisible', function () {
      const data = { modalVisible: true };
      expect(reducer(uiDefaultState, { type: 'STORE_UI', data })).to.eql({ ...uiDefaultState, ...data });
    });

    it('updates sidebarOpen', function () {
      const data = { sidebarOpen: true };
      expect(reducer(uiDefaultState, { type: 'STORE_UI', data })).to.eql({ ...uiDefaultState, ...data });
    });
  });

  describe('default', function () {
    it('returns the state when invalid action is passed', function () {
      expect(reducer(uiDefaultState, {})).to.eql(uiDefaultState);
    });

    it('returns the state when no action is passed', function () {
      expect(reducer(uiDefaultState)).to.eql(uiDefaultState);
    });

    it('returns the default state when no state is passed', function () {
      expect(reducer(undefined)).to.eql(uiDefaultState);
    });
  });
});
