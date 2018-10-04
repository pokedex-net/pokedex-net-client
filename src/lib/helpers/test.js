import sinon from 'sinon';
import { expect } from 'chai';

import { mockStore } from './';

describe('Lib: Helpers', function () {
  const sandbox = sinon.createSandbox();

  afterEach(function () {
    sandbox.restore();
  });

  describe('mockStore', function () {
    const mockState = {
      settings: {},
      ui: {},
    };
    const store = mockStore(mockState);

    it('returns valid fake store results', function () {
      store.dispatch();
      const state = store.getState(mockState);
      store.subscribe();

      expect(state).to.eql(mockState);
    });
  });
});
