import React from 'react';
import { connect } from 'react-redux';

import Button from '../../controls/Button';
import HeaderShape from './HeaderShape';
// import Search from '../../controls/Search';
import getStyles from './styles';

import { updateUi } from '../../../stores/ui/actions';

import config from '../../../../config';
import logo from '../../../fixtures/icons/logo';
import menu from '../../../fixtures/icons/menu';

/**
 * A header layout component that displays the logo/sidebar toggle.
 * @param {Object} props - React Component props.
 * @param {string} props.headerHeight - The header height metric mapped from Redux store.
 * @param {string} props.sidebarOpen - ???
 * @param {string} props.updateUi - ???
 * @return {React.Component}
 */
export function Header(props) {
  const { className, styles } = getStyles(props);

  return (
    <header className={ className }>
      <HeaderShape />

      <div className={ className }>
        <Button
          kind="flat"
          sharp
          icon={ logo }
          iconMorph={ menu }
          hoverLock={ props.sidebarOpen }
          safeAreaInset="left"
          size={ props.headerHeight }
          iconColor={ config.theme.dark.textPrimary }
          onClick={ () => { props.updateUi({ sidebarOpen: !props.sidebarOpen }); } }
          style={ { padding: `${Math.round(props.headerHeight * (1 / 6))}px`, fontSize: `${Math.round(props.headerHeight * (2 / 3))}px` } }
        />
      </div>

      <div className={ className }>
        {/* <Search /> */}
      </div>

      { styles }
    </header>
  );
}

export default connect(state => ({
  headerHeight: state.ui.metrics.headerHeight,
  sidebarOpen: state.ui.sidebarOpen,
}), {
  updateUi,
})(Header);
