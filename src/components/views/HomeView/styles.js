import React from 'react'; // eslint-disable-line no-unused-vars
import { resolve } from 'styled-jsx/css';

import languages from '../../../fixtures/languages';

export default function getStyles(props) {
  const { className, styles } = resolve`
    h2 {
      margin: 20px 0 10px;
    }

    a,
    button {
      &:not(:first-child) {
        margin-${(languages[props.lang].rtl) ? 'right' : 'left'}: 20px;
      }
    }

    div {
      display: flex;
    }
  `;

  return { className, styles };
}
