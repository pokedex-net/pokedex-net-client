import React from 'react';
import { resolve } from 'styled-jsx/css';

export default (props) => {
  return resolve`
    svg {
      width: 1em;
      fill: ${props.fill};
    }
  `;
};
