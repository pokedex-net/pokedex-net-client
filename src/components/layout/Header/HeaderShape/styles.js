import React from 'react';
import { resolve } from 'styled-jsx/css';

import config from '../../../../../config';

export default (props) => {
  return resolve`
    svg {
      position: absolute;
      width: 100%;
      height: ${props.headerHeight}px;

      path {
        fill: ${config.brandColor};
      }
    }
  `;
};
