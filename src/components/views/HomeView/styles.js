import React from 'react';
import { resolve } from 'styled-jsx/css';

import languages from '../../../fixtures/languages';

export default (props) => {
  return resolve`
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
};
