import Color from 'color';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import anime from 'animejs';

import getStyles from './styles';

/**
 * A button control component that displays a button or a link.
 * @extends {React.Component}
 */
export default class Icon extends Component {
  /** Binds this to custom class methods and creates a parent element ref. */
  constructor(props) {
    super(props);

    /**
     * The parent element ref.
     * @type {React.Ref}
     */
    this.refSvg = React.createRef();

    this.animate = this.animate.bind(this);
  }

  /** Resets the previous path animation and animates the new path. */
  animate(ref, path) {
    anime.remove(ref);
    anime({ targets: ref, d: path, easing: 'easeInOutQuad', duration: 200 });
  }

  /**
   * Renders a React Component containing the icon svg and its paths.
   * @returns {React.Component}
   */
  render() {
    const { className, styles } = getStyles(this.props);
    let customClass = className;

    if (this.props.className) customClass += ` ${this.props.className}`;

    return (
      <svg ref={ this.refSvg } className={ customClass } viewBox="0 0 2560 2560">
        {
          this.props.icon.map((path, i) => (
            <path key={ i } d={ path } />
          ))
        }

        { styles }
      </svg>
    );
  }

  /**
   * Determines when and what to animate to and from based on the hover and morph props.
   * @emits {Icon#animate}
   */
  componentDidUpdate(prevProps) {
    if (this.props.morph) {
      if (!prevProps.hover && this.props.hover) {
        for (let i = 0; i < this.refSvg.current.children.length; i += 1) {
          this.animate(this.refSvg.current.children[i], this.props.morph[i]);
        }
      } else if (prevProps.hover && !this.props.hover) {
        for (let i = 0; i < this.refSvg.current.children.length; i += 1) {
          this.animate(this.refSvg.current.children[i], this.props.icon[i]);
        }
      }
    }
  }
}

Icon.propTypes = {
  className: PropTypes.string,
  fill: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Color)]),
  hover: PropTypes.bool,
  icon: PropTypes.array.isRequired,
  morph: PropTypes.array,
};
