import _ from 'lodash';
import React from 'react';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';

import ErrorView from '../../views/ErrorView';
import HomeView from '../../views/HomeView';
import View from '../../views/View';

import languages from '../../../fixtures/languages';

/**
 * A component to handle all routes in the application.
 * @param {Object} props - React Component props.
 * @return {React.Component}
 */
export function Routes({ location }) {
  const prevLang = location.pathname.split('/')[1] || '';
  let langPath = '';

  _.forEach(languages, (v, k) => { langPath += `|${k}`; });

  return (
    <Switch>
      {/* <Redirect exact from={ `/:lang(${langPath.slice(1)})/attacks` } to={ { pathname: '/attacks', state: { prevLang } } } /> */}
      <Redirect exact from={ `/:lang(${langPath.slice(1)})` } to={ { pathname: '/', state: { prevLang } } } />

      {/* <Route exact path="/attacks" render={ props => <View page={ AttacksView } { ...props } /> } /> */}
      <Route exact path="/" render={ props => <View page={ HomeView } { ...props } /> } />

      <Route render={ props => <View page={ ErrorView } { ...props } error="notFound" /> } />
    </Switch>
  );
}

export default withRouter(Routes);
