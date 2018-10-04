import React from 'react';
import sinon from 'sinon';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { Helmet } from 'react-helmet';

import Connect, { Container } from './';
import Header from '../Header';
import Navigation from '../Navigation';
import Routes from '../Routes';

import { mockStore } from '../../../lib/helpers';

describe('Component: Container', function () {
  const sandbox = sinon.createSandbox();
  const updateMetricSpy = sandbox.spy();
  const addEventListenerSpy = sandbox.spy();
  const removeEventListenerSpy = sandbox.spy();
  const mockProps = {
    headerHeight: 72,
    lang: 'en',
    theme: 'dark',
    updateMetric: updateMetricSpy,
  };
  let wrapper;

  window.addEventListener = addEventListenerSpy;
  window.removeEventListener = removeEventListenerSpy;

  beforeEach(function () {
    wrapper = shallow(<Container { ...mockProps } />);
  });

  afterEach(function () {
    wrapper.unmount();
    updateMetricSpy.resetHistory();
    addEventListenerSpy.resetHistory();
    removeEventListenerSpy.resetHistory();
    sandbox.restore();
  });

  describe('updateWidth', function () {
    it('updates width in Redux', function () {
      wrapper.instance().updateWidth();

      expect(updateMetricSpy).to.have.been.calledTwice;
    });
  });

  describe('render', function () {
    const elements = [
      Helmet,
      Header,
      Navigation,
      'div',
      'main',
      Routes,
      'footer',
    ];

    it('renders correctly', function () {
      elements.forEach(element => expect(wrapper.find(element)).to.have.length(1));
    });

    it('renders rtl', function () {
      wrapper.unmount();

      const props = { ...mockProps, lang: 'ar' };
      wrapper = shallow(<Container { ...props } />);

      elements.forEach(element => expect(wrapper.find(element)).to.have.length(1));
    });

    it('renders light theme', function () {
      wrapper.unmount();

      const props = { ...mockProps, theme: 'light' };
      wrapper = shallow(<Container { ...props } />);

      elements.forEach(element => expect(wrapper.find(element)).to.have.length(1));
    });
  });

  describe('componentDidMount', function () {
    it('adds event listener on resize', function () {
      expect(addEventListenerSpy).to.have.been.calledOnce;
    });
  });

  describe('componentWillUnmount', function () {
    it('removes resize event listener', function () {
      wrapper.unmount();

      expect(removeEventListenerSpy).to.have.been.calledOnce;
    });
  });

  describe('connect', function () {
    const mockState = {
      ui: {
        metrics: {
          headerHeight: 69,
        },
      },
      settings: {
        lang: 'es',
        theme: 'light',
      },
    };

    it('maps state to props correctly', function () {
      wrapper.unmount();
      const routedWrapper = shallow(<Connect store={ mockStore(mockState) } { ...mockProps } />);
      wrapper = shallow(routedWrapper.props().children());
      routedWrapper.unmount();

      expect(wrapper.props().headerHeight).to.equal(mockState.ui.metrics.headerHeight);
      expect(wrapper.props().lang).to.equal(mockState.settings.lang);
      expect(wrapper.props().theme).to.equal(mockState.settings.theme);
    });
  });
});
