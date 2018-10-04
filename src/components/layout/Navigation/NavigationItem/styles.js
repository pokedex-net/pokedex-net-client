import React from 'react'; // eslint-disable-line no-unused-vars
import { resolve } from 'styled-jsx/css';

import languages from '../../../../fixtures/languages';

export default function getStyles(props) {
  const { className, styles } = resolve`
    .item {
      flex: 0 0 auto;
      position: relative;
      display: flex;
      align-items: center;
      align-content: center;
      box-sizing: border-box;
      /* overflow: hidden;
      overflow-y: visible; */
      width: 100%;
      height: ${props.headerHeight}px;
      padding: ${Math.round(props.headerHeight * 0.125)}px;
      padding-left: ${Math.round(props.headerHeight * 0.25)}px;
      padding-right: ${Math.round(props.headerHeight * 0.25)}px;
      font: inherit;
      font-weight: 600;
      font-size: ${Math.round(props.headerHeight * 0.5)}px;
      cursor: pointer;
      user-select: none;

      &::before {
        width: var(--safe-area-inset-${(languages[props.lang].rtl) ? 'right' : 'left'});
        content: '';
      }

      > svg {
        min-width: 1em;
        margin-${(languages[props.lang].rtl) ? 'left' : 'right'}: ${Math.round(props.headerHeight * 0.25)}px;
      }

      div {
        width: calc(100% - 1em - ${Math.round(props.headerHeight * 0.5)}px);
        display: flex;
        flex-direction: column;
        font-size: 0.5em;

        span {
          display: flex;

          a:not(.subnav),
          .background {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
          }

          a:not(.subnav) {
            &:hover,
            &:focus {
              ~ .background {
                background-color: rgba(0, 0, 0, 0.1);
              }
            }

            &:active {
              ~ .background {
                background-color: rgba(0, 0, 0, 0.2);
              }
            }
          }

          .background {
            z-index: -1;
            transition: background-color 0.2s ease;
          }

          nav {
            display: flex;
            overflow-x: auto;

            > .subnav {
              flex: 0 0 auto;
              font-weight: 600;
              font-size: ${Math.round((props.headerHeight / 4) * 0.67)}px;
              margin-top: ${Math.round(props.headerHeight / 12)}px;

              &:not(:first-child) {
                margin-${(languages[props.lang].rtl) ? 'right' : 'left'}: ${Math.round((props.headerHeight * 0.25) / 4)}px;
              }
            }
          }
        }
      }

      &:not(:last-child) {
        margin-bottom: 1px;

        &::after {
          position: absolute;
          left: ${Math.round(props.headerHeight * 0.25)}px;
          right: ${Math.round(props.headerHeight * 0.25)}px;
          bottom: -1px;
          border-top: 1px solid rgba(255, 255, 255, 0.12);
          content: '';
        }
      }
    }
  `;

  return { className, styles };
}
