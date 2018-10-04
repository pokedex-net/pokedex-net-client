import React from 'react'; // eslint-disable-line no-unused-vars
import { resolve } from 'styled-jsx/css';

import config from '../../../../../config';

export default function getStyles(props) {
  const { className, styles } = resolve`
    svg {
      position: absolute;
      width: 100%;
      height: ${props.headerHeight}px;

      path {
        fill: ${config.brandColor};
      }
    }
  `;

  return { className, styles };
}
