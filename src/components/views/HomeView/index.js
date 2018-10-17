import _ from 'lodash';
import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { faCog } from '@fortawesome/free-solid-svg-icons';

import Button from '../../controls/Button';
import getStyles from './styles';

import { updateSettings } from '../../../stores/settings/actions';

import languages from '../../../fixtures/languages';
import logo from '../../../fixtures/icons/logo';

/**
 * A home page component showcasing WIP components.
 * @param {Object} props - React Component props.
 * @return {React.Fragment}
 */
export function HomeView(props) {
  const { className, styles } = getStyles(props);

  const handleLangChange = () => {
    const langs = _.keys(languages);
    let newLangIndex = (_.indexOf(langs, props.lang) + 1);

    if (newLangIndex === langs.length) newLangIndex = 0;

    props.updateSettings({ lang: langs[newLangIndex] });
  };

  const handleThemeChange = () => {
    props.updateSettings({ theme: ((props.theme === 'dark') ? 'light' : 'dark') });
  };

  return (
    <Fragment>
      <h1>{ languages[props.lang].hello }</h1>
      <h2 className={ className }>Change Language</h2>

      <div className={ className }>
        <Button className={ className } onClick={ handleLangChange }>{ languages[props.lang].languageName }</Button>
      </div>

      <h2 className={ className }>Change Theme</h2>

      <div className={ className }>
        <Button className={ className } onClick={ handleThemeChange }>{ _.startCase(props.theme) }</Button>
      </div>

      <h2 className={ className }>Button Variants</h2>

      <div className={ className }>
        <Button className={ className }>Primary</Button>
        <Button className={ className } kind="success">Success</Button>
        <Button className={ className } kind="info">Info</Button>
        <Button className={ className } kind="warning">Warning</Button>
        <Button className={ className } kind="danger">Danger</Button>
        <Button className={ className } kind="flat">Flat</Button>
        <Button className={ className } kind="flat" icon={ faCog } link="external" to="https://github.com/pokedex-net/pokedex-net-client">External Link</Button>
        <Button className={ className } kind="flat" icon={ logo } link to="/i-am-error">Internal Link</Button>
      </div>

      <div style={ { height: '1000px' } } />

      { styles }
    </Fragment>
  );
}

export default connect(state => ({
  lang: state.settings.lang,
  theme: state.settings.theme,
}), {
  updateSettings,
})(HomeView);
