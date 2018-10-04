import _ from 'lodash';
import Color from 'color';
import PropTypes from 'prop-types';
import React, { Component, Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Icon from '../Icon';
import getStyles from './styles';

import config from '../../../../config';

/**
 * A button control component that displays a button or a link.
 * @extends {React.Component}
 */
export class Button extends Component {
  /** Creates a local state and binds this to custom class methods. */
  constructor() {
    super();

    /**
     * The internal component state.
     * @type {Object}
     * @property {boolean} hover=false Whether or not the button is being hovered over.
     */
    this.state = {
      hover: false,
    };

    this.onMouseOut = this.onMouseOut.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
  }

  /** Triggers the onMouseOut function passed from props and sets the internal hover state to false. */
  onMouseOut(e) {
    if (this.props.onMouseOut) this.props.onMouseOut(e);
    this.setState({ hover: false });
  }

  /** Triggers the onMouseOver function passed from props and sets the internal hover state to true. */
  onMouseOver(e) {
    if (this.props.onMouseOver) this.props.onMouseOver(e);
    this.setState({ hover: true });
  }


  /**
   * Renders a React Fragment containing the button or link and its styles.
   * @returns {React.Fragment}
   */
  render() {
    const { className, styles } = getStyles(this.props);
    const hover = this.props.hoverLock || this.state.hover;

    let fill = (this.props.theme === 'light' && this.props.kind === 'flat') ? config.theme.light.textPrimary : config.theme.dark.textPrimary;
    let customClass = `${className} ${this.props.kind}`;
    let content = this.props.children;
    let icon = null;

    if (typeof this.props.children === 'string') content = <span>{ this.props.children }</span>;
    if (this.props.className) customClass += ` ${this.props.className}`;
    if (this.props.iconColor) fill = this.props.iconColor;

    const buttonProps = {
      className: customClass,
      disabled: this.props.disabled,
      id: this.props.id,
      name: this.props.name,
      onClick: this.props.onClick,
      onMouseOut: this.onMouseOut,
      onMouseOver: this.onMouseOver,
      ref: this.props.ref,
      style: this.props.style,
      title: this.props.title,
      type: this.props.type,
      value: this.props.value,
    };

    let iconProps = {
      className: customClass,
      icon: this.props.icon,
    };

    if (this.props.iconMorph && this.props.iconMorph.length) iconProps = { ...iconProps, morph: this.props.iconMorph };

    if (this.props.icon && this.props.icon.length) icon = <Icon { ...iconProps } fill={ fill } hover={ hover } />;
    else if (this.props.icon) icon = <FontAwesomeIcon { ...iconProps } />;

    const children = <Fragment>{ icon } { content }</Fragment>;
    let button = <button { ...buttonProps }>{ children }</button>;

    if (this.props.link) {
      const linkProps = _.omit(buttonProps, ['disabled', 'type', 'value']);

      if (this.props.link === 'external') button = <a href={ this.props.to } target="_blank" rel="noopener noreferrer" { ...linkProps }>{ children }</a>;
      else button = <Link to={ this.props.to } { ...linkProps }>{ children }</Link>;
    }

    return <Fragment>{ button }{ styles }</Fragment>;
  }
}

export default connect(state => ({
  lang: state.settings.lang,
  theme: state.settings.theme,
}), null)(Button);

Button.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  customColor: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Color)]),
  disabled: PropTypes.bool,
  hoverLock: PropTypes.bool,
  icon: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  iconColor: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Color)]),
  iconMorph: PropTypes.array,
  id: PropTypes.string,
  kind: PropTypes.oneOf(['primary', 'success', 'info', 'warning', 'danger', 'flat', 'custom']),
  link: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  name: PropTypes.string,
  onClick: PropTypes.func,
  onMouseOut: PropTypes.func,
  onMouseOver: PropTypes.func,
  ref: PropTypes.func,
  sharp: PropTypes.bool,
  size: PropTypes.number,
  style: PropTypes.object,
  title: PropTypes.string,
  to: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Button.defaultProps = {
  hoverLock: false,
  kind: 'primary',
  size: 32,
  type: 'button',
};
