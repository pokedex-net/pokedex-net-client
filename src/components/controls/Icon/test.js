import _ from 'lodash';
import React from 'react';
import anime from 'animejs';
import sinon from 'sinon';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';

import Icon from './';

import logo from '../../../fixtures/icons/logo';
import menu from '../../../fixtures/icons/menu';

describe('Component: Icon', function () {
  const sandbox = sinon.createSandbox();
  const animeRemoveSpy = sandbox.spy(anime, 'remove');
  const mockProps = {
    headerHeight: 72,
    hover: false,
    icon: logo,
    morph: menu,
  };
  let wrapper;

  beforeEach(function () {
    wrapper = shallow(<Icon { ...mockProps } />);
  });

  afterEach(function () {
    wrapper.unmount();
    animeRemoveSpy.resetHistory();
    sandbox.restore();
  });

  describe('animate', function () {
    it('morphs correctly', function () {
      wrapper.unmount();
      wrapper = mount(<Icon { ...mockProps } />);

      wrapper.instance().animate();
      expect(animeRemoveSpy).to.have.been.calledOnce;
    });
  });

  describe('render', function () {
    const elements = [
      'svg',
    ];

    it('renders correctly', function () {
      elements.forEach(element => expect(wrapper.find(element)).to.have.length(1));
    });
  });

  describe('componentDidUpdate', function () {
    it('morphs correctly', function () {
      wrapper.unmount();
      wrapper = mount(<Icon { ...mockProps } />);
      const animateSpy = sandbox.spy(wrapper.instance(), 'animate');

      wrapper.setProps({ hover: true });
      expect(animateSpy).to.have.been.calledThrice;

      animateSpy.resetHistory();

      wrapper.setProps({ hover: false });
      expect(animateSpy).to.have.been.calledThrice;

      animateSpy.resetHistory();

      wrapper.setProps({ hover: false });
      expect(animateSpy).to.not.have.been.called;

      animateSpy.restore();
    });

    it('doesn\'t morph if no prop is set', function () {
      wrapper.unmount();
      wrapper = shallow(<Icon { ..._.omit(mockProps, 'morph') } />);
      const animateSpy = sandbox.spy(wrapper.instance(), 'animate');

      wrapper.setProps({ hover: true });
      expect(animateSpy).to.not.have.been.called;

      animateSpy.restore();
    });
  });
});
