import React from 'react'; // eslint-disable-line no-unused-vars
import { resolve } from 'styled-jsx/css';

import config from '../../../../config';
import languages from '../../../fixtures/languages';

export default function getStyles(props) {
  let width = ((props.windowWidth / 3) - props.headerHeight);

  if (width < props.headerHeight) width = props.headerHeight;
  if (width > (props.headerHeight * 4)) width = (props.headerHeight * 4);

  const { className, styles } = resolve`
    .sidebar {
      position: fixed;
      z-index: 1;
      display: flex;
      flex-direction: column;
      align-content: flex-start;
      align-items: flex-start;
      justify-content: flex-start;
      box-sizing: border-box;
      overflow-x: hidden;
      width: ${props.headerHeight}px;
      width: calc(${props.headerHeight}px + var(--safe-area-inset-${(languages[props.lang].rtl) ? 'right' : 'left'}));
      height: 100%;
      padding-top: ${props.headerHeight}px;
      background-color: ${config.theme.dark.appBar};
      color: ${config.theme.dark.textPrimary};
      box-shadow: inset 0 14px 28px rgba(0,0,0,0.25), inset 0 10px 10px rgba(0,0,0,0.22);
      transition: width 0.2s ease;

      nav {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-content: flex-start;
        align-items: flex-start;
        justify-content: flex-start;
        overflow-y: auto;
        width: 100%;
      }

      div {
        position: relative;
        width: 100%;
        height: ${(props.headerHeight / 2)}px;
        padding-bottom: var(--safe-area-inset-bottom);
        /* background-color: #339900; */
        margin-top: 1px;

        &::after {
          position: absolute;
          left: ${Math.round(props.headerHeight * 0.25)}px;
          right: ${Math.round(props.headerHeight * 0.25)}px;
          top: -1px;
          border-top: 1px solid rgba(255, 255, 255, 0.12);
          content: '';
        }
      }

      &.open {
        width: ${width}px;
        width: calc(${width}px + var(--safe-area-inset-${(languages[props.lang].rtl) ? 'right' : 'left'}));
      }
    }
  `;

  return { className, styles };
}
