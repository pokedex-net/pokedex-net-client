import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';

import languages from '../../../fixtures/languages';

/**
 * An error page component that displays the relevant error.
 * @param {Object} props - React Component props.
 * @param {string} props.error - The error to display.
 * @param {string} props.lang - Language identifier mapped from Redux store.
 */
export function ErrorView({ error, lang }) {
  return [
    <Helmet key="helmet"><title>{ languages[lang][error] }</title></Helmet>,
    <h1 key="h1">{ languages[lang][error] }</h1>,
  ];
}

export default connect(state => ({
  lang: state.settings.lang,
}), null)(ErrorView);

ErrorView.propTypes = {
  error: PropTypes.string,
};
