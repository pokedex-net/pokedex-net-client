import Color from 'color';
import React from 'react';
import { connect } from 'react-redux';

import NavigationItem from './NavigationItem';
import getStyles from './styles';

import { updateMetric } from '../../../stores/ui/actions';

import config from '../../../../config';
import logo from '../../../fixtures/icons/logo';
import menu from '../../../fixtures/icons/menu';

/**
 * A navigation layout component that links to the main areas of the application.
 * @param {Object} props - React Component props.
 * @param {string} props.headerHeight - Header height mapped from Redux store.
 * @param {string} props.lang - ???
 * @param {string} props.sidebarOpen - ???
 * @param {string} props.sidebarWidth - ???
 * @param {string} props.windowWidth - ???
 * @return {React.Component}
 */
export function Navigation(props) {
  const { className, styles } = getStyles(props);
  const baseColor = new Color(config.brandColor);
  const containerClass = `${className} sidebar`;

  const pokemonLinks = [
    { name: 'Gen 7', to: '/gen7', icon: menu, color: 'rgb(213, 128, 42)' },
    { name: 'Gen 6', to: '/gen6', icon: menu, color: 'rgb(64, 115, 191)' },
    { name: 'Gen 5', to: '/gen5', icon: menu, color: 'rgb(0, 0, 0)' },
    { name: 'Gen 4', to: '/gen4', icon: menu, color: 'rgb(64, 174, 191)' },
    { name: 'Gen 3', to: '/gen3', icon: menu, color: 'rgb(191, 64, 64)' },
    { name: 'Gen 2', to: '/gen2', icon: menu, color: 'rgb(191, 174, 64)' },
    { name: 'Gen 1', to: '/gen1', icon: menu, color: 'rgb(191, 64, 64)' },
  ];

  const links = [
    { name: 'Pokémon', to: '/', icon: logo, color: baseColor, subnav: pokemonLinks },
    { name: 'Attacks', to: '/attacks', icon: menu, color: baseColor.hue(30) },
    { name: 'Items', to: '/items', icon: menu, color: baseColor.hue(60) },
    { name: 'Abilities', to: '/abilities', icon: menu, color: baseColor.hue(120) },
    { name: 'Berries', to: '/berries', icon: menu, color: baseColor.hue(180) },
    { name: 'Tools', to: '/tools', icon: menu, color: baseColor.hue(210) },
  ];

  return (
    <div className={ (props.sidebarOpen) ? `${containerClass} open` : containerClass }>
      <nav className={ className }>
        { links.map((link, i) => <NavigationItem key={ i } { ...link } />) }
      </nav>

      <div className={ className } />
      { styles }
    </div>
  );
}

export default connect(state => ({
  headerHeight: state.ui.metrics.headerHeight,
  lang: state.settings.lang,
  sidebarOpen: state.ui.sidebarOpen,
  sidebarWidth: state.ui.metrics.sidebarWidth,
  windowWidth: state.ui.metrics.windowWidth,
}), {
  updateMetric,
})(Navigation);
