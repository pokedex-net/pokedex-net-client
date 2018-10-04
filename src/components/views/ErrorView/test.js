import React from 'react';
import sinon from 'sinon';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Connect, { ErrorView } from './';

import { mockStore } from '../../../lib/helpers';

describe('Component: ErrorView', function () {
  const sandbox = sinon.createSandbox();
  const mockProps = {
    error: 'notFound',
    lang: 'en',
  };
  let wrapper;

  beforeEach(function () {
    wrapper = shallow(<ErrorView { ...mockProps } />);
  });

  afterEach(function () {
    wrapper.unmount();
    sandbox.restore();
  });

  describe('render', function () {
    it('renders correctly', function () {
      expect(wrapper.find('h1')).to.have.length(1);
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
