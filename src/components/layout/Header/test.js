import React from 'react';
import sinon from 'sinon';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Connect, { Header } from './';
import Button from '../../controls/Button';
import HeaderShape from './HeaderShape';

import { mockStore } from '../../../lib/helpers';

describe('Component: Header', function () {
  const sandbox = sinon.createSandbox();
  const mockProps = {
    headerHeight: 72,
  };
  let wrapper;

  beforeEach(function () {
    wrapper = shallow(<Header { ...mockProps } />);
  });

  afterEach(function () {
    wrapper.unmount();
    sandbox.restore();
  });

  describe('render', function () {
    const elements = [
      'header',
      HeaderShape,
      Button,
    ];

    it('renders correctly', function () {
      elements.forEach(element => expect(wrapper.find(element)).to.have.length(1));
    });
  });

  describe('connect', function () {
    const mockState = {
      ui: {
        metrics: {
          headerHeight: 69,
        },
      },
    };

    it('maps state to props correctly', function () {
      wrapper.unmount();
      wrapper = shallow(<Connect store={ mockStore(mockState) } { ...mockProps } />);

      expect(wrapper.props().headerHeight).to.equal(mockState.ui.metrics.headerHeight);
    });
  });
});
