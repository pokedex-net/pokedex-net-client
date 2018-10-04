import React from 'react'; // eslint-disable-line no-unused-vars
import { resolve } from 'styled-jsx/css';

import config from '../../../../config';

export default function getStyles(props) {
  const { className, styles } = resolve`
    header {
      position: fixed;
      z-index: 2;
      display: flex;
      width: 100%;
      height: ${props.headerHeight}px;
      color: ${config.theme.dark.textPrimary};
      filter: drop-shadow(0 3px 6px rgba(0,0,0,0.16)) drop-shadow(0 3px 6px rgba(0,0,0,0.23));

      &::after {
        width: var(--safe-area-inset-right);
        height: ${props.headerHeight}px;
        content: '';
      }

      div {
        display: flex;
        align-items: center;
        align-content: center;
        box-sizing: border-box;
        padding: 0 10px;

        &:first-of-type {
          height: 100%;
          padding: 0;
        }

        &:last-of-type {
          flex: 1;
          justify-content: flex-end;
          height: 50%;
          text-align: right;
        }
      }
    }
  `;

  return { className, styles };
}
