import React from 'react';
import sinon from 'sinon';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Connect, { HeaderShape } from './';

import { mockStore } from '../../../../lib/helpers';

describe('Component: HeaderShape', function () {
  const sandbox = sinon.createSandbox();
  const mockProps = {
    headerHeight: 72,
    lang: 'en',
    windowWidth: 1280,
  };
  let wrapper;

  beforeEach(function () {
    wrapper = shallow(<HeaderShape { ...mockProps } />);
  });

  afterEach(function () {
    wrapper.unmount();
    sandbox.restore();
  });

  describe('render', function () {
    const elements = [
      'svg',
      'path',
    ];

    it('renders correctly', function () {
      elements.forEach(element => expect(wrapper.find(element)).to.have.length(1));
    });

    it('renders rtl', function () {
      wrapper.unmount();

      const props = { ...mockProps, lang: 'ar' };
      wrapper = shallow(<HeaderShape { ...props } />);

      elements.forEach(element => expect(wrapper.find(element)).to.have.length(1));
    });

    it('renders minimum curve distance', function () {
      wrapper.unmount();

      const props = { ...mockProps, windowWidth: 69 };
      wrapper = shallow(<HeaderShape { ...props } />);

      elements.forEach(element => expect(wrapper.find(element)).to.have.length(1));
    });
  });

  describe('connect', function () {
    const mockState = {
      settings: {
        lang: 'es',
      },
      ui: {
        metrics: {
          headerHeight: 69,
          windowWidth: 69,
        },
      },
    };

    it('maps state to props correctly', function () {
      wrapper.unmount();
      wrapper = shallow(<Connect store={ mockStore(mockState) } { ...mockProps } />);

      expect(wrapper.props().headerHeight).to.equal(mockState.ui.metrics.headerHeight);
      expect(wrapper.props().lang).to.equal(mockState.settings.lang);
      expect(wrapper.props().windowWidth).to.equal(mockState.ui.metrics.windowWidth);
    });
  });
});
