import Color from 'color';
import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import Button from '../../../controls/Button';
import Icon from '../../../controls/Icon';
import getStyles from './styles';

import { updateUi } from '../../../../stores/ui/actions';

export function Item(props) {
  const { className, styles } = getStyles(props);

  return (
    <div className={ `${className} item` }>
      <Icon className={ className } icon={ props.icon } fill={ props.color } />

      <div className={ className }>
        <span className={ className }>{ props.name }</span>

        <span className={ className }>
          <NavLink className={ className } to={ props.to } onClick={ () => { props.updateUi({ sidebarOpen: false }); } } />

          { props.subnav.length ?
            <nav className={ className }>
              {
                props.subnav.map((nav, i) => (
                  <Button
                    key={ i }
                    className={ `${className} subnav` }
                    link
                    to={ nav.to }
                    kind="custom"
                    customColor={ nav.color }
                    size={ (props.headerHeight / 4) }
                    icon={ nav.icon }
                  >
                    { nav.name }
                  </Button>
                ))
              }
            </nav> : null
          }

          <div className={ `${className} background` } />
        </span>
      </div>

      { styles }
    </div>
  );
}

export default connect(state => ({
  headerHeight: state.ui.metrics.headerHeight,
  lang: state.settings.lang,
}), {
  updateUi,
})(Item);

Item.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Color)]).isRequired,
  icon: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  name: PropTypes.string.isRequired,
  subnav: PropTypes.array,
  to: PropTypes.string.isRequired,
};

Item.defaultProps = {
  subnav: [],
};
