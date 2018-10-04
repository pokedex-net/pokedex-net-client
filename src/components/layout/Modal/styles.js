import React from 'react'; // eslint-disable-line no-unused-vars
import { resolve } from 'styled-jsx/css';

import config from '../../../../config';
import languages from '../../../fixtures/languages';

export default function getStyles(props) {
  const { className, styles } = resolve`
    .shield {
      position: absolute;
      z-index: -100;
      display: flex;
      align-items: center;
      align-content: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      opacity: 0;
      background-color: rgba(0, 0, 0, 0.8);
      text-align: center;
      transition: opacity 0.2s ease 0s, z-index 0s ease 0.2s;

      &.visible {
        z-index: 100;
        opacity: 1;
        transition: opacity 0.2s ease 0s;
      }

      .modal {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        align-content: flex-start;
        overflow: hidden;
        border-radius: 4px;
        padding: 0 20px 20px;
        background-color: ${(props.theme === 'dark') ? '#424242' : '#FFFFFF'};
        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);

        h2 {
          display: flex;
          align-items: center;
          align-content: center;
          box-sizing: border-box;
          justify-content: space-between;
          width: calc(100% + 40px);
          height: 42px;
          margin: 0 -20px 20px;
          padding: 0 20px;
          background-color: ${config.brandColor};
          font-size: 20px;
          color: #FFFFFF;
          filter: drop-shadow(0 3px 6px rgba(0,0,0,0.16)) drop-shadow(0 3px 6px rgba(0,0,0,0.23));

          button {
            margin-${(languages[props.lang].rtl) ? 'left' : 'right'}: -15px;
          }
        }
      }
    }
  `;

  return { className, styles };
}
