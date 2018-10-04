import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import config from '../../../../config';

/**
 * A styles layout component that sets global styles based on Redux state.
 * @param {Object} props - React Component props.
 * @param {string} props.theme - Theme identifier mapped from Redux store.
 * @return {React.Fragment}
 */
export function Styles({ theme }) {
  return (
    <Fragment>
      <style jsx global>{ `
        :root {
          --safe-area-inset-top: env(safe-area-inset-top);
          --safe-area-inset-left: env(safe-area-inset-left);
          --safe-area-inset-right: env(safe-area-inset-right);
          --safe-area-inset-bottom: env(safe-area-inset-bottom);
        }

        @font-face {
          font-family: 'Roboto';
          font-weight: 200;
          src: url('public/fonts/Roboto-Light.ttf') format('truetype');
        }

        @font-face {
          font-family: 'Roboto';
          font-weight: 400;
          src: url('public/fonts/Roboto-Regular.ttf') format('truetype');
        }

        @font-face {
          font-family: 'Roboto';
          font-weight: 600;
          src: url('public/fonts/Roboto-Medium.ttf') format('truetype');
        }

        * {
          margin: 0px;
          outline: 0px;
          border: 0px;
          padding: 0px;
        }

        html,
        body,
        #root {
          overflow-x: hidden;
          height: 100%;
        }

        body,
        #root {
          position: relative;
          display: flex;
          flex-direction: column;
          width: 100%;
        }

        body {
          background-color: ${config.theme[theme].background};
          font-family: 'Roboto', sans-serif;
          color: ${config.theme[theme].textPrimary};
        }

        a {
          text-decoration: none;
          color: inherit;
        }

        h1 {
          font-size: 32px;
          line-height: 32px;
        }

        input {
          border-radius: 4px;
          padding: 4px 8px;
          background-color: rgba(0, 0, 0, 0.3);
          font: inherit;
          color: inherit;
          box-shadow: inset 0 1px 3px rgba(0,0,0,0.12), inset 0 1px 2px rgba(0,0,0,0.24);

          &:focus {
            box-shadow: inset 0 3px 6px rgba(0,0,0,0.16), inset 0 3px 6px rgba(0,0,0,0.23);
          }
        }
      ` }</style>
    </Fragment>
  );
}

export default connect(state => ({
  theme: state.settings.theme,
}), null)(Styles);
