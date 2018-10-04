import React from 'react'; // eslint-disable-line no-unused-vars
import { resolve } from 'styled-jsx/css';

import config from '../../../../config';
import languages from '../../../fixtures/languages';

export default function getStyles(props) {
  let width = ((props.windowWidth / 3) - props.headerHeight);

  if (width < props.headerHeight) width = props.headerHeight;
  if (width > (props.headerHeight * 4)) width = (props.headerHeight * 4);

  const { className, styles } = resolve`
    div {
      position: absolute;
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      margin-${(languages[props.lang].rtl) ? 'right' : 'left'}: 0;
      margin-${(languages[props.lang].rtl) ? 'right' : 'left'}: var(--safe-area-inset-${(languages[props.lang].rtl) ? 'right' : 'left'});
      padding-top: ${props.headerHeight}px;
      padding-${(languages[props.lang].rtl) ? 'right' : 'left'}: ${props.headerHeight}px;
      padding-${(languages[props.lang].rtl) ? 'right' : 'left'}: calc(${props.headerHeight}px + var(--safe-area-inset-${(languages[props.lang].rtl) ? 'right' : 'left'}));
      background-color: ${config.theme[props.theme].background};
      transition: margin-${`${(languages[props.lang].rtl) ? 'right' : 'left'} 0.2s ease`};

      main {
        flex: 1 0 auto;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        align-content: flex-start;
        box-sizing: border-box;
        width: 100%;
        padding: 20px 20px 0;
      }

      footer {
        width: 100%;
        padding: 20px 0;
        padding: 20px 0 calc(20px + var(--safe-area-inset-bottom));
        text-align: center;
        font-weight: 400;
        font-size: 10px;
        color: ${config.theme[props.theme].textSecondary};
      }

      &.sidebar-open {
        margin-${(languages[props.lang].rtl) ? 'right' : 'left'}: ${(width - props.headerHeight)}px;
        margin-${(languages[props.lang].rtl) ? 'right' : 'left'}: calc(${(width - props.headerHeight)}px + var(--safe-area-inset-${(languages[props.lang].rtl) ? 'right' : 'left'}));
      }
    }
  `;

  return { className, styles };
}
