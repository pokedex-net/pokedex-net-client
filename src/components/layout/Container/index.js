import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';

import Header from '../Header';
import Navigation from '../Navigation';
import Routes from '../Routes';
// import Modal from '../Modal';
import Styles from '../Styles';
import getStyles from './styles';

import { updateMetric } from '../../../stores/ui/actions';

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

    this.updateWidth = this.updateWidth.bind(this);
  }

  /**
   * Updates the window width metric from the window innerWidth.
   * @emits {updateMetric}
   */
  updateWidth() {
    this.props.updateMetric({ windowWidth: window.innerWidth });
  }

  /**
   * Renders a React Fragment containing all other layout components.
   * @returns {React.Fragment}
   */
  render() {
    const { className, styles } = getStyles(this.props);

    return (
      <Fragment>
        <Helmet titleTemplate={ `%s | ${config.name}` } defaultTitle={ config.name }>
          <html lang={ this.props.lang } dir={ (languages[this.props.lang].rtl) ? 'rtl' : 'ltr' } />
          <meta name="apple-mobile-web-app-status-bar-style" content={ (this.props.theme === 'dark') ? 'black' : 'white' } />
        </Helmet>

        <Header />
        <Navigation />

        <div className={ (this.props.sidebarOpen) ? `${className} sidebar-open` : className }>
          <main className={ className }><Routes /></main>
          <footer className={ className }>{ languages[this.props.lang].langCode } { this.props.lang }</footer>
        </div>

        {/* <Modal /> */}
        <Styles />

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
    this.updateWidth();
  }

  /**
   * Removes resize event listener.
   * @emits {Container#updateWidth}
   */
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWidth);
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
})(Container));
