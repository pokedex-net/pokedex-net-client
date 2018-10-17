import Color from 'color';
import React from 'react';
import { resolve } from 'styled-jsx/css';

import config from '../../../../config';
import languages from '../../../fixtures/languages';

const colors = {
  primary: new Color(config.theme.colors.primary),
  success: new Color(config.theme.colors.success),
  info: new Color(config.theme.colors.info),
  warning: new Color(config.theme.colors.warning),
  danger: new Color(config.theme.colors.danger),
};

export default (props) => {
  return resolve`
    a,
    button {
      position: relative;
      display: flex;
      align-items: center;
      align-content: center;
      box-sizing: border-box;
      box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
      overflow: hidden;
      min-width: ${Math.round(props.size)}px;
      min-height: ${Math.round(props.size)}px;
      width: auto;
      border-radius: ${(props.sharp) ? 0 : 4}px;
      padding: ${Math.round(props.size * 0.125)}px;
      padding-left: ${Math.round(props.size * 0.25)}px;
      padding-right: ${Math.round(props.size * 0.25)}px;
      background-color: transparent;
      font: inherit;
      font-weight: 400;
      font-size: ${Math.round(props.size * 0.5)}px;
      line-height: ${Math.round(props.size * 0.5)}px;
      text-decoration: none;
      color: ${(props.theme === 'light' && props.kind === 'flat') ? 'inherit' : config.theme.dark.textPrimary};
      white-space: nowrap;
      cursor: pointer;
      user-select: none;
      transition: background-color 0.2s ease, box-shadow 0.2s ease;

      img {
        width: ${Math.round(props.size * 0.75)}px;
        height: ${Math.round(props.size * 0.75)}px;
        margin-${(languages[props.lang].rtl) ? 'left' : 'right'}: ${Math.round(props.size * 0.25)}px;
        border-radius: 4px;
      }

      svg {
        margin-${(languages[props.lang].rtl) ? 'left' : 'right'}: ${Math.round(props.size * 0.25)}px;

        &:last-child {
          margin: 0;
        }
      }

      &:hover,
      &:focus {
        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
      }

      &.primary {
        background-color: ${colors.primary};

        &:active {
          background-color: ${colors.primary.darken(0.1)};
        }
      }

      &.success {
        background-color: ${colors.success};

        &:active {
          background-color: ${colors.success.darken(0.1)};
        }
      }

      &.info {
        background-color: ${colors.info};

        &:active {
          background-color: ${colors.info.darken(0.1)};
        }
      }

      &.warning {
        background-color: ${colors.warning};

        &:active {
          background-color: ${colors.warning.darken(0.1)};
        }
      }

      &.danger {
        background-color: ${colors.danger};

        &:active {
          background-color: ${colors.danger.darken(0.1)};
        }
      }

      &.custom {
        background-color: ${props.customColor};

        &:active {
          background-color: ${(new Color(props.customColor)).darken(0.1)};
        }
      }

      &.flat {
        box-shadow: none;
        font-weight: 600;

        &:hover,
        &:focus {
          box-shadow: none;
          background-color: rgba(0, 0, 0, 0.1);
        }

        &:active {
          background-color: rgba(0, 0, 0, 0.2);
        }
      }
    }
  `;
};
