import React from 'react';
import { connect } from 'react-redux';

import getStyles from './styles';

import languages from '../../../../fixtures/languages';

/**
 * A header shape component that displays the header curve svg.
 * @param {Object} props - React Component props.
 * @return {React.Component}
 */
export function HeaderShape({ headerHeight, lang, windowWidth }) {
  const { className, styles } = getStyles({ headerHeight });
  let startCurve = ((windowWidth / 3) - headerHeight);

  if (startCurve < headerHeight) startCurve = headerHeight;
  if (startCurve > (headerHeight * 4)) startCurve = (headerHeight * 4);

  const path = (!languages[lang].rtl) ? `M 0,0
    V ${headerHeight}
    H ${startCurve}
    C ${(startCurve + headerHeight)},${headerHeight} ${(startCurve + headerHeight)},${(headerHeight / 2)}  ${(startCurve + (headerHeight * 2))},${(headerHeight / 2)}
    H ${windowWidth}
    V 0
    H 0` : `M ${windowWidth},0
    V ${headerHeight}
    H ${(windowWidth - startCurve)}
    C ${(windowWidth - startCurve - headerHeight)},${headerHeight} ${(windowWidth - startCurve - headerHeight)},${(headerHeight / 2)}  ${(windowWidth - startCurve - (headerHeight * 2))},${(headerHeight / 2)}
    H 0
    V 0
    H ${windowWidth}`;

  return <svg className={ className }><path className={ className } d={ path } />{ styles }</svg>;
}

export default connect(state => ({
  headerHeight: state.ui.metrics.headerHeight,
  lang: state.settings.lang,
  windowWidth: state.ui.metrics.windowWidth,
}))(HeaderShape);
