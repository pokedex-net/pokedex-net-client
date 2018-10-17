import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';

import Header from '../Header';
import Navigation from '../Navigation';
import Routes from '../Routes';
import getGlobalStyles from '../../../styles';
import getStyles from './styles';

import { updateMetric, updateUi } from '../../../stores/ui/actions';

import config from '../../../../config';
import languages from '../../../fixtures/languages';

/**
 * A container layout component that sets document language based on Redux state and maintains the Redux width metric.
 * @extends {React.Component}
 */
export class Container extends Component {
  /** Binds this to custom class methods. */
  constructor() {
    super();

    this.refNav = React.createRef();
    this.refNavButton = React.createRef();
    this.updateWidth = this.updateWidth.bind(this);
    this.handleClickOutsideNav = this.handleClickOutsideNav.bind(this);
  }

  /**
   * Updates the window width metric from the window innerWidth.
   * @emits {updateMetric}
   */
  updateWidth() {
    this.props.updateMetric({ windowWidth: window.innerWidth });
  }

  handleClickOutsideNav(e) {
    const sidebar = this.refNav.current;
    const button = this.refNavButton.current;

    if (sidebar && button && !sidebar.contains(e.target) && !button.contains(e.target)) {
      this.props.updateUi({ sidebarOpen: false });
    }
  }

  /**
   * Renders a React Fragment containing all other layout components.
   * @returns {React.Fragment}
   */
  render() {
    const globalStyles = getGlobalStyles(this.props);
    const { className, styles } = getStyles(this.props);

    return (
      <Fragment>
        <Helmet titleTemplate={ `%s | ${config.name}` } defaultTitle={ config.name }>
          <html lang={ this.props.lang } dir={ (languages[this.props.lang].rtl) ? 'rtl' : 'ltr' } />
          <meta name="apple-mobile-web-app-status-bar-style" content={ (this.props.theme === 'dark') ? 'black' : 'white' } />
        </Helmet>

        <Header ref={ this.refNavButton } />
        <Navigation ref={ this.refNav } />

        <div className={ (this.props.sidebarOpen) ? `${className} sidebar-open` : className }>
          <main className={ className }><Routes /></main>
          <footer className={ className }>{ languages[this.props.lang].langCode } { this.props.lang }</footer>
        </div>

        { globalStyles }
        { styles }
      </Fragment>
    );
  }

  /**
   * Adds resize event listener.
   * @emits {Container#updateWidth}
   */
  componentDidMount() {
    window.addEventListener('resize', this.updateWidth);
    document.addEventListener('mousedown', this.handleClickOutsideNav);
    this.updateWidth();
  }

  /**
   * Removes resize event listener.
   * @emits {Container#updateWidth}
   */
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWidth);
    document.removeEventListener('mousedown', this.handleClickOutsideNav);
  }
}

export default withRouter(connect(state => ({
  headerHeight: state.ui.metrics.headerHeight,
  lang: state.settings.lang,
  theme: state.settings.theme,
  sidebarOpen: state.ui.sidebarOpen,
  windowWidth: state.ui.metrics.windowWidth,
}), {
  updateMetric,
  updateUi,
})(Container));
