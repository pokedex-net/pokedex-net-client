import React from 'react';
import sinon from 'sinon';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { expect } from 'chai';
import { mount } from 'enzyme';

import { Routes } from './';
import ErrorView from '../../views/ErrorView';
import HomeView from '../../views/HomeView';

import { mockStore } from '../../../lib/helpers';

describe('Component: Routes', function () {
  const sandbox = sinon.createSandbox();
  const mockProps = {
    location: {
      pathname: '/',
      state: {},
    },
  };
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
  let wrapper;

  afterEach(function () {
    sandbox.restore();
  });

  describe('render', function () {
    it('renders home view correctly', function () {
      wrapper = mount(<Provider store={ mockStore(mockState) }>
        <MemoryRouter initialEntries={['/']}>
          <Routes {...mockProps} />
        </MemoryRouter>
      </Provider>);

      expect(wrapper.find(HomeView)).to.have.length(1);

      wrapper.unmount();
    });

    it('renders error view correctly', function () {
      wrapper = mount(<Provider store={ mockStore(mockState) }>
        <MemoryRouter initialEntries={['/blah/blah']}>
          <Routes {...mockProps} />
        </MemoryRouter>
      </Provider>);

      expect(wrapper.find(ErrorView)).to.have.length(1);

      wrapper.unmount();
    });
  });
});
