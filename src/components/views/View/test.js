import React from 'react';
import sinon from 'sinon';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import _ from 'lodash';

import Connect, { View } from './';
import ErrorView from '../ErrorView';

import { mockStore } from '../../../lib/helpers';

describe('Component: View', function () {
  const sandbox = sinon.createSandbox();
  const updateSettingsSpy = sandbox.spy();
  const historyReplaceSpy = sandbox.spy();
  const mockProps = {
    history: {
      replace: historyReplaceSpy,
    },
    lang: 'en',
    location: {
      state: {},
    },
    page: ErrorView,
    updateSettings: updateSettingsSpy,
  };
  let wrapper;

  beforeEach(function () {
    wrapper = shallow(<View { ...mockProps } />);
  });

  afterEach(function () {
    wrapper.unmount();
    updateSettingsSpy.resetHistory();
    historyReplaceSpy.resetHistory();
    sandbox.restore();
  });

  describe('render', function () {
    it('renders correctly', function () {
      expect(wrapper.find(ErrorView)).to.have.length(1);
    });
  });

  describe('componentDidMount', function () {
    it('updates user language from route', function () {
      wrapper.unmount();
      wrapper = shallow(<View { ..._.set(_.cloneDeep(mockProps), 'location.state.prevLang', 'es') } />);

      expect(updateSettingsSpy).to.have.been.calledOnce;
      expect(historyReplaceSpy).to.have.been.calledOnce;
    });

    it('does nothing if there was no lang update from route', function () {
      expect(updateSettingsSpy).to.have.been.not.called;
      expect(historyReplaceSpy).to.have.been.not.called;
    });
  });

  describe('connect', function () {
    const mockState = {
      settings: {
        lang: 'es',
      },
    };

    it('maps state to props correctly', function () {
      wrapper.unmount();
      wrapper = shallow(<Connect store={ mockStore(mockState) } { ...mockProps } />);

      expect(wrapper.props().lang).to.equal(mockState.settings.lang);
    });
  });
});
