import React from 'react';
import sinon from 'sinon';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Button from '../../controls/Button';
import Connect, { HomeView } from './';

import { mockStore } from '../../../lib/helpers';

describe('Component: HomeView', function () {
  const sandbox = sinon.createSandbox();
  const updateSettingsSpy = sandbox.spy();
  const mockProps = {
    lang: 'en',
    theme: 'dark',
    updateSettings: updateSettingsSpy,
  };
  let wrapper;

  beforeEach(function () {
    wrapper = shallow(<HomeView { ...mockProps } />);
  });

  afterEach(function () {
    wrapper.unmount();
    updateSettingsSpy.resetHistory();
    sandbox.restore();
  });

  describe('render', function () {
    it('renders correctly', function () {
      expect(wrapper.find('h1')).to.have.length(1);
    });

    it('handles lang change', function () {
      wrapper.find(Button).at(0).simulate('click');

      expect(updateSettingsSpy).to.have.been.calledOnce;
    });

    it('handles lang change reset', function () {
      wrapper.unmount();

      const props = { ...mockProps, lang: 'ar' };
      wrapper = shallow(<HomeView { ...props } />);

      wrapper.find(Button).at(0).simulate('click');

      expect(updateSettingsSpy).to.have.been.calledOnce;
    });

    it('handles theme change to light', function () {
      wrapper.find(Button).at(1).simulate('click');

      expect(updateSettingsSpy).to.have.been.calledOnce;
    });

    it('handles theme change to dark', function () {
      wrapper.unmount();

      const props = { ...mockProps, theme: 'light' };
      wrapper = shallow(<HomeView { ...props } />);

      wrapper.find(Button).at(1).simulate('click');

      expect(updateSettingsSpy).to.have.been.calledOnce;
    });
  });

  describe('connect', function () {
    const mockState = {
      settings: {
        lang: 'es',
        theme: 'light',
      },
    };

    it('maps state to props correctly', function () {
      wrapper.unmount();
      wrapper = shallow(<Connect store={ mockStore(mockState) } { ...mockProps } />);

      expect(wrapper.props().lang).to.equal(mockState.settings.lang);
      expect(wrapper.props().theme).to.equal(mockState.settings.theme);
    });
  });
});
