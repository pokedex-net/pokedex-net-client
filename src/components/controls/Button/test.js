import _ from 'lodash';
import React from 'react';
import sinon from 'sinon';
import { Link } from 'react-router-dom';
import { expect } from 'chai';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { shallow } from 'enzyme';

import Connect, { Button } from './';

import logo from '../../../fixtures/icons/logo';
import menu from '../../../fixtures/icons/menu';
import { mockStore } from '../../../lib/helpers';

describe('Component: Button', function () {
  const sandbox = sinon.createSandbox();
  const onMouseOutSpy = sandbox.spy();
  const onMouseOverSpy = sandbox.spy();
  const mockProps = {
    lang: 'en',
    theme: 'dark',
    onMouseOut: onMouseOutSpy,
    onMouseOver: onMouseOverSpy,
  };
  let wrapper;

  beforeEach(function () {
    wrapper = shallow(<Button { ...mockProps } />);
  });

  afterEach(function () {
    wrapper.unmount();
    onMouseOutSpy.resetHistory();
    onMouseOverSpy.resetHistory();
    sandbox.restore();
  });

  describe('onMouseOut', function () {
    it('calls prop function and sets state', function () {
      wrapper.setState({ hover: true }, () => {
        wrapper.find('button').simulate('mouseOut');

        expect(onMouseOutSpy).to.have.been.calledOnce;
        expect(wrapper.state().hover).to.be.false;
      });
    });

    it('does\'nt call prop function and sets state', function () {
      wrapper.unmount();
      wrapper = shallow(<Button { ..._.omit(mockProps, 'onMouseOut') } />);

      wrapper.setState({ hover: true }, () => {
        wrapper.find('button').simulate('mouseOut');

        expect(onMouseOutSpy).to.not.have.been.called;
        expect(wrapper.state().hover).to.be.false;
      });
    });
  });

  describe('onMouseOver', function () {
    it('calls prop function and sets state', function () {
      expect(wrapper.state().hover).to.be.false;

      wrapper.find('button').simulate('mouseOver');

      expect(onMouseOverSpy).to.have.been.calledOnce;
      expect(wrapper.state().hover).to.be.true;
    });

    it('does\'nt call prop function and sets state', function () {
      wrapper.unmount();
      wrapper = shallow(<Button { ..._.omit(mockProps, 'onMouseOver') } />);

      expect(wrapper.state().hover).to.be.false;

      wrapper.find('button').simulate('mouseOver');

      expect(onMouseOutSpy).to.not.have.been.called;
      expect(wrapper.state().hover).to.be.true;
    });
  });

  describe('render', function () {
    it('renders correctly', function () {
      expect(wrapper.find('button')).to.have.length(1);
    });

    it('renders rtl', function () {
      wrapper.unmount();

      const props = { ...mockProps, lang: 'ar' };
      wrapper = shallow(<Button { ...props } />);

      expect(wrapper.find('button')).to.have.length(1);
    });

    it('renders dark icon color', function () {
      wrapper.unmount();
      wrapper = shallow(<Button { ...mockProps } kind="flat" theme="light" />);

      expect(wrapper.find('button')).to.have.length(1);
    });

    it('renders custom icon color', function () {
      wrapper.unmount();
      wrapper = shallow(<Button { ...mockProps } iconColor="#339900" />);

      expect(wrapper.find('button')).to.have.length(1);
    });

    it('renders span around text', function () {
      wrapper.unmount();
      wrapper = shallow(<Button { ...mockProps }>Test</Button>);

      expect(wrapper.find('span')).to.have.length(1);
    });

    it('renders custom class name', function () {
      wrapper.unmount();
      wrapper = shallow(<Button { ...mockProps } className="test" />);

      expect(wrapper.find('.test')).to.have.length(1);
    });

    it('renders font awesome icon', function () {
      wrapper.unmount();
      wrapper = shallow(<Button { ...mockProps } icon={ faCog } />);

      expect(wrapper.find('button')).to.have.length(1);
    });

    it('renders custom Icon', function () {
      wrapper.unmount();
      wrapper = shallow(<Button { ...mockProps } icon={ logo } iconMorph={ menu } />);

      expect(wrapper.find('button')).to.have.length(1);
    });

    it('renders external link', function () {
      wrapper.unmount();
      wrapper = shallow(<Button { ...mockProps } link="external" to="/" />);

      expect(wrapper.find('a')).to.have.length(1);
    });

    it('renders Link', function () {
      wrapper.unmount();
      wrapper = shallow(<Button { ...mockProps } link to="/" />);

      expect(wrapper.find(Link)).to.have.length(1);
    });

    it('renders sharp', function () {
      wrapper.unmount();
      wrapper = shallow(<Button { ...mockProps } sharp />);

      expect(wrapper.find('button')).to.have.length(1);
    });

    it('renders left inset', function () {
      wrapper.unmount();
      wrapper = shallow(<Button { ...mockProps } safeAreaInset="left" />);

      expect(wrapper.find('button')).to.have.length(1);
    });

    it('renders right inset', function () {
      wrapper.unmount();
      wrapper = shallow(<Button { ...mockProps } safeAreaInset="right" />);

      expect(wrapper.find('button')).to.have.length(1);
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
