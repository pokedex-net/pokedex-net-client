import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import { updateSettings } from '../../../stores/settings/actions';

/**
 * A page wrapper component that can update the user's language from a route param.
 * @extends {React.Component}
 */
export class View extends Component {
  /**
   * Renders the page passed through the props.
   * @returns {React.Component}
   */
  render() {
    return <this.props.page { ..._.omit(this.props, ['page', 'lang', 'updateSettings']) } />;
  }

  /**
   * Updates the user's language from a route param is it's different than the stored language and then corrects the URL.
   * @emits {updateSettings}
   */
  componentDidMount() {
    if (this.props.location.state && this.props.location.state.prevLang && this.props.location.state.prevLang !== this.props.lang) {
      this.props.updateSettings({ lang: this.props.location.state.prevLang });
      this.props.history.replace({ pathname: this.props.location.pathname, state: {} });
    }
  }
}

export default connect(state => ({
  lang: state.settings.lang,
}), {
  updateSettings,
})(View);
