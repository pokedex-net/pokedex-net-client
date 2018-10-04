import React from 'react';
import sinon from 'sinon';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Connect, { Styles } from './';

import { mockStore } from '../../../lib/helpers';

describe('Component: Styles', function () {
  const sandbox = sinon.createSandbox();
  const mockProps = {
    theme: 'dark',
  };
  let wrapper;

  beforeEach(function () {
    wrapper = shallow(<Styles { ...mockProps } />);
  });

  afterEach(function () {
    wrapper.unmount();
    sandbox.restore();
  });

  describe('render', function () {
    it('renders correctly', function () {
      expect(wrapper.children()).to.have.length(1);
    });
  });

  describe('connect', function () {
    const mockState = {
      settings: {
        theme: 'light',
      },
    };

    it('maps state to props correctly', function () {
      wrapper.unmount();
      wrapper = shallow(<Connect store={ mockStore(mockState) } { ...mockProps } />);

      expect(wrapper.props().theme).to.equal(mockState.settings.theme);
    });
  });
});
