import Color from 'color';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import Button from '../../../controls/Button';
import Icon from '../../../controls/Icon';
import getStyles from './styles';

export class NavigationItem extends Component {
  render() {
    const { className, styles } = getStyles(this.props);

    return (
      <div className={ `${className} item` }>
        <Icon className={ className } icon={ this.props.icon } fill={ this.props.color } />

        <div className={ className }>
          <span className={ className }>{ this.props.name }</span>

          <span className={ className }>
            <NavLink className={ className } to={ this.props.to } />
            <div className={ `${className} background` } />

            <nav className={ className }>
              {
                this.props.subnav.map((nav, i) => (
                  <Button
                    key={ i }
                    className={ `${className} subnav` }
                    link
                    to={ nav.to }
                    kind="custom"
                    customColor={ nav.color }
                    size={ (this.props.headerHeight / 4) }
                    icon={ nav.icon }
                  >
                    { nav.name }
                  </Button>
                ))
              }
            </nav>
          </span>
        </div>

        { styles }
      </div>
    );
  }
}

export default connect(state => ({
  headerHeight: state.ui.metrics.headerHeight,
  lang: state.settings.lang,
}), null)(NavigationItem);

NavigationItem.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Color)]).isRequired,
  icon: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  name: PropTypes.string.isRequired,
  subnav: PropTypes.array,
  to: PropTypes.string.isRequired,
};

NavigationItem.defaultProps = {
  subnav: [],
};
