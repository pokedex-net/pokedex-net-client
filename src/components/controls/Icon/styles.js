import React from 'react'; // eslint-disable-line no-unused-vars
import { resolve } from 'styled-jsx/css';

export default function getStyles(props) {
  const { className, styles } = resolve`
    svg {
      width: 1em;
      fill: ${props.fill};
    }
  `;

  return { className, styles };
}
